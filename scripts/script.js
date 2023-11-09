// JavaScript Document
console.log("Howdy!");

// scherm verandering

var button1992 = document.querySelector("article>ol li:nth-of-type(1)");
var button2000 = document.querySelector("article>ol li:nth-of-type(2)");
var button2003 = document.querySelector("article>ol li:nth-of-type(3)");
var button2006 = document.querySelector("article>ol li:nth-of-type(4)");
var button2016 = document.querySelector("article>ol li:nth-of-type(5)");
var button2018 = document.querySelector("article>ol li:nth-of-type(6)");
var button2019 = document.querySelector("article>ol li:nth-of-type(7)");
var button2020 = document.querySelector("article>ol li:nth-of-type(8)");

var informatieTekst = document.querySelector("article > section > p");
var kirbyAfbeelding = document.querySelector("article img:nth-of-type(2)");
var kirbyGif = document.querySelector("article img:nth-of-type(1)");
var informatieTitel = document.querySelector("article > section > h1");

button1992.onclick = info1992;
button2000.onclick = info2000;
button2003.onclick = info2003;
button2006.onclick = info2006;
button2016.onclick = info2016;
button2018.onclick = info2018;
button2019.onclick = info2019;
button2020.onclick = info2020;

function info1992() {
  informatieTekst.textContent = 
  "Kirby's Adventure is the first game of the franchise. In this game the sword ability isn't anything crazy, but it is a fun and fast ability. It can be obtained by sucking up enemy's with a sword or blade.";
  kirbyAfbeelding.src = "images/Kirby's_Adventure_Coverart.png";
  kirbyGif.src = "images/kirby-kirby-adventure.gif";
  informatieTitel.textContent = "Kirby's adventure";
}

function info2000() {
  informatieTekst.textContent = "In 2000 Kirby the crystal shards was released. In this game the sword ability isn't directly available, but you can combine different abilities with each other. By combining the cutter and the burn ability you can make a claymore that is on fire. The other sword that is in the game you can find by combining the spark and cutter ability this will create a lightsaber.";
  kirbyAfbeelding.src = "images/The_Crystal_Shards_JP_box_art.jpeg";
  kirbyGif.src = "images/Light_saber_64.webp";
  informatieTitel.textContent = "Kirby The Crytsal Shards";
}

function info2003() {
  informatieTekst.textContent = "Kirby Air ride is a racing game. While you're going through the tracks you can suck up enemies and gain power-ups. Of Course the sword ability makes an appearance, when you have the sword you can shoot projectiles and release nuclear combos on your enemies.";
  kirbyAfbeelding.src = "images/kirby_airride_cover.jpeg";
  kirbyGif.src = "images/Kirby_airride.jpeg";
  informatieTitel.textContent = "Kirby Air Ride";
}

function info2006() {
  informatieTekst.textContent = "Kirby Squeak Squad (aka the best one). Takes a bit after the previously mentioned Crystal Shards. The sword is in the game, but you can combine the sword with fire, ice or plasma. They give the sword set element. All the elements have their own perks: fire makes you able to burn stuff, ice makes you freeze stuff and plasma can be charged for a devastating attack.";
  kirbyAfbeelding.src = "images/Kirby_Squeak_Squad_Coverart.png"
  kirbyGif.src = "images/gba_sword_kirby.gif";
  informatieTitel.textContent = "Kirby Squeaky Squad";
}

function info2016() {
  informatieTekst.textContent = "Kirby robobot has the sword ability to make two appearances in the same game. The first is sword ability as we know it. The second is a mode for Kirby's mech, when the mech has the sword ability Kirby will be able to cut down bigger objects and enemies.";
  kirbyAfbeelding.src = "images/Kirby_robobot.jpeg"
  kirbyGif.src = "images/robobot_sword.png";
  informatieTitel.textContent = "Kirby Robobot";
}

function info2018() {
  informatieTekst.textContent = "The Ultra sword is Kirby's final smash in Super Smash Bros Ultimate. It is a reference to the Super abilities from Kirby's return to Dreamland. The final smash can hit up to 8 players and does a decent amount of damage and has decent/good knowback.";
  kirbyAfbeelding.src = "images/Smash_bros_ult_cover.jpeg";
  kirbyGif.src = "images/Smash_bros.webp";
  informatieTitel.textContent = "Smash Bros Ultimate";
}

function info2019() {
  informatieTekst.textContent = "Kirby Clash is different from most games. It works a bit like Monster Hunter, you hunt down enemies and beat them up with a team. The cool thing about sword in this game is that you can wear armor inspired by bosses from the past. Like Dark matter or Morpho, these armor's don't change your abilities, but they look really cool.";
  kirbyAfbeelding.src = "images/kirby_clash_cover.webp";
  kirbyGif.src = "images/Kirby_clash_sword.webp";
  informatieTitel.textContent = "Kirby Clash 2";
}

function info2020() {
  informatieTekst.textContent = "Kirby Fighter is basically a big boss rush. Sword is back to the basics. It's just the vanilla sword we saw back in the 1992 Kirby Adventure days. It does have more combos in use but it's nothing crazy or special.";
  kirbyAfbeelding.src = "images/Kirby_Fighters_2_cover.png";
  kirbyGif.src = "images/Kirby_fighters_2_Sword.png";
  informatieTitel.textContent = "Kirby Fighters 2";
}

// audio


var audio = new Audio("./audio/kirby_audio.mp3")

function deurGeluid() {
audio.play()
}
button1992.addEventListener("click", deurGeluid)
button2000.addEventListener("click", deurGeluid)
button2003.addEventListener("click", deurGeluid)
button2006.addEventListener("click", deurGeluid)
button2016.addEventListener("click", deurGeluid)
button2018.addEventListener("click", deurGeluid)
button2019.addEventListener("click", deurGeluid)
button2020.addEventListener("click", deurGeluid)

// // easter egg
var iWontLetYouGo = new Audio("./audio/marx_defeated.mp3")

var help = document.querySelector('#headset')

function eitje(){
setTimeout(function() {
  iWontLetYouGo.play()
}, 2000)
}
help.addEventListener("click", eitje)

// if else

var hiddenImg = document.querySelector("article > ol > li > img");

var clicks = 0;
button1992.addEventListener("click", function(){
  clicks++;

  if (clicks > 3){
    document.querySelector("article > ol > li > img").style.display = "block";
  }

  else {
    setTimeout(() => {
      document.querySelector("article > ol > li > img").style.display = "none";
    }, "4500");
  }
})


