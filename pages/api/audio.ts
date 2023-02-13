import fs from "fs";
import got from "got";
import url from "url";
import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg";
import { youtubedl, youtubedlv2, youtubedlv3 } from "@bochilteam/scraper";
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
    const yt = await youtubedl(query).catch(
      async () => await youtubedlv2(query)
    );
    const dl_url = await yt.audio["128kbps"].download();
    const l_url = await yt.video["1080p"].download();
    return res.send({
      _video: l_url,
      _audio: dl_url,
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
