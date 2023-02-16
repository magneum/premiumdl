import yts from "yt-search";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let _Found: any;
    let query = req.query.q as string;
    var r = await yts(query);
    var vs = r.videos.slice(0, 1);
    vs.forEach((v: any) => (_Found = v));
    return res.send({
      _Url: _Found.url,
      _vID: _Found.videoId,
      _Title: _Found.title,
      _Views: _Found.views,
      _Uploaded: _Found.ago,
      _Author: _Found.author.name,
      _Thumbnail: _Found.thumbnail,
      _Duration: _Found.timestamp,
      _Channel: _Found.author.url,
      _Description: _Found.description,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
