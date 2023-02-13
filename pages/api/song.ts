import type { NextApiRequest, NextApiResponse } from "next";
import { ymate_1, ymate_2, yfive_1, yfive_2 } from "../../src/audio/index.js";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let query = req.query.q as string;
    const _data: any = await ymate_1(query)
      .catch(async (_) => await ymate_2(query))
      .catch(async (_) => await yfive_1(query))
      .catch(async (_) => await yfive_2(query));
    return res.send(await _data.audio["128kbps"].download());
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
