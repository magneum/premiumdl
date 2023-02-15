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
    // ====================== FOR 144p ======================
    var _vo_144p = _data.formats.filter(
      (v: any) =>
        v.format_id === "17" ||
        v.format_id === "597" ||
        v.format_id === "598" ||
        v.format_id === "394" ||
        v.format_id === "160" ||
        v.format_id === "278"
    );
    var _Fo_144p =
      _vo_144p[0] ||
      _vo_144p[1] ||
      _vo_144p[2] ||
      _vo_144p[3] ||
      _vo_144p[4] ||
      _vo_144p[5] ||
      _vo_144p;
    // ====================== FOR 240p ======================
    var _vo_240p = _data.formats.filter(
      (v: any) =>
        v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
    );
    var _Fo_240p = _vo_240p[0] || _vo_240p[1] || _vo_240p[2] || _vo_240p;
    // ====================== FOR 360p ======================
    var _vo_360p = _data.formats.filter(
      (v: any) =>
        v.format_id === "396" ||
        v.format_id === "134" ||
        v.format_id === "18" ||
        v.format_id === "243"
    );
    var _Fo_360p =
      _vo_360p[0] || _vo_360p[1] || _vo_360p[2] || _vo_360p[3] || _vo_360p;
    // ====================== FOR 480p ======================
    var _vo_480p = _data.formats.filter(
      (v: any) =>
        v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
    );
    var _Fo_480p = _vo_480p[0] || _vo_480p[1] || _vo_480p[2] || _vo_480p;
    // ====================== FOR 720p ======================
    var _vo_720p = _data.formats.filter(
      (v: any) =>
        v.format_id === "247" ||
        v.format_id === "398" ||
        v.format_id === "136" ||
        v.format_id === "22"
    );
    var _Fo_720p =
      _vo_720p[3] || _vo_720p[2] || _vo_720p[1] || _vo_720p[0] || _vo_720p;
    // ====================== FOR 1080p ======================
    var _vo_1080p = _data.formats.filter(
      (v: any) =>
        v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
    );
    var _Fo_1080p = _vo_1080p[2] || _vo_1080p[1] || _vo_1080p[0] || _vo_1080p;
    // ================================= Response Sender Logic ======================
    if (_Fo_1080p.width !== undefined) {
      return res.send({
        _1080p: _Fo_1080p.url,
        _720p: _Fo_720p.url,
        _480p: _Fo_480p.url,
        _360p: _Fo_360p.url,
        _240p: _Fo_240p.url,
        _144p: _Fo_144p.url,
      });
    } else if (_Fo_1080p.width === undefined && _Fo_720p.width !== undefined) {
      return res.send({
        _1080p: undefined,
        _720p: _Fo_720p.url,
        _480p: _Fo_480p.url,
        _360p: _Fo_360p.url,
        _240p: _Fo_240p.url,
        _144p: _Fo_144p.url,
      });
    } else if (
      _Fo_1080p.width === undefined &&
      _Fo_720p.width === undefined &&
      _Fo_480p.width !== undefined
    ) {
      return res.send({
        _1080p: undefined,
        _720p: undefined,
        _480p: _Fo_480p.url,
        _360p: _Fo_360p.url,
        _240p: _Fo_240p.url,
        _144p: _Fo_144p.url,
      });
    } else if (
      _Fo_1080p.width === undefined &&
      _Fo_720p.width === undefined &&
      _Fo_480p.width === undefined &&
      _Fo_360p.width !== undefined
    ) {
      return res.send({
        _1080p: undefined,
        _720p: undefined,
        _480p: undefined,
        _360p: _Fo_360p.url,
        _240p: _Fo_240p.url,
        _144p: _Fo_144p.url,
      });
    } else if (
      _Fo_1080p.width === undefined &&
      _Fo_720p.width === undefined &&
      _Fo_480p.width === undefined &&
      _Fo_360p.width === undefined &&
      _Fo_240p.width !== undefined
    ) {
      return res.send({
        _1080p: undefined,
        _720p: undefined,
        _480p: undefined,
        _360p: undefined,
        _240p: _Fo_240p.url,
        _144p: _Fo_144p.url,
      });
    } else if (
      _Fo_1080p.width === undefined &&
      _Fo_720p.width === undefined &&
      _Fo_480p.width === undefined &&
      _Fo_360p.width === undefined &&
      _Fo_240p.width === undefined &&
      _Fo_144p.width !== undefined
    ) {
      return res.send({
        _1080p: undefined,
        _720p: undefined,
        _480p: undefined,
        _360p: undefined,
        _240p: undefined,
        _144p: undefined,
      });
    } else
      return res.status(500).json({
        status: "error",
        message: "SORRY: No Streaming Service Found...",
      });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
// http://localhost:3000/api/video?q=https://youtu.be/SbOaOUHBJ2o
