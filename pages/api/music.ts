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
    return res.send({
      _audio: await yt.audio["128kbps"].download(),
      _video: await yt.video["1080p"].download(),
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
