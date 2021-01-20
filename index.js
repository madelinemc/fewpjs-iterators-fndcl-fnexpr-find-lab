const testVar = {}

function testFunc() {
  return "hi"
}


//returns a year the KC Chiefs won the superbowl & 'returns undefined if the record has no win objects',

function superbowlWin(array) {
  let win = array.find(function(arrayObj) {return arrayObj.result === 'W' })
  return win ? win.year : win
}