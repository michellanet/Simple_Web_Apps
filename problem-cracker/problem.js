var p= {
	
title:'',

settitle: function(){
	this.title= document.getElementById('ptitle').value;
	var title= this.title;
	var slicedtitle= title.slice(0,6)+'..';
	var pmum= document.getElementById('pmum');
	var nods= pmum.childNodes[0];
	var text= document.createTextNode(slicedtitle);
	if(pmum.hasChildNodes()){
		pmum.replaceChild(text, nods);
		}
		else{
	pmum.appendChild(text);
	}
},

gettitle: function(){return this.title;},



    
	
 setdomainid: function(element){ //inner funct
	var idtext=element.id;
	var num= domainnum;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	domainnum= num;
	return element;
	},

setrmumid: function(element){ //inner funct
	var idtext=element.id;
	var num= rmumnum;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	rmumnum= num;
	return element;
	},


setrkidsid: function(element){ //inner funct
	var idtext=element.id;
	var num= rkidsnum;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	rkidsnum= num;
	return element;
	},
	
	
	setdbid: function(element){ //inner funct
	var idtext=element.id;
	var num= db;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	db= num;
	return element;
	},
	
	
	setdbtitleid: function(element){ //inner funct
	var idtext=element.id;
	var num= dbtitle;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	dbtitle= num;
	return element;
	},
	
	
	setdbsolutionid: function(element){ //inner funct
	var idtext=element.id;
	var num= dbsolution;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	dbsolution= num;
	return element;
	},



add: function(){
	pmum.style.backgroundColor='#FFF';//sets pmum to white when an rmum is added, since all its kids are no longer colored
	var cloneddomain= cloner('domain');
    var currentdomain=p.setdomainid(cloneddomain);
	var domainparent= document.getElementById('pkids');
	domainparent.appendChild(currentdomain);
	
		var clonedrmum= cloner('rmum');
    var currentrmum=p.setrmumid(clonedrmum);
	var rmumparent= document.getElementById(currentdomain.id);
	rmumparent.appendChild(currentrmum); 
	
	var clonedrkids= cloner('rkids');
    var currentrkids=p.setrkidsid(clonedrkids);
	var rkidsparent= document.getElementById(currentdomain.id);
	rkidsparent.appendChild(currentrkids);
	
	var cloneddb= cloner('db');
    var currentdb=p.setdbid(cloneddb);
	var dbparent= document.getElementById(currentrkids.id);
	dbparent.appendChild(currentdb);
	
	var cloneddbtitle= cloner('dbtitle');
    var currentdbtitle=p.setdbtitleid(cloneddbtitle);
	var dbtitleparent= document.getElementById(currentdb.id);
	dbtitleparent.appendChild(currentdbtitle);
	
	var cloneddbsolution= cloner('dbsolution');
    var currentdbsolution=p.setdbsolutionid(cloneddbsolution);
	var dbsolutionparent= document.getElementById(currentdb.id);
	dbsolutionparent.appendChild(currentdbsolution);
	},
	
	

setrtitle: function(){
	var rtitle= document.getElementById('newreason').value;
	var pkid= document.getElementById('pkids');
	var lastdomain= pkid.lastChild;
	var domainlast= lastdomain.lastChild;
	var db= domainlast.firstChild;
	var dbtitle= db.firstChild;
	dbtitle.value= rtitle;
	
	var slicedtitle= rtitle.slice(0,6)+'..';
	var rmum= lastdomain.firstChild;
	var text= document.createTextNode(slicedtitle);
	rmum.appendChild(text);
}

};










