const measure = document.getElementById("measure");
let timeout;
function startLoop(measure) {
  const beats = Array.from(measure.getElementsByClassName("beat"));
  continueMeasure(beats);
}

function resetLoop(measure) {
  clearTimeout(timeout);
  const beats = Array.from(measure.getElementsByClassName("beat"));
  beats.map((b) => b.classList.remove("active"));
}

function continueMeasure(beats) {
  const bpm = parseInt(document.getElementById("bpm").value);
  const activeBeat = getActiveBeat(beats);
  const tok = new Audio("./lib/tok.mp3");
  tok.play();
  delete tok;
  timeout = setTimeout(() => {
    progressBeat(beats, activeBeat);
  }, 60000 / bpm);
}

function progressBeat(beats, activeBeat) {
  const progressToIndex = beats.indexOf(activeBeat) + 1;
  const nextBeat =
    progressToIndex >= beats.length ? beats[0] : beats[progressToIndex];
  activeBeat.classList.remove("active");
  nextBeat.classList.add("active");
  continueMeasure(beats);
}

function getActiveBeat(beats) {
  const activeBeat = beats.find((beat) => beat.classList.contains("active"));
  if (activeBeat) return activeBeat;

  const defaultBeat = beats[0];
  defaultBeat.classList.add("active");
  return defaultBeat;
}

document
  .getElementById("start-button")
  .addEventListener("click", () => startLoop(measure));

document
  .getElementById("stop-button")
  .addEventListener("click", () => resetLoop(measure));
