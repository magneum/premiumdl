const getColors = require("get-image-colors");

getColors("https://source.unsplash.com/random/640x480/").then((colors) => {
  console.log(colors[0]._rgb._unclipped.join(","));
});
