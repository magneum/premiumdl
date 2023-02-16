const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const Tb = require("ytdl-core");
const stream = require("stream");
const readline = require("readline");
const pathFFmpeg = require("ffmpeg-static");
const port = process.env.PORT || process.env.port;
const contentDisposition = require("content-disposition");
const speak = process.env.redurl || `http://localhost:${port}`;
const { youtubedl, youtubedlv2, youtubedlv3 } = require("@bochilteam/scraper");
// ===========================================================================================================
const reqOptions = {
  requestOptions: {
    headers: {
      cookie:
        "CONSENT=YES+DE.de+V14+BX; VISITOR_INFO1_LIVE=kYpNG7OoCbY; PREF=al=de&f4=4000000; SID=3geAZGdQt9hIJxt0ST2xySpK_6yaw0kvNarw6v9JTDpZQoKQ5FK1nYqc3dXGQzpM4GRWbA.; __Secure-3PSID=3geAZGdQt9hIJxt0ST2xySpK_6yaw0kvNarw6v9JTDpZQoKQ_zINvfbB7jPNTk2I3oTLYg.; HSID=ApvJR6aSSMIpzAioX; SSID=A4qjlas1kBmX90vX0; APISID=uKTdp7kEoR-Th5wk/Ajvd4cTFRNTvsnnPY; SAPISID=h6Tyds3npH_icpOT/Ae34WsO4j7jVpaLFp; __Secure-3PAPISID=h6Tyds3npH_icpOT/Ae34WsO4j7jVpaLFp; LOGIN_INFO=AFmmF2swRQIhAOZ3RDhhitXMYTD-meEWipRIFho5YaO05aGgteYU2w9SAiA-OKgaB64v_a2AWsOfiJk1JJW6miXXu64EibIGjReNdg:QUQ3MjNmeGs2UTRLWDVYNDNnUVNGRFQ0bThEeGl0ZVpJd2haQldweWpJbFNLTEMtNlJHRmJGTlE2SDc3Rkdyb282elprUllkQnRqc0RJYnNiUzhYNnJ3MENBYjNkcmo2dnFqTFNtMDJCTTJBdV9MMlNvYmdiS2xaOFZvUjFsTk5OX0xFZGQ2M2x1SFZKbEZFSFJ1Z3RXeUxfXzNGZmxsZTdkV3dFWFBOUElMN1B0T0pKemw2aU1F; YSC=hgmjViK_jxo; SIDCC=AJi4QfHbV2YQFgcCjOAOdQG0JWvpGtoxBGtAhNp3rJyU223hoL_CV6Aj3BrLOiQYlZEgVrCwg1I; __Secure-3PSIDCC=AJi4QfGrxA6SlqFGd46AK01jAKdxmwFHWC9u4uFW1t4dnB3lhPCZ-3Gr-Bv2E5LK55HMANtVMQ",
    },
  },
};
function printProgress(progress, download, total) {
  readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(
    "percentage: " + progress + " % " + " Total: " + download + "/" + total
  );
}
// localhost:43369/audio?q=https://youtu.be/RpHIdB7i0oM
// ===========================================================================================================
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(speak));
app.get("/", (request, response) => {
  return response.send("bit.ly/premiumdl");
});
// ===========================================================================================================
app.get("/metainfo", async (request, response) => {
  try {
    const result = await Tb.getInfo(request.query.q, reqOptions);
    return response.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error });
  }
});
// ===========================================================================================================
app.get("/audio", async (request, response) => {
  try {
    const result = await Tb.getBasicInfo(request.query.q, reqOptions);
    const {
      videoDetails: { title },
    } = result;
    response.setHeader(
      "Content-disposition",
      contentDisposition(`premiumdl-audio-${title}.mp3`)
    );
    const Tube = await youtubedl(request.query.q).catch(
      async () => await youtubedlv2(request.query.q)
    );
    const dl_url = await Tube.audio["128kbps"].download();
    console.log(dl_url);
    return response.send(dl_url);
  } catch (err) {
    console.log("error ", err);
    response.redirect(`http://${request.headers.host}?error=downloadError`);
  }
});
// ===========================================================================================================
app.get("/video", async (request, response) => {
  const result = await Tb.getBasicInfo(request.query.q, reqOptions);
  const {
    videoDetails: { title },
  } = result;
  const videoInfo = {
    title,
  };
  console.log(videoInfo);
  response.setHeader(
    "Content-disposition",
    contentDisposition(`premiumdl-video-${title}.mp4`)
  );
  const Tube = await youtubedl(request.query.q).catch(
    async () => await youtubedlv2(request.query.q)
  );
  const dl_url =
    (await Tube.video["1080p"].download()) ||
    (await Tube.video["720p"].download()) ||
    (await Tube.video["480p"].download()) ||
    (await Tube.video["360p"].download()) ||
    (await Tube.video["240p"].download()) ||
    (await Tube.video["144p"].download());
  return response.send(dl_url);
});

// if (!Tb.validateID(request.query.q) && !Tb.validateURL(request.query.q)) {
// return res
// .status(400)
// .json({ success: false, error: "No valid YouTube Id!" });
// }

// if (!Tb.validateID(request.query.q) && !Tb.validateURL(request.query.q)) {
// return response
// .status(400)
// .json({ success: false, error: "No valid Tb Id!" });
// }

// try {
// const result = await Tb.getBasicInfo(request.query.q, reqOptions);
// const {
// videoDetails: { title },
// } = result;
// response.setHeader(
// "Content-disposition",
// contentDisposition(`premiumdl-video-${title}.mp4`)
// );

// const name = Date.now() + ".mp4";
// require("child_process").exec(
// `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' '${request.query.q}' -o '${name}'`,
// async (error) => {
// if (error) {
// console.log("error ", error);
// response.redirect(
// `http://${request.headers.host}?error=downloadError`
// );
// }
// const r = fs.createReadStream(name);
// const ps = new stream.PassThrough();
// stream.pipeline(r, ps, (error) => {
// if (error) {
// console.log("error ", error);
// response.redirect(
//   `http://${request.headers.host}?error=downloadError`
// );
// }
// });
// ps.pipe(response);
// }
// );
// } catch (err) {
// console.log("error ", err);
// response.redirect(`http://${request.headers.host}?error=downloadError`);
// }
