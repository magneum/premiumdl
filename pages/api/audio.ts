import fs from "fs";
import got from "got";
import url from "url";
import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg";
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
    const got = getRandom();
    const aStream = ytdl(query, {
      quality: "highestaudio",
    });
    ffmpeg(aStream)
      .audioBitrate(320)
      .toFormat("ipod")
      .saveToFile(got + ".mp3")
      .on("end", () => {});
    await new Promise((resolve, reject) => {
      aStream.on("error", reject);
      aStream.on("finish", resolve);
    });
    return res.send({
      _video: got + ".mp4",
      _audio: got + ".mp3",
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}

// const aStream = ytdl(query, {
// quality: "highestaudio",
// });
// ffmpeg(aStream)
// .audioBitrate(320)
// .toFormat("ipod")
// .saveToFile(got + ".mp3")
// .on("end", () => {
// return res.send(got + ".mp3");
// });
