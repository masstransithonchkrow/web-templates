// Based on a tip from https://css-tricks.com/snippets/javascript/different-stylesheet-pending-the-time-of-day/
function getStylesheet() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 8) {
       document.write("<link rel='stylesheet' href='365stops-nite.css'>");
      }
      if (8 <= currentTime&&currentTime < 18) {
       document.write("<link rel='stylesheet' href='365stops.css'>");
      }
      if (18 <= currentTime&&currentTime < 24) {
       document.write("<link rel='stylesheet' href='365stops-nite.css'>");
      }
}
getStylesheet();