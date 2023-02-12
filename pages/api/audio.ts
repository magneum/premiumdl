import fs from "fs";
import got from "got";
import url from "url";
import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg";
const y2 = require("y2mate-api");
import type { NextApiRequest, NextApiResponse } from "next";

const getRandom = () => {
  const rand = Math.floor(Math.random() * 10000);
  return rand;
};

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let query = req.query.q as string;
    const y2 = require("y2mate-api");
    const data = await y2.GetAudio(query);

    return res.send({
      _video: data,
      _audio: data,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}

// const got = getRandom();
// const aStream = ytdl(query, {
// quality: "highestaudio",
// });
// ffmpeg(aStream)
// .audioBitrate(320)
// .toFormat("ipod")
// .saveToFile(got + ".mp3")
// .on("end", () => {});
// await new Promise((resolve, reject) => {
// aStream.on("error", reject);
// aStream.on("finish", resolve);
// });
