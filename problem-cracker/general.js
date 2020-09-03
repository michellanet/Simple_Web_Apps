var lastclicked;
var domainnum=0;
var rmumnum=0;
var rkidsnum=0;
var db=0;
var dbtitle=0;
var dbsolution=0;

function show(clicked_id){
	document.getElementById('resultbtn').style.display='none';
	document.getElementById('view').style.height='auto';
	var form;
	if(clicked_id=='pmum'){
	form= document.getElementById('pform');
	form.style.display='block';
	document.getElementById('ptitle').value= p.gettitle();
	}
	
	else{
		form= document.getElementById('rform');
	form.style.display='block';
	var rmum= document.getElementById(clicked_id);
	var rkid= rmum.nextSibling;
	var db= rkid.firstChild;
	var dbtitle= db.firstChild;
	
	document.getElementById('edit').value= dbtitle.value;
	
	var dbsoln= db.lastChild;
	if(dbsoln.value=="OUT OF USER'S CONTROL"){
	document.getElementsByName('solution')[0].value= '';
	}//if OUT OF USER'S CONTROL
	else{
		document.getElementsByName('solution')[0].value= dbsoln.value;
		}//if not OUT OF USER'S CONTROL
	}
	fadebtns(true);
		
		if(document.getElementById('result').hasChildNodes()){
			removeresult();
			}
	else{}//else haschildnodes
	
	}


   function clicked(clk){lastclicked=clk;}

	
	function done(form, btn){
		document.getElementById(form).style.display='none';
		fadebtns(false);
		document.getElementById('view').style.height='250px';
		}
		
		function fadebtns(state){
		var statdiv =document.getElementById('statusdiv');
		var piece= statdiv.getElementsByTagName('button');
		        for(i=0; i<piece.length; i++)
		piece[i].disabled=state;
			}
			
			
			
			function fadeonlyreasons(state){
		var statdiv =document.getElementById('statusdiv');
		var piece= statdiv.getElementsByTagName('button')[0];
		piece.disabled=state;
}





var getnum=0;
function setid(element){ //inner funct
	idtext=element.id;
	var num= getnum;
	num= ++num;
	var gotid= idtext+num;
	element.id=gotid;
	getnum= num;
	return element;
	}

function cloner(elementid){ //inner funct
	var real= document.getElementById(elementid);
	var domain= real.id;
	var clone=real.cloneNode(true);
	if(domain=='domain'){
	clone.style.display='block'; 
	clone.style.whiteSpace='nowrap';
	}
	else
	clone.style.display='inline-block'; 
	return clone;
	}




	
	
	function rgroup(clicked_id){
		var elval= document.getElementById(clicked_id).value;
			
		if(elval=='yes'){
			var solnyes= document.getElementsByName('solution')[0];
			var yesok= document.getElementsByName('yesok')[0];
			solnyes.disabled=false;
			yesok.disabled=false;
			
			var solnno= document.getElementsByName('solution')[1];
			var noadd= document.getElementsByName('noadd')[0];
			solnno.disabled=true;
			noadd.disabled=true;
			
			var insolvable= document.getElementsByName('insolvable')[0];
			insolvable.disabled=true;
			
			}
			else if(elval=='no'){
				var solnyes= document.getElementsByName('solution')[0];
			var yesok= document.getElementsByName('yesok')[0];
			solnyes.disabled=true;
			yesok.disabled=true;
			
			var solnno= document.getElementsByName('solution')[1];
			var noadd= document.getElementsByName('noadd')[0];
			solnno.disabled=false;
			noadd.disabled=false;
			
			var insolvable= document.getElementsByName('insolvable')[0];
			insolvable.disabled=true;
				}
				
				else if(elval=='insolvable'){
				var solnyes= document.getElementsByName('solution')[0];
			var yesok= document.getElementsByName('yesok')[0];
			solnyes.disabled=true;
			yesok.disabled=true;
			
			var solnno= document.getElementsByName('solution')[1];
			var noadd= document.getElementsByName('noadd')[0];
			solnno.disabled=true;
			noadd.disabled=true;
			
			var insolvable= document.getElementsByName('insolvable')[0];
			insolvable.disabled=false;
			insolvablehandler();
			uprootchild();
			gray();
					}
		}
		
		function yesok(){
			var solnyes= document.getElementsByName('solution')[0].value;
			var rmum= document.getElementById(lastclicked);
	var lastdomain= rmum.parentNode;
	var domainlast= lastdomain.lastChild;
	var db= domainlast.firstChild;
	var dbsoln= db.lastChild;
	dbsoln.value= solnyes;
			}
			
			function nook(){
			var rmum= document.getElementById(lastclicked);
	var lastdomain= rmum.parentNode;
	var domainlast= lastdomain.lastChild;
	var db= domainlast.firstChild;
	var dbsoln= db.lastChild;
	dbsoln.value= ''; 
			}
			
			function insolvablehandler(){
				var insolvableval= document.getElementsByName('insolvable')[0].value;
				var rmum= document.getElementById(lastclicked);
	var lastdomain= rmum.parentNode;
	var domainlast= lastdomain.lastChild;
	var db= domainlast.firstChild;
	var dbsoln= db.lastChild;
	dbsoln.value=insolvableval;  
				}
				
				function rformreset(){
					var inpt0= document.getElementsByName('solution')[0];
					inpt0.value='';
					var inpt1= document.getElementsByName('solution')[1];
					inpt1.value='';
					}
					
					function pformreset(){
					var inpt= document.getElementById('newreason');
					inpt.value='';
					}
					
					function uprootchild(){
						var rmum= document.getElementById(lastclicked);
	var domainparent= rmum.nextSibling;
	var toremove= domainparent.lastChild;
	
	if(toremove.className=='domain'){
		domainparent.removeChild(toremove);
		}
		else{
	;
	}
						}
						
		function formfocus(){
		window.scrollTo(0,0);
		}
							
		function statusfocus(){
		window.scrollTo(0, document.body.scrollHeight);
		}
			
			function buildresult(parentelem, element, text){
			var elem= parentelem.appendChild(document.createElement(element));
			elem.id='topic';
			 elem.appendChild(document.createTextNode(text));
			}
		
		function populate(){
			var pkid= document.getElementById('pkids');
			var rmum= pkid.getElementsByClassName('rstatus');
			var rmuml= rmum.length;
			var rkid;
			var db;
			var solnval;
			var greens=[];
			var greensl;
			var num=0;
			var problem= p.gettitle();
			var numspan;
			var span;
			var para;
			for(var i=0; i<rmuml; i++){
			btncolor= window.getComputedStyle(rmum[i],null).getPropertyValue('background-color');
			if(btncolor=='rgb(0, 255, 0)'){
				greens.push(rmum[i]);
				}	
				else{}
			}//loop i
			greensl= greens.length;
			var page= document.getElementById('result');
			var cover=page.appendChild(document.createElement('div'));
			cover.id='cover';
			 buildresult(cover, 'div', problem);//prob title
				
			for(var x=0; x<greensl; x++){
			num= x+1;
			rkid= greens[x].nextSibling;
			db= rkid.firstChild;
			solnval= db.lastChild.value;
			para= cover.appendChild(document.createElement('div'));
			para.className='para';
			numspan= para.appendChild(document.createElement('div'));
			numspan.className='numspan';
			numspan.appendChild(document.createTextNode(num+'.'));
			
			span= para.appendChild(document.createElement('div'));
			span.className='span';
			span.appendChild(document.createTextNode(solnval));
			}//loop x
			document.getElementById('resultbtn').style.display='none';
			}
		
		function showresult(){
			document.getElementById('view').style.height='auto';
			document.getElementById('result').style.display='block';//set result page to visible
			}
			
		function removeresult(){
			var result= document.getElementById('result');
	var cover=result.firstChild;// document.getElementById('cover');
	result.removeChild(cover);
				}