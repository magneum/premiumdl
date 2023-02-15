var Tube = require("tube-exec");
var { shorten } = require("tinyurl");
var process = require("progress-estimator")();
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    var BlackBox = Tube(request.query.q, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    });
    var _data = await process(BlackBox, "Obtaining: " + request.query.q);
    // ====================== FOR Medium ======================
    var a_medium = _data.formats.filter(
      (v: any) => v.format_id === "140" || v.format_id === "251"
    );
    var dTa_medium = a_medium[0] || a_medium[1] || a_medium;
    // ====================== FOR Low ======================
    var a_low = _data.formats.filter(
      (v: any) =>
        v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
    );
    var dTa_low = a_low[0] || a_low[1] || a_low[2] || a_low;
    // ====================== FOR Ultralow ======================
    var a_ultralow = _data.formats.filter(
      (v: any) => v.format_id === "599" || v.format_id === "600"
    );
    var dTa_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
    // ================================= Response Sender Logic ======================
    if (dTa_medium.width !== undefined) {
      return response.send(await shorten(dTa_medium.url));
    } else if (dTa_medium.width === undefined && dTa_low.width !== undefined) {
      return response.send(await shorten(dTa_low.url));
    } else if (
      dTa_medium.width === undefined &&
      dTa_low.width === undefined &&
      dTa_ultralow.width !== undefined
    ) {
      return response.send(await shorten(dTa_ultralow.url));
    } else
      return response.status(500).json({
        status: "error",
        message: "SORRY: No Streaming Service Found...",
      });
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
// http://localhost:3000/api/video?q=https://youtu.be/SbOaOUHBJ2o
