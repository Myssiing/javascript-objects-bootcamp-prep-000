/*var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal" };
var meals = new Object({ breakfast: "oatmeal" })
*/

var playlist = new Object();

function destructivelyUpdateObjectWithKeyAndValue(playlist, artistName, 'songTitle') {
  playlist[artistName] = 'songTitle'
  return playlist
}

