function countingValleys(steps, path) {
  // create counter var to track altitude changes
  //  set to sea level (0)
  // create counter var to track num of valleys
  // "U" = +1 unit change
  // "D" = -1 unit change
  // anytime drop below sea level (<0) and return to sea level (=0) is a valley
  // iterate through array 'path' and calculate altitude
  // push altitude into hike array that has sea level (0) at start and end
  // when hike array consists of sea level and below pair [0, -1] => tally valley

  let altitude = 0;
  let valleys = 0;
  let hike = [0];
  for (let hiker = 0; hiker < steps; hiker++) {
    if (path[hiker] === "U") {
      altitude++;
      hike.push(altitude);
    } else if (path[hiker] === "D") {
      altitude--;
      hike.push(altitude);
    }
  }
  for (let i = 0; i < hike.length; i++) {
    if (hike[i] === 0 && hike[i + 1] === -1) valleys++;
  }

  return valleys;
}

module.exports = countingValleys;
