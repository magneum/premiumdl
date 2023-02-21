var fetch = require("isomorphic-unfetch");
var { getDetails } = require("spotify-url-info")(fetch);

export default async function search(request: any, response: any) {
  try {
    let url = request.query.url as string;
    getDetails(url, {
      headers: {
        "user-agent": "googlebot",
      },
    }).then((_data: any) => {
      response.send({
        _duration: _data.tracks[0].duration,
        _thumbnail: _data.preview.image,
        _artist: _data.preview.artist,
        _title: _data.preview.title,
        _link: _data.preview.link,
        _url: _data.preview.audio,
      });
    });
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}

// http://localhost:3000/api/spotmeta?url=https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b
