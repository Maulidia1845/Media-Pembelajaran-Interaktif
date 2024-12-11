function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64fyJsHPyqA":
        Script1();
        break;
      case "5be24cWReZJ":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku'); 
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.4;
}

