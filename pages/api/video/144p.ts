var axios = require("axios");
var ffmpeg = require("fluent-ffmpeg");
var contentDisposition = require("content-disposition");
var ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    response.setHeader(
      "Content-disposition",
      contentDisposition(`premiumdl-video-${request.query.t}.mp4`)
    );
    ffmpeg()
      .setFfmpegPath(ffmpegPath)
      .addInput(request.query.v)
      .addInput(request.query.a)
      .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
      .videoCodec("libx264")
      .withAudioCodec("aac")
      .format("mp4")
      .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
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
