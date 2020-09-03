
	var num=0;
	var id='i';
	var extid="i";
	var lastid='i';
function add(){
	if(document.getElementById('page2').style.height=='400px'){
		
			num=num+1;
			var a="a"+num;
			var b= document.getElementById('line');
		var c= b.cloneNode(true);
		c.id=a;
		var code= c.getElementsByTagName('input')[0];
		code.name='code'+num;
		var score= c.getElementsByTagName('select')[0];
		score.name='score'+num;
		var unit= c.getElementsByTagName('select')[1];
		unit.name='unit'+num;
		
		d= document.getElementById('scroll');
		d.appendChild(c);
			}
			
	else
		{
			document.getElementById('page2').style.height='400px';
		document.getElementById('scroll').style.height='353px';
		}
		
}

function select(clicked_id){
	extid=clicked_id;
			if(id=='i'){}
		else{
			document.getElementById(id).style.backgroundColor='#5F5F5F';
			}
	document.getElementById(clicked_id).style.backgroundColor='#0080FF';
	 id= clicked_id;
	}

	function undo(){
		if(extid!='i'){
		document.getElementById('scroll').removeChild(document.getElementById(extid));
		
		var idnum= 0;
		var k=1
		while(k <= document.getElementById('scroll').childNodes.length-1){
			var row= document.getElementsByClassName('data')[k-1];
			var previd= row.id;
			
			idnum=idnum+1;
			var newid= 'a'+idnum;
			
			
	
			//...................
			var cde= row.getElementsByTagName('input')[0].name='code'+idnum;
		
		var scr= row.getElementsByTagName('select')[0].name='score'+idnum;
		
			var unt= row.getElementsByTagName('select')[1].name='unit'+idnum;
			
			//............
			
			
			k=k+1;
			}
		
		 id='i';
		 extid='i';
		 
		}
		else;
		}
		
		function page2(){
		var count= document.getElementById('scroll').childNodes.length-1;
		document.getElementsByName('counter')[0].value=count;
			}
			
			function submitresult(){
			//window.location="result.php";
			/*var p2=document.getElementById('page2');
			p2.style.right='85px';
			var p1=document.getElementById('app');
			p1.style.left='85px';*/
				document.getElementById('result').submit();
				}
				
			function inputclick(clicked_id){
				var inputid= clicked_id;
				if(inputid=='add'){
				//input.style.borderColor='#FF0';
				document.getElementById('add').style.borderColor='#FF0';
				}
				else if(inputid=='remove'){
				//input.style.borderColor='#FF0';
				document.getElementById('remove').style.borderColor='#FF0';
				}
				else if(inputid=='submit'){
				//input.style.borderColor='#FF0';
				document.getElementById('submit').style.borderColor='#FF0';
				}
				//lastid= inputid;
				}
				
				function inputrelease(clicked_id){
				var inputid= clicked_id;
				var input= document.getElementById(inputid);
				input.style.backgroundColor='#5A5A5A';
				}
				
				function release(clicked_id){
					var inputid= clicked_id;
				var input= document.getElementById(inputid);
					if(inputid=='add'){
				input.style.borderColor='#0069D2';		
						}
						else if(inputid=='remove'){
				input.style.borderColor='#FF2828';		
						}
						else if(inputid=='submit'){
				input.style.borderColor='#0F0';		
						}
				
					}
					
					function text(clicked_id){
		var input= document.getElementById(clicked_id);
		input.id=clicked_id;
		if(input.textContent=='CODE'){
							input.textContent='';
		}
		else;
		}
					
						function checktext(clicked_id){
		var input= document.getElementById(clicked_id);
		input.id=clicked_id;
				if(input.textContent==''){
					input.textContent='CODE';
					}
							else;
							}