import type { NextApiRequest, NextApiResponse } from "next";
import {
  ymate_v1,
  ymate_v2,
  ymate_v3,
  yfive_v1,
  yfive_v2,
} from "../../../src/video/index.js";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const _data: any = await ymate_v1(req.query.q)
      .catch(async (_) => await ymate_v2(req.query.q))
      .catch(async (_) => await ymate_v3(req.query.q));
    res.send(await _data.video["480p"].download());
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
