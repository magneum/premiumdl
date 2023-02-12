const { GetAudio, GetVideo } = require("y2mate-api");
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = req.query.q as string;
    const _data = await GetAudio(query);
    const data_ = await GetVideo(query);
    return res.send({
      _audio: _data.urlDown,
      _video: data_.urlDown,
    });
    // await yt.video["1080p"].download(),
    // const yt = await youtubedl(query).catch(async () => await youtubedlv2(query) );
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
