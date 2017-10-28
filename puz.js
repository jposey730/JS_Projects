    
  var Row=4;
  var tileCount = (Row * Row);
  var pic = 'https://img.wikinut.com/img/2o849llqjbcdpoez/jpeg/0/Cucumber.jpeg'
  var moves=0;
function time(){
  var ti=document.getElementById("secs").value;
  var sc=ti+"000";
  var de=parseInt(sc);
  return de;
}
function func(){
  alert("Times UP!!!");
  document.getElementById("secs").innerHTML="";
}
function numsq(){
  var t=document.getElementById("sq").value;
  var h=parseInt(t);
  document.getElementById("sq").innerHTML="";
  Row=h;
  start();
}
function img(index) {
  return tile(index)
    .css(style(index))
    .on('click', tileClick)
}

function style(index) {
  return {  
    backgroundSize: (100 * (Row + 1)) + "%",
    backgroundPosition: spot(index),
    backgroundImage: "url("+pic+")"
  }
}

function blankTile(element) {
  return tile(element).prop('id', 'blank')
}
function tileClick(event) {

  moves++;
  document.getElementById("mov").innerHTML="";
  document.getElementById("mov").innerHTML=moves;
  var tile = $(event.target)
  var bt = $("body #tiles #blank")
  var diff = Math.abs(tile.index() - bt.index())
  if (diff === 1 || diff === (Row + 1)) {
    var add = 'prev'
    var shift = 'after'
    if (bt.index() === 0 || tile.index() === 0) {
      add = 'next';
      shift = 'before';
    }
    var next = tile[add]()
    bt[add]()[shift](tile)
    next[shift](bt)
    
  }
  if (win()) {
    alert("YOU WON!")
  }
}

var block = {
  width: 50,
  height: 50,
  display: 'inline-block',
  margin: 1,

  }

function spot(index) {
  var row = Math.floor(index / Row);
  var column = index % Row;
  var xPosition = ((100/Row)*column) + "%";
  var yPosition = ((100/Row)*row) + "%";
  return xPosition + " " + yPosition;
}



function tile(index) {
  return $("<div>" + index + "</div>").data('id', index).css(block)
}



function rand(element) {
  return Math.floor(Math.random()*element)
}

function makeTiles(element) {
  var path = []
  var board = $('body #tiles')
  for (var i = 0; i < tileCount; i++) {
    path.push(i);
  }
  for (var i = 0; i < tileCount; i++) {
    if (i > 0 && i % Row === 0) {
      board.append("<br>");
    }
    var index = path.splice(rand(path.length), 1)[0];
    board.append(element === index ? blankTile(index) : img(index))  
  }
}

function win() {
  return $.makeArray($("body #tiles div")).reduce(function(yet, thisDiv, i, arr) {
    if (i === 0) { return yet }
    var currentDataId = $(thisDiv).data('id')
    var id = $(arr[i - 1]).data('id')
    return yet && ((currentDataId - id) === 1)
  }, true)
}

function shuffle() {
  $("body #tiles > *").remove();
  makeTiles(rand(tileCount));
}
 function start() {
 
  $('body').append($("<div>").prop("id", "tiles"))
  shuffle();
}

start();