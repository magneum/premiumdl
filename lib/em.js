// http://localhost:9897/audio?q=jaan%20nisar
// http://localhost:9897/video?q=jaan%20nisar
// http://localhost:9897/metadata?q=jaan%20nisar
var cors = require("cors");
var https = require("https");
var axios = require("axios");
var Tube = require("tube-exec");
var Spinnies = require("spinnies");
var FFmpeg = require("fluent-ffmpeg");
var progress = require("progress-estimator")();
var port = process.env.PORT || process.env.port || 9897;
var contentDisposition = require("content-disposition");
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;
// ===========================================================================================================
function shrink(url) {
return new Promise((resolve, reject) => {
https
.get(
"https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
(res) => {
res.on("data", (chunk) => {
resolve(chunk.toString());
});
}
)
.on("error", (err) => {
reject(err);
});
});
}

var express = require("express");
var app = express();
var spin = new Spinnies();
spin.add("premiumdl", { text: "Blackmagik Server Started" });
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log("bit.ly/premiumdl :: " + port));
app.get("/", (request, response) => {
return response.send("bit.ly/premiumdl");
});
// ===========================================================================================================
function FFMPEGV(response, _VideoLink, _AudioLink, _Found) {
response.setHeader(
"Content-disposition",
contentDisposition("premiumdl -video-" + _Found.TITLE + ".mp4")
);
FFmpeg()
.addInput(_VideoLink)
.addInput(_AudioLink)
.setFfmpegPath(FFmpegPath)
.setFfprobePath(FFmpegProbe)
.outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
.videoCodec("libx264")
.withAudioCodec("aac")
.format("mp4")
.outputOptions(["-movflags", "frag_keyframe + empty_moov"])
.on("error", (e) => console.error("ERROR: " + e.message))
.on("end", () => console.log("INFO: stream sent to client successfully."))
.output(response, { end: true })
.run();
}
// ===========================================================================================================
function FFMPEGA(response, _AudioLink, _Found) {
response.setHeader(
"Content-disposition",
contentDisposition("premiumdl -audio-" + _Found.TITLE + ".mp3")
);
FFmpeg(_AudioLink)
.format("mp3")
.setFfmpegPath(FFmpegPath)
.setFfprobePath(FFmpegProbe)
.output(response, { end: true })
.on("error", (e) => console.error("ERROR: " + e.message))
.on("end", () => console.log("INFO: stream sent to client successfully."))
.run();
}
// ===========================================================================================================
app.get("/video", async (request, response) => {
console.clear();
let _AudioLink;
let _VideoLink;
try {
var musicData = await axios.get(
"https://magneum.vercel.app/api/youtube_sr?q=" + request.query.q
);
var _Found = musicData.data._youtube_search[0];
var bb = Tube(_Found.LINK, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
});
var object = await progress(bb, "Obtaining: " + " ");
// ===========================================================================================================
var a_ultralow = object.formats.filter(
(v) => v.format_id === "599" || v.format_id === "600"
);
var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
var a_low = object.formats.filter(
(v) =>
v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
);
var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
var a_medium = object.formats.filter(
(v) => v.format_id === "140" || v.format_id === "251"
);
var db_medium = a_medium[0] || a_medium[1] || a_medium;

if (db_medium.width !== undefined) {
console.info("Medium: ", db_medium.url);
_AudioLink = db_medium.url;
} else if (db_medium.width === undefined && db_low.width !== undefined) {
console.info("Low: ", db_low.url);
_AudioLink = db_low.url;
} else if (
db_medium.width === undefined &&
db_low.width === undefined &&
db_ultralow.width !== undefined
) {
console.info("Ultralow: ", db_ultralow.url);
_AudioLink = db_ultralow.url;
} else {
return response.status(400).json({
success: false,
error: "ERROR: no downloadable audio link found.",
});
}
// ===========================================================================================================
var v_1080p = object.formats.filter(
(v) =>
v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
);
var dTv_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
var v_720p = object.formats.filter(
(v) =>
v.format_id === "247" ||
v.format_id === "398" ||
v.format_id === "136" ||
v.format_id === "22"
);
var dTv_720p = v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
var v_480p = object.formats.filter(
(v) =>
v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
);
var dTv_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
var v_360p = object.formats.filter(
(v) =>
v.format_id === "396" ||
v.format_id === "134" ||
v.format_id === "18" ||
v.format_id === "243"
);
var dTv_360p = v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
var v_240p = object.formats.filter(
(v) =>
v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
);
var dTv_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
var v_144p = object.formats.filter(
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
console.info("1080p: ", dTv_1080p.url);
_VideoLink = dTv_1080p.url;
} else if (dTv_1080p.width === undefined && dTv_720p.width !== undefined) {
console.info("720p: ", dTv_720p.url);
_VideoLink = dTv_720p.url;
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width !== undefined
) {
console.info("480p: ", dTv_480p.url);
_VideoLink = dTv_480p.url;
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width !== undefined
) {
console.info("360p: ", dTv_360p.url);
_VideoLink = dTv_360p.url;
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width !== undefined
) {
console.info("240p: ", dTv_240p.url);
_VideoLink = dTv_240p.url;
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width === undefined &&
dTv_144p.width !== undefined
) {
console.info("144p: ", dTv_144p.url);
_VideoLink = dTv_144p.url;
} else {
return response.status(400).json({
success: false,
error: "ERROR: no downloadable video link found.",
});
}
return FFMPEGV(response, _VideoLink, _AudioLink, _Found);
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
// ===========================================================================================================
app.get("/audio", async (request, response) => {
console.clear();
try {
var musicData = await axios.get(
"https://magneum.vercel.app/api/youtube_sr?q=" + request.query.q
);
var _Found = musicData.data._youtube_search[0];
var bb = Tube(_Found.LINK, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
});
var object = await progress(bb, "Obtaining: " + " ");
var a_ultralow = object.formats.filter(
(v) => v.format_id === "599" || v.format_id === "600"
);
var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
var a_low = object.formats.filter(
(v) =>
v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
);
var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
var a_medium = object.formats.filter(
(v) => v.format_id === "140" || v.format_id === "251"
);
var db_medium = a_medium[0] || a_medium[1] || a_medium;

if (db_medium.width !== undefined) {
console.info("Medium: ", db_medium.url);
return FFMPEGA(response, db_medium.url, _Found);
} else if (db_medium.width === undefined && db_low.width !== undefined) {
console.info("Low: ", db_low.url);
return FFMPEGA(response, db_low.url, _Found);
} else if (
db_medium.width === undefined &&
db_low.width === undefined &&
db_ultralow.width !== undefined
) {
console.info("Ultralow: ", db_ultralow.url);
return FFMPEGA(response, db_ultralow.url, _Found);
} else {
return response.status(400).json({
success: false,
error: "ERROR: no downloadable audio link found.",
});
}
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
// ===========================================================================================================
app.get("/metadata", async (request, response) => {
try {
let _AudioLink;
var musicData = await axios.get(
"https://magneum.vercel.app/api/youtube_sr?q=" + request.query.q
);
var _Found = musicData.data._youtube_search[0];
var bb = Tube(_Found.LINK, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
});
var object = await progress(bb, "Obtaining: " + " ");
// =========================================================
var a_ultralow = object.formats.filter(
(v) => v.format_id === "599" || v.format_id === "600"
);
var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
var a_low = object.formats.filter(
(v) =>
v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
);
var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
var a_medium = object.formats.filter(
(v) => v.format_id === "140" || v.format_id === "251"
);
var db_medium = a_medium[0] || a_medium[1] || a_medium;

if (db_medium.width !== undefined) {
_AudioLink = db_medium.url;
} else if (db_medium.width === undefined && db_low.width !== undefined) {
_AudioLink = db_low.url;
} else if (
db_medium.width === undefined &&
db_low.width === undefined &&
db_ultralow.width !== undefined
) {
_AudioLink = db_ultralow.url;
}
// =========================================================
var v_1080p = object.formats.filter(
(v) =>
v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
);
var dTv_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
var v_720p = object.formats.filter(
(v) =>
v.format_id === "247" ||
v.format_id === "398" ||
v.format_id === "136" ||
v.format_id === "22"
);
var dTv_720p = v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
var v_480p = object.formats.filter(
(v) =>
v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
);
var dTv_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
var v_360p = object.formats.filter(
(v) =>
v.format_id === "396" ||
v.format_id === "134" ||
v.format_id === "18" ||
v.format_id === "243"
);
var dTv_360p = v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
var v_240p = object.formats.filter(
(v) =>
v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
);
var dTv_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
var v_144p = object.formats.filter(
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
// =========================================================
if (dTv_1080p.width !== undefined) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: await shrink(_AudioLink),
_Video: {
_1080p: await shrink(dTv_1080p.url),
_720p: await shrink(dTv_720p.url),
_480p: await shrink(dTv_480p.url),
_360p: await shrink(dTv_360p.url),
_240p: await shrink(dTv_240p.url),
_144p: await shrink(dTv_144p.url),
},
});
} else if (dTv_1080p.width === undefined && dTv_720p.width !== undefined) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: _AudioLink,
_Video: {
_1080p: undefined,
_720p: await shrink(dTv_720p.url),
_480p: await shrink(dTv_480p.url),
_360p: await shrink(dTv_360p.url),
_240p: await shrink(dTv_240p.url),
_144p: await shrink(dTv_144p.url),
},
});
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width !== undefined
) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: _AudioLink,
_Video: {
_1080p: undefined,
_720p: undefined,
_480p: await shrink(dTv_480p.url),
_360p: await shrink(dTv_360p.url),
_240p: await shrink(dTv_240p.url),
_144p: await shrink(dTv_144p.url),
},
});
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width !== undefined
) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: _AudioLink,
_Video: {
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: await shrink(dTv_360p.url),
_240p: await shrink(dTv_240p.url),
_144p: await shrink(dTv_144p.url),
},
});
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width !== undefined
) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: _AudioLink,
_Video: {
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: undefined,
_240p: await shrink(dTv_240p.url),
_144p: await shrink(dTv_144p.url),
},
});
} else if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width === undefined &&
dTv_144p.width !== undefined
) {
return response.status(200).json({
success: true,
_search: _Found,
_audio: _AudioLink,
_Video: {
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: undefined,
_240p: undefined,
_144p: await shrink(dTv_144p.url),
},
});
} else {
return response.status(400).json({
success: false,
error: "ERROR: no downloadable video link found.",
});
}
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
