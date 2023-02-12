import singer from "play-dl";
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = req.query.q as string;
    const yt = await youtubedl(query).catch(
      async () => await youtubedlv2(query)
    );
    const dl_url = await yt.audio["128kbps"].download();
    const vdl_url = await yt.video["1080p"].download();
    const vldl_url = await yt.video["144p"].download();
    return res.send({
      _audio: dl_url,
      _video: vdl_url,
      _videoLowest: vldl_url,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
