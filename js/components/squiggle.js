// TODO: CAN ANY OF THIS BE OFFLOADED TO CSS FOR SEPARATION OF CONCERNS? NEEDING TO FIND THE PATH'S TOTAL LENGTH PROMPTED SCRIPTING THIS FEATURE. COULD JUST BE CSS KEYFRAME SINCE DASHARRAY AND DASHOFFSET ARE CSS VALUES TOO?

// This script leverages an SVG path's 'dasharray' and 'dashoffset' properties to make it look drawn onto the screen.
const svg = document.querySelector('svg.squiggle');
const path = svg.querySelector('path');
const pathLength = path.getTotalLength();

// Set initial dasharray and dashoffset
path.style.strokeDasharray = `${pathLength}`;   // each dash and gap now as long as the full path length
path.style.strokeDashoffset = `${pathLength}`;  // offset same length as full path pushes dash out of view

// Start 'drawn' effect after delay
window.setTimeout(() => {
  path.style.transition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
}, 500);