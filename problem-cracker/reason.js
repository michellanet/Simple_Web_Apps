var R= {

modify: function(){
	p.rtitle= document.getElementById('edit').value;
	var rmum= document.getElementById(lastclicked);
	
	var lastdomain= rmum.parentNode;
	var domainlast= lastdomain.lastChild;
	var db= domainlast.firstChild;
	var dbtitle= db.firstChild;
	dbtitle.value= p.rtitle;
	
	var title= p.rtitle;
	var slicedtitle= title.slice(0,6)+'..';
	var piece= document.getElementById(lastclicked);
	var nodes= piece.childNodes[0];
	var text= document.createTextNode(slicedtitle);
	if(piece.hasChildNodes()){
		piece.replaceChild(text, nodes);
		}
		else{
	piece.appendChild(text);
	}
},


remove: function(){
	white();
	parent= document.getElementById(lastclicked).parentNode.parentNode;
	toremove= document.getElementById(lastclicked).parentNode;
	parent.removeChild(toremove);
	
	document.getElementById('rform').style.display='none';
		fadebtns(false);
		checkcolor();
	document.getElementById('view').style.height='250px';
	},

    
	
   
	
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
	var cloneddomain= cloner('domain');
    var currentdomain=R.setdomainid(cloneddomain);
	var rmum= document.getElementById(lastclicked);
	var domainparent= rmum.nextSibling;
	domainparent.appendChild(currentdomain);
	
		var clonedrmum= cloner('rmum');
    var currentrmum=R.setrmumid(clonedrmum);
	var rmumparent= document.getElementById(currentdomain.id);
	rmumparent.appendChild(currentrmum); 
	
	var clonedrkids= cloner('rkids');
    var currentrkids=R.setrkidsid(clonedrkids);
	var rkidsparent= document.getElementById(currentdomain.id);
	rkidsparent.appendChild(currentrkids);
	
	var cloneddb= cloner('db');
    var currentdb=R.setdbid(cloneddb);
	var dbparent= document.getElementById(currentrkids.id);
	dbparent.appendChild(currentdb);
	
	var cloneddbtitle= cloner('dbtitle');
    var currentdbtitle=R.setdbtitleid(cloneddbtitle);
	var dbtitleparent= document.getElementById(currentdb.id);
	dbtitleparent.appendChild(currentdbtitle);
	
	var cloneddbsolution= cloner('dbsolution');
    var currentdbsolution=R.setdbsolutionid(cloneddbsolution);
	var dbsolutionparent= document.getElementById(currentdb.id);
	dbsolutionparent.appendChild(currentdbsolution);
	},
	
	

setrtitle: function(){
	var rtitle= document.getElementsByName('solution')[1].value;
	var oldrmum= document.getElementById(lastclicked);
	var rkid= oldrmum.nextSibling;
	var lastdomain= rkid.lastChild;
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


