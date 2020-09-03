'use strict'

var Engine = {

savedTariff : localStorage.tariff,
getTariff : null,
setTariff : function(rate){
this.getTariff = Number(rate);
localStorage.tariff = '' + rate;},

getNowRead : null,
setNowRead : function(n){
this.getNowRead = Number(n); 
localStorage.init = '' + n;},

savedInitRead : localStorage.init,
getInitRead : null,
setInitRead : function(i){this.getInitRead = Number(i); },

savedTaxPrcnt : localStorage.taxPrcnt,
getTaxPrcnt : null,
setTaxPrcnt : function(t){
this.getTaxPrcnt = Number(t);
localStorage.taxPrcnt = '' + t;},

consumed : null,
energyCharge : null,
tax : null,
billAmount : null,
notice : null,
sumTotal : null,

setConsumed : function(){
this.consumed = '' + this.getNowRead - this.getInitRead;},

setEnergyCharge : function(){
this.energyCharge = '' + Number(this.consumed) * this.getTariff;},

setTax : function(){
this.tax = '' + Math.round((this.getTaxPrcnt * Number(this.energyCharge))/100);},

setBillAmount : function(){
this.billAmount = '' + (Number(this.energyCharge) + Number(this.tax));},

setSumTotal : function(){
this.sumTotal += Number(this.billAmount);},
};

var Chart = {
unitArr : [],
arrLength : null,
barClass : 'bars',

getOutBarLength : null,
screenX : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
setOutBarLenght : function(){
this.getOutBarLength = (35/100) * this.screenX;},

pushObj : function(){
this.unitArr.push({'unit' : null, 'prcnt' : null, 'inWidth' : null, 'id' : null})},

returnUnit : function(billAmount){
this.unitArr[this.arrLength-1].unit = billAmount;},

setPrcnt : function(sumTotal){
for(var x = 0; x < this.arrLength; x++){
this.unitArr[x].prcnt = (this.unitArr[x].unit / sumTotal) * 100;}},

setInBarLength : function(){
for(var x = 0; x < this.arrLength; x++){
this.unitArr[x].inWidth = (this.unitArr[x].prcnt / 100) * this.getOutBarLength;}},

returnId : function(){
this.unitArr[this.arrLength-1].id = 'bar' + this.arrLength;},

};

var View = {
tariffDom : document.getElementById('tariff'),
taxRDom : document.getElementById('taxR'),
initDom : document.getElementById('init'),
presentDom : document.getElementById('present'),
noticeDom : document.getElementById('notice'),
sumTDom : document.getElementById('sumT'),
infoDom : document.getElementById('info'),
runBtn : document.getElementById('run'),
chartDom : document.getElementById('chart'),

construct : function(parent, child, clas, id, text){
child = parent.appendChild(document.createElement(child));
//text or null(use null to omit part of construct)
if(clas != null){
child.className = clas;}
else;

if(id != null){
child.id = id;}
else;

if(text != null){
child.appendChild(document.createTextNode(text))}
else;},

asParent : function(clas, x){
var dynaParent = document.getElementsByClassName(clas)[x];
return dynaParent;},
};

var Notification = {
incompleteForm : 'Please Completely Fill Form',

inconsistentReading : 'Please check Readings! Current reading cannot be less than previous reading. Incase it appears this way in your bill, you are likely to have been additionally charged for units you have previously been charged',

noConsumption : 'You have not consumed power this month',

state : false,
showNotice : function(state,ui,notice){//when false, use null to omit notice param
if(this.state!=state){
ui.textContent = notice;
ui.style.border = 'solid';
ui.style.borderColor = 'red';
}

else{
ui.innerHTML = '';
ui.style.border = 'none';}
},
};

function Control(m,v,c,n){
var model = this.model = m;
var face = this.face = v;
var chart = this.chart = c;
var alert = this.alert = n;

var initialize = function(){
model.setTariff(face.tariffDom.value);
model.setInitRead(face.initDom.value);
model.setNowRead(face.presentDom.value);
model.setTaxPrcnt(face.taxRDom.value);
};

var evaluate = function(){
model.setConsumed();
model.setEnergyCharge();
model.setTax();
model.setBillAmount();
model.setSumTotal();
};

var displayBillInfo = function(){
face.construct(face.infoDom, 'p', 'unitDiff', null, 'Unit: ' + model.consumed);
face.construct(face.infoDom, 'p', 'amount', null, 'N' + Math.round(model.billAmount));
face.sumTDom.textContent = 'Total Amount: N' + Math.round(model.sumTotal);
};

var chartInit = function(){
//chart initializer must follow this precedence
chart.setOutBarLenght();
chart.pushObj(); 
chart.arrLength = chart.unitArr.length;
chart.returnUnit(model.billAmount);
chart.setPrcnt(model.sumTotal);
chart.setInBarLength();
chart.returnId();
};

var displaySingleBar = function(){
for(var x = 0; x < chart.arrLength; x++){

face.construct(face.chartDom, 'div', 'bars', null, null);

face.construct(face.asParent('bars', x), 'div', 'barLabel', null, '' + (x+1));

face.construct(face.asParent('bars', x), 'div', 'outBar', null, null);
var outBarAttr = document.getElementsByClassName('outBar')[x];
outBarAttr.style.width = chart.getOutBarLength + 'px';

face.construct(face.asParent('outBar', x), 'div', 'inBar', chart.unitArr[x].id, null);
var inBarAttr = document.getElementsByClassName('inBar')[x];
inBarAttr.style.width = chart.unitArr[x].inWidth + 'px';

face.construct(face.asParent('bars', x), 'div', 'barPrcnt', null, Math.round(chart.unitArr[x].prcnt) + '%');
}}

var displayMultipleBars = function(){
for(var x = 0; x < (chart.arrLength-1); x++){

var inBar = document.getElementsByClassName('inBar')[x];
inBar.style.width = chart.unitArr[x].inWidth + 'px';

var barPcnt = document.getElementsByClassName('barPrcnt')[x];
barPcnt.textContent = Math.round(chart.unitArr[x].prcnt) + '%'
}

face.construct(face.chartDom, 'div', 'bars', null, null);

face.construct(face.asParent('bars', chart.arrLength-1), 'div', 'barLabel', null, '' + (chart.arrLength));

face.construct(face.asParent('bars', chart.arrLength-1), 'div', 'outBar', null, null);
var outBarAttr = document.getElementsByClassName('outBar')[chart.arrLength-1];
outBarAttr.style.width = chart.getOutBarLength + 'px';

face.construct(face.asParent('outBar', chart.arrLength-1), 'div', 'inBar', chart.unitArr[(chart.arrLength-1)].id, null);
var inBarAttr = document.getElementsByClassName('inBar')[chart.arrLength-1];
inBarAttr.style.width = chart.unitArr[(chart.arrLength-1)].inWidth + 'px';

face.construct(face.asParent('bars', chart.arrLength-1), 'div', 'barPrcnt', null, Math.round(chart.unitArr[(chart.arrLength-1)].prcnt) + '%');
};

this.run = function(){
initialize();

if (model.getTariff !=null &&
model.getInitRead !=null &&
model.getNowRead !=null &&
model.getTaxPrcnt!=null &&
model.getNowRead > model.getInitRead){ //1st level

evaluate();
displayBillInfo();
alert.showNotice(false, face.noticeDom, null);
chartInit();

if(chart.arrLength == 1){ //2nd level
displaySingleBar();}

else if(chart.arrLength > 1){ //2nd level
 displayMultipleBars();}

else ; // 2nd level. do nothing
}

else if(model.getTariff == '' ||
model.getInitRead == '' ||
model.getNowRead == '' ||
model.getTaxPrcnt == ''){ // 1st level
alert.showNotice(true, face.noticeDom, alert.incompleteForm);}

else{ // 1st level
if(model.getNowRead == model.getInitRead){ //2nd level
alert.showNotice(true, face.noticeDom, alert.noConsumption);}

else{ //2nd level
alert.showNotice(true, face.noticeDom, alert.inconsistentReading);}
}
};
};

onload = function(){
var ctrl = new Control(Engine,View,Chart,Notification);
if(ctrl.model.savedTariff &&
 ctrl.model.savedTaxPrcnt &&
 ctrl.model.savedInitRead != null){
ctrl.face.taxRDom.value = '' + ctrl.model.savedTaxPrcnt;
ctrl.face.initDom.value = '' + ctrl.model.savedInitRead;
ctrl.face.tariffDom.value = '' + ctrl.model.savedTariff;
ctrl.face.presentDom.value = '';
}

else{
ctrl.face.taxRDom.value = 0;
ctrl.face.initDom.value = 0;
ctrl.face.tariffDom.value = 0;
}

ctrl.face.runBtn.onclick = ctrl.run;

addEventListener("keyup" , function(event){
if(event.keyCode == 13) //enter key
ctrl.run();});
}