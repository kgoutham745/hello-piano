const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

document.getElementById("marquee").stop();

function play() {
  document.getElementById("marquee").start();
}

function pause() {
  document.getElementById("marquee").stop();
}

function reset() {
  document.getElementById("marquee").start();
  document.getElementById("marquee").start();
}

function increase() {
  document.getElementById("marquee").setAttribute('scrollamount', 12, 0);
  document.getElementById("marquee").start();
}

function same() {
  document.getElementById("marquee").setAttribute('scrollamount', 6, 0);
  document.getElementById("marquee").start();
}

function decrease() {
  document.getElementById("marquee").setAttribute('scrollamount', 3, 0);
  document.getElementById("marquee").start();
}

let headingsL1 = ["Welcome to <b>Hello Piano</b> lessons","Welcome to <b>Hello Piano</b> lessons","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Basic Notes","Lesson 1: Completed","L2","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Sharp and Flat notes","Lesson 2: Completed","Test: Complete the task"];
let line1sL1 = ["Before getting further, we will make you get familiar with the interface","The left buttons are used to play and pause","There are 7 basic notes in music","To play C press corresponding key Z","Now play the notes along with the instructions","Play D notes by pressing X key or using mouse","Play E notes by pressing C key or using mouse","Play F notes by pressing V key or using mouse","Play G notes by pressing B key or using mouse","Play A notes by pressing N key or using mouse","Play B notes by pressing M key or using mouse","Great you are now familiar with the basic notes","","There are total 12 notes including sharp notes","The black keys are called as sharp or flat notes","Now Play along with the instructions","Play D# by presssing D or using mouse","Play F# by presssing G or using mouse","Play G# by presssing H or using mouse","Play A# by presssing J or using mouse","Great! you can now play all the notes of pinao","Follow the Sheet music which will be displayed next"]
let line2sL1 = ["Below we have 6 buttons, 3 on the right and rest on the left","The right buttons are used to control the speed","They are CDEFGAB","To play D press x, for E press C and so on","Play C notes by pressing Z key or using mouse","_","_","_","_","_","_","Now its time to move to the Lesson 2","","They are C C# D D# E F F# G G# A A# B","B and E don't have sharps", "Play C# by presssing S or using mouse","_","_","_","_","_","and play the corresponding notes, Good luck!"];

let i = 0;
function nextIns(){
  if(i==headingsL1.length-1){
    document.getElementById("ins").style.display = "none";
    document.getElementById("marquee").style.opacity = "1";
    document.getElementById("marquee").start();
    return;
  }
  if(i<headingsL1.length-1){
    i = i + 1;
    if(headingsL1[i]=="L2"){
      document.getElementById("bg").style.backgroundColor = "#143F6B";
      document.getElementById("ins").style.backgroundColor = "#db43b0";
      i = i + 1;
    }
    document.getElementById("heading").innerHTML = headingsL1[i];
    document.getElementById("line1").innerHTML = line1sL1[i];
    document.getElementById("line2").innerHTML = line2sL1[i];
  }
}

function prevIns(){
  if(i>0){
    i = i - 1;
    if(headingsL1[i]=="L2"){
      document.getElementById("bg").style.backgroundColor = "#100034";
      document.getElementById("ins").style.backgroundColor = "#6620b2";
      i = i - 1;
    }
    document.getElementById("heading").innerHTML = headingsL1[i];
    document.getElementById("line1").innerHTML = line1sL1[i];
    document.getElementById("line2").innerHTML = line2sL1[i];
  }
}

function hide(e) {
  e.style.display = "none";
}

function show() {
  document.getElementById("overlay").style.display = "block";
}