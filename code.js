const fs = require("fs");
const ytdl = require("ytdl-core");
const toBlobURL = require("stream-to-blob-url");

(async () => {
  //   ytdl("QF08nvtHHCY").pipe(fs.createWriteStream("video.mp4"));
  const blobUrl = await toBlobURL(fs.createWriteStream("video.mp4"));
  console.log(blobUrl);
})();
