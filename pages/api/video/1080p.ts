var Tube = require("tube-exec");
var process = require("progress-estimator")();
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    var BlackBox = Tube(req.query.q, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    });
    var _data = await process(BlackBox, "Obtaining (1080p)" + ": ");
    var _vojs = _data.formats.filter(
      (v: any) =>
        v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
    );
    var _Found = _vojs[2] || _vojs[1] || _vojs[0] || _vojs;
    if (_Found.width !== undefined) return res.send(_Found);
    else return res.send(null);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
