var bUnlockFUN = document.getElementById('bUnlock');
bUnlockFUN.addEventListener('click', GreatDecode);
 function GreatDecode(){

  document.getElementById("madeKey").innerHTML = "";
document.getElementById("bUnlock").value = "Unlocked"


var nnSteemKey = document.getElementById("nnSteem");
var aCh = ["q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m",".",",","Q","W","E","R","T","Z","U","I","O","P","A","S","D","F","G","H","J","K","L","Y","X","C","V","B","N","M","+","-","*","/","!","0","1","2","3","4","5","6","7","8","9"];
//if(cSteemKey.value!=""&&nSteemKey.value!=""){
/*var res = cSteemKey.value.split("");
var res2 = nSteemKey.value.split("");
var nextTask = res.every(checkingFunction) && res2.every(checkingFunction);
}else{nextTask=false;MEMO="NoCharctersAtAll"}*/

var getData=localStorage.getItem("KEY");;



var decKey=[];
var sDec="",upping=0;
for(p=0;p<getData.length;p++){

if(getData.charAt(p)=="y"){
decKey[upping]=sDec;
upping+=1;
sDec="";
}else{

switch(getData.charAt(p)){
case "x":sDec += "e";break;
case "c":sDec += "+";break;
case "v":sDec += ".";break;
default:sDec += aCh.indexOf(getData.charAt(p));
}

}
}






for(s=0;s<upping;s++){
for(r=0;r<nnSteemKey.value.length;r++){
decKey[s] /= (aCh.indexOf(nnSteemKey.value.charAt(r))+1)
}
decKey[s] = decKey[s] - upping;
}



////////////////////////

var returnPass = decKey.every(chNum);

if(returnPass==true){
for(all=0;all<decKey.length;all++){
  document.getElementById("madeKey").innerHTML += aCh[decKey[all]];
}

//EFFECT EFFECT EFFECT
var upp=0;
var refreshIntervalId = setInterval(function(){
tit.style.background = "linear-gradient(to top, rgba(0, 78, 255, "+upp+") , rgba(255, 255, 0, 0))";

if(upp<0.1){
upp+=0.003;

}else{clearInterval(refreshIntervalId);}
 }, 10);
}else{
//madeKey.innerHTML = "Incorrect SteemKey Password"
var upp2=0;
var refreshIntervalId2 = setInterval(function(){
tit.style.background = "linear-gradient(to top, rgba(255, 26, 26, "+upp2+") , rgba(255, 255, 0, 0))";

if(upp2<0.1){
upp2+=0.003;

}else{clearInterval(refreshIntervalId2);}
 }, 10);

}

}


function chNum(numbers){
return (numbers <= 68 && numbers >= 0);

}


var lockFUNa = document.getElementById('lockID');
var unlockFUNa = document.getElementById('unlockID');

var DIVLOCK = document.getElementById('Lock');
var DIVUNLOCK = document.getElementById('UnLock');

lockFUNa.addEventListener('click', FCK);
unlockFUNa.addEventListener('click', UNFCK);

function FCK(){
 
  DIVLOCK.style.width = "100vw";
  DIVUNLOCK.style.width = "0vw";

  DIVUNLOCK.style.opacity = "0";
  DIVLOCK.style.opacity = "1";
  }

  
  
  
    function UNFCK(){
      DIVUNLOCK.style.width = "100vh";
      DIVLOCK.style.width = "0vh";

      DIVUNLOCK.style.opacity = "1";
      DIVLOCK.style.opacity = "0";
      
    }










var copyTextareaBtn = document.getElementById('Copy');
document.getElementById('MemoID').value = localStorage.getItem("MEMO");

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.getElementById('MemoID');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
	
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("MEMO", copyTextarea.value );
    copyTextarea.className += " Anim";
    Copy.innerHTML = "Copied&Saved";
 
} else {
   alert("Sorry, your browser does not support Web Storage...");
}


	document.getSelection().removeAllRanges();
	setTimeout(function(){ MemoID.className = "txt";Copy.innerHTML = "Copy&Save"; }, 2010);
  } catch (err) {
    document.getElementById('MemoID').style.backgroundColor = "red";
  }
});



/*function encrypt()
{
var pass=document.getElementById('password').value;
var hide=document.getElementById('hide').value;
if(pass=="")
{
document.getElementById('err').innerHTML='Error:Password is missing';
return false;
}
else 
{
document.getElementById("hide").value = document.getElementById("password").value;
var hash = CryptoJS.MD5(pass);
document.getElementById('password').value=hash;
return true;
}
}	*/




var MEMO="";

var lockFUNs = document.getElementById('bSave');
var UNlockFUNs = document.getElementById('bUnlock');
UNlockFUNs.addEventListener('focusout', OMG);

lockFUNs.addEventListener('focusout', OMG);
function OMG(){

document.getElementById("bUnlock").value = "Unlock"
document.getElementById("bSave").value = "Save"
document.getElementById("madeKey").style.backgroundColor  = "white";
}




function checkingFunction(letters){
var aCh = ["q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m",".",",","Q","W","E","R","T","Z","U","I","O","P","A","S","D","F","G","H","J","K","L","Y","X","C","V","B","N","M","+","-","*","/","!","0","1","2","3","4","5","6","7","8","9"];
if(aCh.indexOf(letters)!=-1){
return true;
}else{MEMO=letters;return false;}

}


var bSaveOnSaveFUN = document.getElementById('bSave');
bSaveOnSaveFUN.addEventListener('click', GreatEncode);

function GreatEncode(){

document.getElementById("bSave").value = "Saved"

var cSteemKey = document.getElementById("cSteem");
var nSteemKey = document.getElementById("nSteem");
var aCh = ["q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m",".",",","Q","W","E","R","T","Z","U","I","O","P","A","S","D","F","G","H","J","K","L","Y","X","C","V","B","N","M","+","-","*","/","!","0","1","2","3","4","5","6","7","8","9"];
if(cSteemKey.value!=""&&nSteemKey.value!=""){
var res = cSteemKey.value.split("");
var res2 = nSteemKey.value.split("");
var nextTask = res.every(checkingFunction) && res2.every(checkingFunction);
}else{nextTask=false;MEMO="NoCharctersAtAll"}


var encKey=[];

if(nextTask){

for(s=0;s<cSteemKey.value.length;s++){
encKey[s] = aCh.indexOf(cSteemKey.value.charAt(s))+cSteemKey.value.length;
for(r=0;r<nSteemKey.value.length;r++){
encKey[s] *= (aCh.indexOf(nSteemKey.value.charAt(r))+1)
}
}
////////////////////////
var sEn="";
for(p=0;p<encKey.length;p++){
var fString = ""+encKey[p];

for(p1=0;p1<fString.length;p1++){
switch(fString.charAt(p1)){
case "e":sEn += "x";break;
case "+":sEn += "c";break;
case ".":sEn += "v";break;
default:sEn += aCh[fString.charAt(p1)];
}


}sEn+="y";
}
document.getElementById("madeKey").innerHTML = sEn;


if (typeof(Storage) !== "undefined") {
  setTimeout(function(){ document.getElementById("madeKey").innerHTML="Saved" }, 1000);
    localStorage.setItem("KEY",sEn );
 
   
} else {
  alert("Sorry, your browser does not support Web Storage. Update Software.");
}

//EFFECT
var upp=0;
var refreshIntervalId = setInterval(function(){
tit.style.background = "linear-gradient(to top, rgba(0, 78, 255, "+upp+") , rgba(255, 255, 0, 0))";

if(upp<0.1){
upp+=0.003;

}else{clearInterval(refreshIntervalId);}
 }, 10);

}else{
  document.getElementById("madeKey").innerHTML = "Illegal Charcter ("+MEMO+")";
//madeKey.style.backgroundColor  = "#ffcbc6";

var upp2=0;
var refreshIntervalId2 = setInterval(function(){
tit.style.background = "linear-gradient(to top, rgba(255, 26, 26, "+upp2+") , rgba(255, 255, 0, 0))";

if(upp2<0.1){
upp2+=0.003;

}else{clearInterval(refreshIntervalId2);}
 }, 10);


}



}