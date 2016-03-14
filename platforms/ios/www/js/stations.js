
var kan;
var saptarangi;
var ithari;
var kiss;
var image;
var classic;
var nepal;
var kalika;
var himal;
var butwal;


kan = new Audio('http://kantipur-stream.softnep.com:7248/;stream.nsv&type=mp3');
saptarangi = new Audio('http://shoutcast.itechnepal.net:8024/;stream.nsv&type=mp3&volume=100&autostart=true');
ithari = new Audio('http://192.190.84.25:9954/;stream.nsv&type=mp3');
kiss = new Audio('http://ice5.securenetsystems.net/WSKS?&playSessionID=4BE44064-91B6-F950-48B2FB89836249D5');
image = new Audio('http://202.166.217.123:89/broadwave.m3u?src=2&rate=1');
classic = new Audio('http://50.7.129.122:8316/;stream.mp3');
nepal = new Audio('http://108.166.174.131:8002/;stream.mp3');
kalika = new Audio('http://kalika-stream.softnep.com:7740/;stream/1');
himal = new Audio('http://62.210.84.35:8032/;stream.mp3');
butwal = new Audio('http://streaming.softnep.net:8003/;stream.mp3');


function setVolume(){
    kan.volume = 0.0;
        kan.volume = (slider.volume) / 100;
    }
function toggleSound() {
    pausemusic();
          if (kan.paused)
            kan.play();
          else
            kan.pause();
        }
function toggleSaptarangi() {
    pausemusic();
          if (saptarangi.paused)
            saptarangi.play();
          else
            saptarangi.pause();
        }

function toggleIthari() {
    pausemusic();
          if (ithari.paused)
            ithari.play();
          else
            ithari.pause();
        }
function toggleKiss() {
    pausemusic();
          if (kiss.paused)
            kiss.play();
          else
            kiss.pause();
        }
function toggleImage() {
    pausemusic();
          if (image.paused)
            image.play();
          else
            image.pause();
        }
function toggleClassic() {
    pausemusic();
          if (classic.paused)
            classic.play();
          else
            classic.pause();
        }
function toggleNepal() {
    pausemusic();
          if (nepal.paused)
            nepal.play();
          else
            nepal.pause();
        }
function toggleKalika() {
    pausemusic();
          if (kalika.paused)
            kalika.play();
          else
            kalika.pause();
        }
function toggleHimal() {
    pausemusic();
          if (himal.paused)
            himal.play();
          else
            himal.pause();
        }
function toggleButwal() {
    pausemusic();
          if (butwal.paused)
            butwal.play();
          else
            butwal.pause();
        }
 function pausemusic() {
            butwal.pause();
            himal.pause();
            kalika.pause();
            nepal.pause();
            classic.pause();
            image.pause();
            kiss.pause();
            ithari.pause();
            saptarangi.pause();
            kan.pause();
        }
  function send() {
    pausemusic();
          if (butwal.paused)
            butwal.play();
          else
            butwal.pause();
        }

