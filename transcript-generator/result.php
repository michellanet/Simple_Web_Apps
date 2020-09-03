<html>
<head>
<title> <?php
  echo $_POST["name"].' '; ?>transcript
 </title>
<style type="text/css">
#wrapper {
	position: relative;
	border-top-width: thin;
	border-right-width: thin;
	border-bottom-width: thin;
	border-left-width: thin;
	border-top-style: solid;
	border-right-style: solid;
	border-bottom-style: solid;
	border-left-style: solid;
	width: 600px;
	margin-right: auto;
	margin-left: auto;
}
#adjust {
	position: relative;
}
#wrapper #header {
	text-align: justify;
	margin-bottom: 50px;
	margin-left: 5px;
	font-size: large;
}
#wrapper #body #title th {
	border-top-width: thin;
	border-bottom-width: thin;
	border-top-style: solid;
	border-right-style: none;
	border-bottom-style: solid;
	border-left-style: none;
	border-top-color: #CCC;
	border-bottom-color: #CCC;
}
#wrapper #body {
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	width: 590px;
}
#wrapper #body tr #cgpa {
	border: medium solid #CCC;
}
#wrapper #body #total td {
	border-top-width: thin;
	border-top-style: solid;
	border-top-color: #CCC;
}
#wrapper #body #total th {
	border-top-width: thin;
	border-top-style: solid;
	border-top-color: #CCC;
}

</style>
</head>
<body>
<div id="wrapper">
<div id="adjust">
       <table id="header" >
  <tr>
    <th scope="row">UNIVERSITY:</th>
    <td> <?php echo $_POST["sch"]; ?></td>
  </tr>
  <tr>
    <th scope="row">FACULTY:</th>
    <td><?php echo $_POST["fac"]; ?></td>
  </tr>
  <tr>
    <th scope="row">DEPARTMENT:</th>
    <td><?php echo $_POST["dept"]; ?></td>
  </tr>
  <tr>
    <th scope="row">STUDENT NAME:</th>
    <td><?php echo $_POST["name"] ; ?></td>
  </tr>
  <tr>
    <th scope="row">GENDER:</th>
    <td><?php echo $_POST["gen"]; ?></td>
  </tr>
</table>
        </div>
		
  <?php
  
  function scores2point($s){
	$points=0;
	$scores=$s;
	 if($scores>=90 && $scores<=100){
		$points=4;
	 }
	 else if($scores >=85 && $scores <= 89){
		 $points= 3.67;
	 }
	 else if($scores >=80 && $scores <= 84){
		 $points= 3.33;
		 
	 }
	 else if($scores >=75 && $scores <= 79){
		$points= 3.00;
	 }
	 else if($scores >=70 && $scores <= 74){
		 $points= 2.67;
	 }
	 else if($scores >=65 && $scores <= 69){
		 $points= 2.33;
	 }
	 else if($scores >=60 && $scores <= 64){
		 $points= 2.00;
	 }
	 else if($scores >=55 && $scores <= 59){
		 $points= 1.67;
	 }
	 else if($scores >=50 && $scores <= 54){
		 $points= 1.00;
	 }
	 else if($scores >=00 && $scores <= 49){
		 $points= 0.00;
	 }
	 return $points;
	}

    function gradesmethod($sc){
	$scores=$sc;
	$grade="";
	if($scores>=90 && $scores<=100){
		$grade="A";
	 }
	 else if($scores >=85 && $scores <= 89){
		 $grade="A-";
	 }
	 else if($scores >=80 && $scores <= 84){
		 $grade="B+";	 
	 }
	 else if($scores >=75 && $scores <= 79){
		 $grade="B";
	 }
	 else if($scores >=70 && $scores <= 74){
		 $grade="B-";
	 }
	 
	 else if($scores >=65 && $scores <= 69){
		 $grade="C+";
	 }
	 else if($scores >=60 && $scores <= 64){
		 $grade="C";
	 }
	 else if($scores >=55 && $scores <= 59){
		 $grade="C-";
	 }
	 else if($scores >=50 && $scores <= 54){
		 $grade="D";
	 }
	 else if($scores >=00 && $scores <= 49){
		 $grade="F";
	 }
	 return $grade;
}
  
  
        
        $counter= $_POST['counter'];
        
		$unitsum=0;
		$unitpointtotal=0;
        $gradetotal="";
		$allscorepipe=0;
		$s2p=0;
        $gm=0;
		$cgpa=0;
  
        for($num=1; $num<= $counter; $num++){
        $code='code'.$num;
        $score='score'.$num;
        $unit='unit'.$num;
        $allcode[$num-1]= $_POST[$code];
        $allscore[$num-1]= $_POST[$score];
        $allunit[$num-1]= $_POST[$unit];
        $number[$num-1]=$num;
		
		$unitsum=$unitsum + $allunit[$num-1];
		
		$allscorepipe=$allscore[$num-1];
		
		$s2p=scores2point($allscorepipe);
		
		$point[$num-1]=scores2point($allscorepipe);
		$unitpoint[$num-1]= $allunit[$num-1]*$s2p;
		$unitpointtotal=$unitpointtotal+$unitpoint[$num-1];
		
		$gm=gradesmethod($allscorepipe);
        $grade[$num-1]= $gm;
		$gradetotal=$unitpointtotal+$unitpoint[$num-1];
		}
		
		$cgpa=$unitpointtotal/$unitsum;
        ?>
        
  <table id="body">
  <tr id="title">
    <th scope="col">NO.</th>
    <th scope="col">COURSE CODE</th>
    <th scope="col">UNIT</th>
    <th scope="col">SCORE</th>
    <th scope="col">GRADE</th>
    <th scope="col">POINT</th>
    <th scope="col">UNIT*POINT</th>
  </tr>
  <?php
  $color2='#CCCCCC';
  $color1='#FFFFFF';
  $selected=$color2;
  
   for($numb=1; $numb<= $counter; $numb++){ 
  $current=$selected;
  ?>
   <tr bgcolor="<?php echo $current; ?> ">
   
    <th scope="row"><?php echo $number[$numb-1]; ?></th>
    <td><?php echo $allcode[$numb-1]; ?></td>
    <td><?php echo $allunit[$numb-1]; ?></td>
    <td><?php echo $allscore[$numb-1]; ?></td>
    <td><?php echo $grade[$numb-1]; ?></td>
    <td><?php echo $point[$numb-1]; ?></td>
    <td><?php echo $unitpoint[$numb-1]; ?></td>
  </tr>
  <?php if($selected==$color1)
  $selected=$color2;
  else
  $selected=$color1;
   } ?>
  <tr id="total">
    <th scope="row"></th>
    <td></td>
    <td><?php echo $unitsum; ?></td>
    <td></td>
    <td></td>
    <td></td>
    <td><?php echo $unitpointtotal; ?></td>
  </tr>
  <tr>
    <th scope="row">CGPA:</th>
    <td id="cgpa"><?php echo number_format($cgpa, 2); ?>/4</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

        </div>
        </body>
</html>
/*
$gpa='gpa.html';
$doc= new DOMdocument()
$doc->loadHTMLFILE($gpa);
$path= new DOMXpath($doc);
$dom=$path->query("*/div[@id='name']");
echo $dom->nodeValue;
*/