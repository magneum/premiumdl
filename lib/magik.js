var Tube = require("tube-exec");
var ffmpeg = require("fluent-ffmpeg");
var process = require("progress-estimator")();
var ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

async function magik(url) {
  if (!url) return reject(new Error("No Url passed...."));
  var BlackBox = Tube(url, {
    noWarnings: true,
    dumpSingleJson: true,
    preferFreeFormats: true,
    noCheckCertificates: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  });
  var obj = await process(BlackBox, "Obtaining: " + url);
  function videoUrl() {
    var v_1080p = obj.formats.filter(
      (v) =>
        v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
    );
    var dTv_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
    var v_720p = obj.formats.filter(
      (v) =>
        v.format_id === "247" ||
        v.format_id === "398" ||
        v.format_id === "136" ||
        v.format_id === "22"
    );
    var dTv_720p = v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
    var v_480p = obj.formats.filter(
      (v) =>
        v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
    );
    var dTv_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
    var v_360p = obj.formats.filter(
      (v) =>
        v.format_id === "396" ||
        v.format_id === "134" ||
        v.format_id === "18" ||
        v.format_id === "243"
    );
    var dTv_360p = v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
    var v_240p = obj.formats.filter(
      (v) =>
        v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
    );
    var dTv_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
    var v_144p = obj.formats.filter(
      (v) =>
        v.format_id === "17" ||
        v.format_id === "597" ||
        v.format_id === "598" ||
        v.format_id === "394" ||
        v.format_id === "160" ||
        v.format_id === "278"
    );
    var dTv_144p =
      v_144p[0] ||
      v_144p[1] ||
      v_144p[2] ||
      v_144p[3] ||
      v_144p[4] ||
      v_144p[5] ||
      v_144p;

    if (dTv_1080p.width !== undefined) {
      return dTv_1080p;
    }
    if (dTv_1080p.width === undefined && dTv_720p.width !== undefined) {
      return dTv_720p;
    }
    if (
      dTv_1080p.width === undefined &&
      dTv_720p.width === undefined &&
      dTv_480p.width !== undefined
    ) {
      return dTv_480p;
    }
    if (
      dTv_1080p.width === undefined &&
      dTv_720p.width === undefined &&
      dTv_480p.width === undefined &&
      dTv_360p.width !== undefined
    ) {
      return dTv_360p;
    }
    if (
      dTv_1080p.width === undefined &&
      dTv_720p.width === undefined &&
      dTv_480p.width === undefined &&
      dTv_360p.width === undefined &&
      dTv_240p.width !== undefined
    ) {
      return dTv_240p;
    }
    if (
      dTv_1080p.width === undefined &&
      dTv_720p.width === undefined &&
      dTv_480p.width === undefined &&
      dTv_360p.width === undefined &&
      dTv_240p.width === undefined &&
      dTv_144p.width !== undefined
    ) {
      return dTv_144p;
    }
  }

  function audioUrl() {
    var a_ultralow = obj.formats.filter(
      (v) => v.format_id === "599" || v.format_id === "600"
    );
    var dTa_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
    var a_low = obj.formats.filter(
      (v) =>
        v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
    );
    var dTa_low = a_low[0] || a_low[1] || a_low[2] || a_low;
    var a_medium = obj.formats.filter(
      (v) => v.format_id === "140" || v.format_id === "251"
    );
    var dTa_medium = a_medium[0] || a_medium[1] || a_medium;

    if (dTa_medium.width !== undefined) {
      return dTa_medium;
    }
    if (dTa_medium.width === undefined && dTa_low.width !== undefined) {
      return dTa_low;
    }
    if (
      dTa_medium.width === undefined &&
      dTa_low.width === undefined &&
      dTa_ultralow.width !== undefined
    ) {
      return dTa_ultralow;
    }
  }
  return {
    _audio: audioUrl(),
    _video: videoUrl(),
  };
}
// (async () => {
// var data = await magik("https://youtu.be/pHYeJ-vSiuU");
// var current = Date.now() + ".mp4";
// ffmpeg()
// .setFfmpegPath(ffmpegPath)
// .addInput(data._video.url)
// .addInput(data._audio.url)
// .output(current)
// .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
// .on("error", (error) => console.log("errrrr", error))
// .on("start", (command) => console.log(command))
// .on("end", () => {
// ffmpeg(Date.now() + ".mp4")
// .setFfmpegPath(ffmpegPath)
// .format("mp4")
// .on("error", (err) => console.log(err))
// .writeToStream(response, { end: true });
// })
// .run();
// })();
module.exports = magik;
