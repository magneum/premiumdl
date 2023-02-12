(async () => {
  const fs = require("fs");
  const ytdl = require("ytdl-core");
  let info = "https://www.youtube.com/watch?v=QF08nvtHHCY";
  ytdl(info, {
    quality: "highestvideo",
  }).pipe(fs.createWriteStream("video.mp4"));
  ytdl(info, { format: "mp3", filter: "audioonly" }).pipe(
    fs.createWriteStream("music.mp3")
  );
})();

// highest;
// lowest;
// highestaudio;
// lowestaudio;
// highestvideo;
// lowestvideo;
