   var num= 0;
var Effect={
    add: function(listid,classname){//takes id of eida dolist or dontlist
	    num=num+1;
	    var xnum="x"+num;
        var itemobject= document.getElementsByClassName('itemobject')[0];
		var item= itemobject.cloneNode(true);
		item.style.display='block';
		item.className=classname;
		var list= document.getElementById(listid);
		list.appendChild(item);
		var x= item.getElementsByTagName('input')[1];
		x.id=xnum; 
	},
    remove: function(clickedelement){
	    var toremove= document.getElementById(clickedelement).parentNode;
        var parent= toremove.parentNode;
	    parent.removeChild(toremove);
    },
	reset: function(){
	//removes result info
	var infor=document.getElementsByClassName('info')[0];
	var infoo=document.getElementsByClassName('info')[1];
	var infop=document.getElementsByClassName('info')[2];
	infor.textContent='';
	infoo.textContent='';
	infop.textContent='';
	
	//re-enables analyse button action event
//document.getElementById('analyse').onclick=Submit.submit;
	
	//removes do n dont list
	var dolist= document.getElementById('dolist');
	var docover= document.getElementById('dolistcover');
	docover.removeChild(dolist);
	
	var dontlist= document.getElementById('dontlist');
	var dontcover= document.getElementById('dontlistcover');
	dontcover.removeChild(dontlist);
	
	//creates new dolist
        var listobject= document.getElementById('list');
		var newobj= listobject.cloneNode(true);
		newobj.style.display='block';
		newobj.id='dolist';
		var cover= document.getElementById('dolistcover');
		cover.appendChild(newobj);
		
        var listobject1= document.getElementById('list');
		var newobj1= listobject1.cloneNode(true);
		newobj1.style.display='block';
		newobj1.id='dontlist';
		var cover1= document.getElementById('dontlistcover');
		cover1.appendChild(newobj1);
	}
};

var Submit= {};

Submit.realism='';
Submit.optimism='';
Submit.pessimism='';

Submit.gather= function(item){
var list= document.getElementsByClassName(item);
var lengt= list.length; 
var sum=0;
var perlist;
var rate='';
var resolved=0;
for(x=0; x<lengt; x++){
perlist= document.getElementsByClassName(item)[x];
rate= perlist.getElementsByTagName('select')[0].value;
sum= sum+Number(rate);
}
var score= lengt*sum;

if(item=='doitem'){
Submit.dounisum=sum;
Submit.dolistlengt=lengt;}
else{
Submit.dontunisum=sum;
Submit.dontlistlengt=lengt;}
return score;
};


Submit.submit= function(){
var doscore=Submit.gather('doitem');
var dontscore=Submit.gather('dontitem');

if(doscore!=dontscore){
var micro=document.getElementById('microinfo');
micro.textContent='';
Submit.evaluate(doscore,dontscore);}
//equal score evaluation code goes in the else
else if(doscore==dontscore&&Submit.dounisum!=Submit.dontunisum){
var micro= document.getElementById('microinfo');
micro.textContent='It is very hard to decide, but based on a comparison by greater importance,';
Submit.evaluate(Submit.dounisum,Submit.dontunisum);

//causes optimism & pessimism not to display
var infoo=document.getElementsByClassName('info')[1];
var infop=document.getElementsByClassName('info')[2];
infoo.textContent='';
infop.textContent='';
}

else if(doscore==dontscore&&Submit.dounisum==Submit.dontunisum&&Submit.dolistlengt!=Submit.dontlistlengt){
var micro= document.getElementById('microinfo');
micro.textContent='I advice you go with your instinct beyond this app access, but if you really want to know what i think;';
Submit.evaluate(Submit.dolistlengt,Submit.dontlistlengt);

//causes optimism & pessimism not to display
var infoo=document.getElementsByClassName('info')[1];
var infop=document.getElementsByClassName('info')[2];
infoo.textContent='';
infop.textContent='';
}

else{
var micro=document.getElementById('microinfo');
micro.textContent='Let your instincts lead this time. Good Luck!';
var infor=document.getElementsByClassName('info')[0];
var infoo=document.getElementsByClassName('info')[1];
var infop=document.getElementsByClassName('info')[2];
infor.textContent='';
infoo.textContent='';
infop.textContent='';
}

//disables btn action
//document.getElementById('analyse').onclick='';
};

Submit.evaluate= function(domark,dontmark){
var standard=0; var test=0;
var infor=document.getElementsByClassName('info')[0];
var infoo=document.getElementsByClassName('info')[1];
var infop=document.getElementsByClassName('info')[2];

standard=domark;
var test= domark+dontmark;
Submit.emotion(standard,test);

//output code goes here
infor.textContent=this.realism;
infoo.textContent=this.optimism;
infop.textContent=this.pessimism;
};


Submit.emotion= function(s,t){
var cent= (s/t)*100; console.log(cent);
this.realism='Realistically, ';
this.optimism='Optimistic emotion: ';
this.pessimism='Pessimistic emotion: ';

if(cent>75){
this.realism=this.realism+'Obviously a big YES!';
this.optimism=this.optimism+'Absolutely YES!';
this.pessimism='Even with a '+this.pessimism+'Hell YES!';
}
else if(cent>50&&cent<76){
this.realism=this.realism+'Just YES!';
this.optimism=this.optimism+'of course YES!';
this.pessimism=this.pessimism+'Kinda think NO.';
}
else if(cent>25&&cent<51){
this.realism=this.realism+'NO!';
this.optimism=this.optimism+'Kinda; YES!';
this.pessimism=this.pessimism+'Just NO.';
}
else if(cent<26){
this.realism=this.realism+'Totally NO!';
this.optimism='Even with an '+this.optimism+'Oh God, NO!';
this.pessimism=this.pessimism+'Clearly NO!';
}

if(s==Submit.dolistlengt&&t==(Submit.dontlistlengt+Submit.dolistlengt)){
cent= 100-((s/t)*100); console.log(cent);}
};

