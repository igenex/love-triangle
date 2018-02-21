/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift(0);
  let lovers = preferences;
  let triangles = 0;

  function getTriangleCount(lovers) {
    "use strict";
    lovers.forEach((first_lover, i) => {
      if(first_lover === 0 || first_lover === null) return true;
      "use strict";
      loveTriangle(first_lover, i);
    });

    function loveTriangle(first_lover, i) {
      "use strict";

      let second_lover = lovers[first_lover],
        third_lover = lovers[second_lover];

      if(first_lover  !== i &&
        second_lover !== third_lover &&
        third_lover  === i) {
        lovers[i] = null;
        lovers[second_lover] = null;
        lovers[first_lover] = null;
        return ++triangles;
      }
      return false;
    }
    return triangles;
  }

  return getTriangleCount(lovers);
};
