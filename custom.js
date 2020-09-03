
var state1=false;
var info1=document.getElementById('info1');
function btntogle1(){
if(!state1){
info1.style.display='block';
info2.style.display='none';
info3.style.display='none';
info4.style.display='none';
state1=true;
state2=false;
state3=false;
state4=false;
}
else{ info1.style.display='none';
state1=false;}
}
document.getElementById('infobtn1').onclick=btntogle1;


var state2=false;
var info2=document.getElementById('info2');
function btntogle2(){
if(!state2){
info2.style.display='block';
info1.style.display='none';
info3.style.display='none';
info4.style.display='none';
state2=true;
state1=false;
state3=false;
state4=false;
}
else{info2.style.display='none';
state2=false;}
}
document.getElementById('infobtn2').onclick=btntogle2;


var state3=false;
var info3=document.getElementById('info3');
function btntogle3(){
if(!state3){
info3.style.display='block';
info1.style.display='none';
info2.style.display='none';
info4.style.display='none';
state3=true;
state2=false;
state1=false;
state4=false;
}
else{info3.style.display='none';
state3=false;}
}
document.getElementById('infobtn3').onclick=btntogle3;


var state4=false;
var info4=document.getElementById('info4');
function btntogle4(){
if(!state4){
info4.style.display='block';
info1.style.display='none';
info2.style.display='none';
info3.style.display='none';
state4=true;
state2=false;
state3=false;
state1=false;
}
else{info4.style.display='none';
state4=false;}
}
document.getElementById('infobtn4').onclick=btntogle4;