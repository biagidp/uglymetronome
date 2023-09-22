import "./style.css";
import tokSound from "../lib/tok.mp3";

const measure = document.getElementById("measure");
let timeout;
function startLoop(measure) {
  const markOn = Array.from(document.getElementsByName("mark")).find(
    (e) => e.checked,
  ).value;
  const intervals = getIntervals(measure, markOn);
  continueMeasure(intervals);
}

function resetLoop(measure) {
  clearTimeout(timeout);
  const markOn = Array.from(document.getElementsByName("mark")).find(
    (e) => e.checked,
  ).value;
  const intervals = getIntervals(measure, markOn);
  intervals.map((b) => b.classList.remove("active"));
}

function continueMeasure(intervals) {
  const toksPerMinute = getToksPerMinute();
  const activeInterval = getActiveInterval(intervals);
  const tok = new Audio(tokSound);
  tok.play();
  // delete tok;
  timeout = setTimeout(() => {
    progressInterval(intervals, activeInterval);
  }, 60000 / toksPerMinute);
}

function progressInterval(intervals, activeInterval) {
  const progressToIndex = intervals.indexOf(activeInterval) + 1;
  const nextInterval =
    progressToIndex >= intervals.length
      ? intervals[0]
      : intervals[progressToIndex];
  activeInterval.classList.remove("active");
  nextInterval.classList.add("active");
  continueMeasure(intervals);
}

function getActiveInterval(intervals) {
  const activeInterval = intervals.find((interval) =>
    interval.classList.contains("active"),
  );
  if (activeInterval) return activeInterval;

  const defaultInterval = intervals[0];
  defaultInterval.classList.add("active");
  return defaultInterval;
}

function getIntervals(measure, markOn) {
  switch (markOn) {
    case "1":
      return Array.from(measure.getElementsByClassName("beat"));
    case "1/8":
      return Array.from(measure.getElementsByClassName("8th"));
    case "1/16":
      const beats = Array.from(measure.getElementsByClassName("beat"));
      const orderedSixteenths = [];
      beats.map((beat) => {
        const sixteenths = Array.from(beat.getElementsByClassName("16th"));
        const sorted = sixteenths.sort((a, b) => {
          if (a.dataset["sixteenths"] === b.dataset["sixteenths"]) return 0;
          if (a.dataset["sixteenths"] < b.dataset["sixteenths"]) return -1;
          if (a.dataset["sixteenths"] > b.dataset["sixteenths"]) return 1;
        });
        orderedSixteenths.push(sorted);
      });
      return orderedSixteenths.flat();
  }
}

function getToksPerMinute() {
  const markOn = Array.from(document.getElementsByName("mark")).find(
    (e) => e.checked,
  ).value;
  const bpm = parseInt(document.getElementById("bpm").value);
  switch (markOn) {
    case "1":
      return bpm;
    case "1/8":
      return bpm * 2;
    case "1/16":
      return bpm * 4;
  }
}

document
  .getElementById("start-button")
  .addEventListener("click", () => startLoop(measure));

document
  .getElementById("stop-button")
  .addEventListener("click", () => resetLoop(measure));
