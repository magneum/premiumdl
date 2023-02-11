import singer from "play-dl";

export default async function search(req, res) {
  try {
    let stream = await singer.stream(req.query.q);
    return res.send(stream.url);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
