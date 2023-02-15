import type { NextApiRequest, NextApiResponse } from "next";
var Tube = require("tube-exec");
var process = require("progress-estimator")();

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
    var _data = await process(BlackBox, "Obtaining: " + req.query.q);
    var v_1080p = _data.formats.filter(
      (v: any) =>
        v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
    );
    var dTv_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
    if (dTv_1080p.width !== undefined) {
      return res.send(dTv_1080p);
    }
    return res.send(null);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
// http://localhost:3000/api/video/_1080p?q=https://youtu.be/SbOaOUHBJ2o
