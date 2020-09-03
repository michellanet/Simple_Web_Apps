
var current='';

function warning(){}

function green(clikd){
	var rmum= document.getElementById(lastclicked);
	rmum.style.backgroundColor='#0F0';//green
	}
	function yellow(clikd){
	var rmum= document.getElementById(lastclicked);
	rmum.style.backgroundColor='#FF6';//yellow
	}

function gray(){
	var rmum= document.getElementById(lastclicked);
	rmum.style.backgroundColor='#999';
	}
	
	function white(){
	var rmum= document.getElementById(lastclicked); 
	if(rmum.parentNode.parentNode.id=='pkids'){
	document.getElementById('pmum').style.backgroundColor='#FFF';
	}
	else {var prevrmum= rmum.parentNode.parentNode.previousSibling; 
	prevrmum.style.backgroundColor='#FFF';//white;
	}
	}
	
	
	
	
	function checkcolor(){
		var btncolor;
		var white=0;
		var green=0;
		var pmum= document.getElementById('pmum');
		var pkid= document.getElementById('pkids');
	var rmums= pkid.getElementsByClassName('rstatus');
	var allrmuml= rmums.length;
	if(allrmuml==null||allrmuml<1){;}
	else{
	for(var i=0; i<allrmuml; i++){
		btncolor= window.getComputedStyle(rmums[i],null).getPropertyValue('background-color');//.style.backgroundColor;
		if(btncolor=='rgb(255, 255, 255)'){//white
			white= ++white;
			}//if
			else{
				}//else
				
		if(btncolor=='rgb(0, 255, 0)'){//green
			green= ++green;
			}//if
			else{
				}//else
		}//for loop
			if(white<1&&green>0){
				pmum.style.backgroundColor='#0F0';
				document.getElementById('resultbtn').style.display='inline';//set result btn to visible
				}
				else{
				pmum.style.backgroundColor='#FFF';
				document.getElementById('resultbtn').style.display='none';//set result btn to invisible
					}//else
	}//else rmuml >0
	}// end of check color function