var ffmpeg = require("fluent-ffmpeg");
var contentDisposition = require("content-disposition");
var ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    let _title = request.query.title as any;
    var _audio = request.query.qaudio as any;
    let _format = request.query.format as any;
    response.setHeader(
      "Content-disposition",
      contentDisposition(`premiumdl-audio-${_format}-${_title}.mp3`)
    );
    ffmpeg(_audio)
      .format("mp3")
      .setFfmpegPath(ffmpegPath)
      .output(response, { end: true })
      .on("error", (e: any) => console.error("ERROR: " + e.message))
      .on("progresponses", (p: any) => console.log("PROGRESS: " + p.percent))
      .on("end", () => console.log("INFO: stream sent to client successfully."))
      .run();
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
