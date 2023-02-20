var cors = require("cors");
var axios = require("axios");
var Tube = require("tube-exec");
var Spinnies = require("spinnies");
var { shorten } = require("tinyurl");
var progress = require("progress-estimator")();
var port = process.env.PORT || process.env.port;
// ===========================================================================================================
var express = require("express");
var app = express();
var spin = new Spinnies();
spin.add("premiumdl", { text: "Blackmagik Server Started" });
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log("bit.ly/premiumdl" + port));
app.get("/", (request, response) => {
return response.send("bit.ly/premiumdl");
});
// ===========================================================================================================
app.get("/music", async (request, response) => {
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
var obj = await progress(bb, "/music Time" + ": ");
var a_ultralow = obj.formats.filter(
(v) => v.format_id === "599" || v.format_id === "600"
);
var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
var a_low = obj.formats.filter(
(v) =>
v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
);
var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
var a_medium = obj.formats.filter(
(v) => v.format_id === "140" || v.format_id === "251"
);
var db_medium = a_medium[0] || a_medium[1] || a_medium;
if (db_medium.width !== undefined) {
return response.send(await shorten(db_medium.url));
} else if (db_medium.width === undefined && db_low.width !== undefined) {
return response.send(await shorten(db_ultralow.url));
} else if (
db_medium.width === undefined &&
db_low.width === undefined &&
db_ultralow.width !== undefined
) {
return response.send(await shorten(db_ultralow.url));
}
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
// ===========================================================================================================
app.get("/audio", async (request, response) => {
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
var obj = await progress(bb, "/audio Time" + ": ");
var a_ultralow = obj.formats.filter(
(v) => v.format_id === "599" || v.format_id === "600"
);
var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
var a_low = obj.formats.filter(
(v) =>
v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
);
var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
var a_medium = obj.formats.filter(
(v) => v.format_id === "140" || v.format_id === "251"
);
var db_medium = a_medium[0] || a_medium[1] || a_medium;

if (db_medium.width !== undefined) {
return response.send(await shorten(db_medium.url));
} else if (db_medium.width === undefined && db_low.width !== undefined) {
return response.send(await shorten(db_low.url));
} else if (
db_medium.width === undefined &&
db_low.width === undefined &&
db_ultralow.width !== undefined
) {
return response.send(await shorten(db_ultralow.url));
}
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
// ===========================================================================================================
app.get("/video", async (request, response) => {
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
var obj = await progress(bb, "/video Time" + ": ");
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
return response.send({
_1080p: await shorten(dTv_1080p.url),
_720p: await shorten(dTv_720p.url),
_480p: await shorten(dTv_480p.url),
_360p: await shorten(dTv_360p.url),
_240p: await shorten(dTv_240p.url),
_144p: await shorten(dTv_144p.url),
});
}
if (dTv_1080p.width === undefined && dTv_720p.width !== undefined) {
return response.send({
_1080p: undefined,
_720p: await shorten(dTv_720p.url),
_480p: await shorten(dTv_480p.url),
_360p: await shorten(dTv_360p.url),
_240p: await shorten(dTv_240p.url),
_144p: await shorten(dTv_144p.url),
});
}
if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width !== undefined
) {
return response.send({
_1080p: undefined,
_720p: undefined,
_480p: await shorten(dTv_480p.url),
_360p: await shorten(dTv_360p.url),
_240p: await shorten(dTv_240p.url),
_144p: await shorten(dTv_144p.url),
});
}
if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width !== undefined
) {
return response.send({
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: await shorten(dTv_360p.url),
_240p: await shorten(dTv_240p.url),
_144p: await shorten(dTv_144p.url),
});
}
if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width !== undefined
) {
return response.send({
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: undefined,
_240p: await shorten(dTv_240p.url),
_144p: await shorten(dTv_144p.url),
});
}
if (
dTv_1080p.width === undefined &&
dTv_720p.width === undefined &&
dTv_480p.width === undefined &&
dTv_360p.width === undefined &&
dTv_240p.width === undefined &&
dTv_144p.width !== undefined
) {
return response.send({
_1080p: undefined,
_720p: undefined,
_480p: undefined,
_360p: undefined,
_240p: undefined,
_144p: await shorten(dTv_144p.url),
});
}
} catch (error) {
console.log(error);
return response.status(400).json({ success: false, error });
}
});
// ===========================================================================================================
