import axios from "axios";

export default async function search(request: any, response: any) {
  try {
    if (request.query.type === "getAudio") {
      return response.send(
        `http://localhost:8001/audio?audio=${request.query.audio}&title=${request.query.title}`
      );
    }

    if (request.query.type === "getVideo") {
      return response.send(
        `http://localhost:8001/video?video=${request.query.video}&audio=${request.query.audio}&title=${request.query.title}`
      );
    }

    if (request.query.type === "metadata") {
      var crons = await axios.get(
        `http://localhost:8001/metadata?q=${request.query.url}`
      );
      return response.send(crons.data);
    }

    if (request.query.type === "getSearch") {
      return response.send(`/api/search?q=${request.query.url}`);
    }
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: error.mesage,
    });
  }
}
