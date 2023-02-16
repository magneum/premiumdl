var ffmpeg = require("fluent-ffmpeg");
var process = require("progress-estimator")();
var contentDisposition = require("content-disposition");
var ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    let _title = request.query.title as any;
    let _video = request.query.qvideo as any;
    var _audio = request.query.qaudio as any;
    let _format = request.query.format as any;
    response.setHeader(
      "Content-disposition",
      contentDisposition(`premiumdl-video-${_format}-${_title}.mp4`)
    );
    ffmpeg()
      .setFfmpegPath(ffmpegPath)
      .addInput(_video)
      .addInput(_audio)
      .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
      .videoCodec("libx264")
      .withAudioCodec("aac")
      .format("mp4")
      .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
      .output(response, { end: true })
      .on("error", (e: any) => console.error("ERROR: " + e.message))
      .on("end", () => console.log("INFO: stream sent to client successfully."))
      .on(
        "progresponses",
        async (p: any) => await process(p.progress, "Obtaining" + ": ")
      )
      .run();
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
