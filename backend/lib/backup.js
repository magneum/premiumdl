(async () => {
  const ffmpeg = require("fluent-ffmpeg");
  const youtubedl = require("youtube-dl-exec");
  const logger = require("progress-estimator")();
  const url = "https://youtu.be/syFZfO_wfMQ";
  const promise = youtubedl(url, {
    noWarnings: true,
    dumpSingleJson: true,
    preferFreeFormats: true,
    noCheckCertificates: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  });
  const result = await logger(promise, `Obtaining ${url}`);

  function videoUrl(obj) {
    var v_1080p = obj.formats.filter(
      (v) =>
        v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
    );
    const data_v_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
    var v_720p = obj.formats.filter(
      (v) =>
        v.format_id === "247" ||
        v.format_id === "398" ||
        v.format_id === "136" ||
        v.format_id === "22"
    );
    const data_v_720p =
      v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
    var v_480p = obj.formats.filter(
      (v) =>
        v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
    );
    const data_v_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
    var v_360p = obj.formats.filter(
      (v) =>
        v.format_id === "396" ||
        v.format_id === "134" ||
        v.format_id === "18" ||
        v.format_id === "243"
    );
    const data_v_360p =
      v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
    var v_240p = obj.formats.filter(
      (v) =>
        v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
    );
    const data_v_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
    var v_144p = obj.formats.filter(
      (v) =>
        v.format_id === "17" ||
        v.format_id === "597" ||
        v.format_id === "598" ||
        v.format_id === "394" ||
        v.format_id === "160" ||
        v.format_id === "278"
    );
    const data_v_144p =
      v_144p[0] ||
      v_144p[1] ||
      v_144p[2] ||
      v_144p[3] ||
      v_144p[4] ||
      v_144p[5] ||
      v_144p;

    if (data_v_1080p.width !== undefined) {
      return data_v_1080p;
    }
    if (data_v_1080p.width === undefined && data_v_720p.width !== undefined) {
      return data_v_720p;
    }
    if (
      data_v_1080p.width === undefined &&
      data_v_720p.width === undefined &&
      data_v_480p.width !== undefined
    ) {
      return data_v_480p;
    }
    if (
      data_v_1080p.width === undefined &&
      data_v_720p.width === undefined &&
      data_v_480p.width === undefined &&
      data_v_360p.width !== undefined
    ) {
      return data_v_360p;
    }
    if (
      data_v_1080p.width === undefined &&
      data_v_720p.width === undefined &&
      data_v_480p.width === undefined &&
      data_v_360p.width === undefined &&
      data_v_240p.width !== undefined
    ) {
      return data_v_240p;
    }
    if (
      data_v_1080p.width === undefined &&
      data_v_720p.width === undefined &&
      data_v_480p.width === undefined &&
      data_v_360p.width === undefined &&
      data_v_240p.width === undefined &&
      data_v_144p.width !== undefined
    ) {
      return data_v_144p;
    }
  }

  function audioUrl(obj) {
    var a_ultralow = obj.formats.filter(
      (v) => v.format_id === "599" || v.format_id === "600"
    );
    const data_a_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
    var a_low = obj.formats.filter(
      (v) =>
        v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
    );
    const data_a_low = a_low[0] || a_low[1] || a_low[2] || a_low;
    var a_medium = obj.formats.filter(
      (v) => v.format_id === "140" || v.format_id === "251"
    );
    const data_a_medium = a_medium[0] || a_medium[1] || a_medium;

    if (data_a_medium.width !== undefined) {
      return data_a_medium;
    }
    if (data_a_medium.width === undefined && data_a_low.width !== undefined) {
      return data_a_low;
    }
    if (
      data_a_medium.width === undefined &&
      data_a_low.width === undefined &&
      data_a_ultralow.width !== undefined
    ) {
      return data_a_ultralow;
    }
  }

  var dataA = audioUrl(result);
  var dataV = videoUrl(result);
  const current = Date.now() + ".mp4";

  ffmpeg()
    .addInput(dataV.url)
    .addInput(dataA.url)
    .output(current)
    .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
    .on("error", (error) => console.log("errrrr", error))
    .on("start", (command) => console.log(command))
    .on("end", () =>
      ffmpeg(Date.now() + ".mp4")
        .format("mp4")
        .on("error", (err) => console.log(err))
        .writeToStream(response, { end: true })
    )
    .run();
})();
