/*var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal" };
var meals = new Object({ breakfast: "oatmeal" })
*/

var playlist = new Object();

function updatePlaylist(playlist, artistName, 'songTitle') {
  playlist[artistName] = 'songTitle'
  return playlist
}

//destructivelyUpdateObjectWithKeyAndValue(obj, key, value)
