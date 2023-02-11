import yts from "yt-search";

export default async function search(req, res) {
  try {
    let _Found;
    var r = await yts(req.query.q);
    var vs = r.videos.slice(0, 1);
    vs.forEach((v) => (_Found = v));
    let data = {
      _url: _Found.url,
      _title: _Found.title,
      _views: _Found.views,
      _uploaded: _Found.ago,
      _videoId: _Found.videoId,
      _author: _Found.author.name,
      _duration: _Found.timestamp,
      _thumbnail: _Found.thumbnail,
      _description: _Found.description,
    };
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
