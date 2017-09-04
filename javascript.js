function initialize(){
	document.getElementById("sub1").style.visibility='hidden';
	document.getElementById("sub2").style.visibility='hidden';
	document.getElementById("sub3").style.visibility='hidden';
	document.getElementById("sub4").style.visibility='hidden';
	document.getElementById("sub5").style.visibility='hidden';
	document.getElementById("length").style.visibility='hidden';
	document.getElementById("breadth").style.visibility='hidden';
	document.getElementById("squareSide").style.visibility='hidden';
	document.getElementById("circleRadius").style.visibility='hidden';
	document.getElementById("TriSide1").style.visibility='hidden';
	document.getElementById("TriSide2").style.visibility='hidden';
	document.getElementById("TriSide3").style.visibility='hidden';
	document.getElementById("hex1").style.visibility='hidden';
	document.getElementById("hex2").style.visibility='hidden';
	document.getElementById("hex3").style.visibility='hidden';
	document.getElementById("hex4").style.visibility='hidden';
	document.getElementById("hex5").style.visibility='hidden';
	document.getElementById("hex6").style.visibility='hidden';
	document.getElementById("d1").style.visibility='hidden';
	document.getElementById("d2").style.visibility='hidden';
	document.getElementById("d3").style.visibility='hidden';
	document.getElementById("rectL").style.visibility='hidden';
	document.getElementById("rectB").style.visibility='hidden';
	document.getElementById("squrSide").style.visibility='hidden';
	document.getElementById("circR").style.visibility='hidden';
	document.getElementById("triS1").style.visibility='hidden';
	document.getElementById("triS2").style.visibility='hidden';
	document.getElementById("triS3").style.visibility='hidden';
	document.getElementById("hexS1").style.visibility='hidden';
	document.getElementById("hexS2").style.visibility='hidden';
	document.getElementById("hexS3").style.visibility='hidden';
	document.getElementById("hexS4").style.visibility='hidden';
	document.getElementById("hexS5").style.visibility='hidden';
	document.getElementById("hexS6").style.visibility='hidden';
	document.getElementById("dia1").style.visibility='hidden';
	document.getElementById("dia2").style.visibility='hidden';
	document.getElementById("dia3").style.visibility='hidden';
	document.getElementById("area").style.visibility='hidden';
	document.getElementById("per").style.visibility='hidden';
	document.getElementById("area1").style.visibility='hidden';
	document.getElementById("per1").style.visibility='hidden';
	
}
function rectFunc(){
	initialize();
	 var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,200,200);ctx.beginPath();
        ctx.moveTo(60,75);
        ctx.lineTo(140,75);
        ctx.lineTo(140,125);
        ctx.lineTo(60,125);
        ctx.lineTo(60,75);
        
        ctx.stroke();
	document.getElementById("rectL").style.visibility='visible';
	document.getElementById("rectB").style.visibility='visible';
	document.getElementById("length").style.visibility='visible';
	document.getElementById("breadth").style.visibility='visible';
	document.getElementById("sub1").style.visibility='visible';
}

function squrFunc(){
	initialize();
	 var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
        ctx.clearRect(0,0,200,200);ctx.beginPath();
        ctx.moveTo(50,50);
        ctx.lineTo(150,50);
        ctx.lineTo(150,150);
        ctx.lineTo(50,150);
        ctx.lineTo(50,50);
        ctx.stroke();
	document.getElementById("squrSide").style.visibility='visible';
	document.getElementById("squareSide").style.visibility='visible';
	document.getElementById("sub2").style.visibility='visible';
}
function circFunc(){
	initialize();
	 var c = document.getElementById("myCanvas");
	 var ctx = c.getContext("2d");
        ctx.clearRect(0,0,200,200);
        ctx.beginPath();
        ctx.arc(100,100,40,0,2*Math.PI);
        ctx.stroke();

	document.getElementById("circR").style.visibility='visible';
	document.getElementById("circleRadius").style.visibility='visible';
	document.getElementById("sub3").style.visibility='visible';
}
function triFunc(){
	initialize();
	 var c = document.getElementById("myCanvas");
	 var ctx = c.getContext("2d");
        ctx.clearRect(0,0,200,200);ctx.beginPath();
        ctx.moveTo(95,50);
        ctx.lineTo(160,160);
        ctx.lineTo(40,160);
        ctx.lineTo(95,50);
        ctx.stroke();
	document.getElementById("triS1").style.visibility='visible';
	document.getElementById("triS2").style.visibility='visible';
	document.getElementById("triS3").style.visibility='visible';
	document.getElementById("TriSide1").style.visibility='visible';
	document.getElementById("TriSide2").style.visibility='visible';
	document.getElementById("TriSide3").style.visibility='visible';
	document.getElementById("sub4").style.visibility='visible';
}
function hexFunc(){
	initialize();
	  var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,200,200);ctx.beginPath();
        ctx.moveTo(90,50);
        ctx.lineTo(150,80);
        ctx.lineTo(150,140);
        ctx.lineTo(90,170);
        ctx.lineTo(40,140);
        ctx.lineTo(40,80);
        ctx.lineTo(90,50);
        ctx.stroke();
	document.getElementById("hexS1").style.visibility='visible';
	document.getElementById("hexS2").style.visibility='visible';
	document.getElementById("hexS3").style.visibility='visible';
	document.getElementById("hexS4").style.visibility='visible';
	document.getElementById("hexS5").style.visibility='visible';
	document.getElementById("hexS6").style.visibility='visible';
	document.getElementById("hex1").style.visibility='visible';
	document.getElementById("hex2").style.visibility='visible';
	document.getElementById("hex3").style.visibility='visible';
	document.getElementById("hex4").style.visibility='visible';
	document.getElementById("hex5").style.visibility='visible';
	document.getElementById("hex6").style.visibility='visible';
	document.getElementById("d1").style.visibility='visible';
	document.getElementById("d2").style.visibility='visible';
	document.getElementById("d3").style.visibility='visible';
	document.getElementById("dia1").style.visibility='visible';
	document.getElementById("dia2").style.visibility='visible';
	document.getElementById("dia3").style.visibility='visible';	
	document.getElementById("sub5").style.visibility='visible';
	
}

function area1(){
	initialize();
	var x = document.getElementById("length").value;
	var y = document.getElementById("breadth").value;
	if (x == "" || y =="") {
        alert("Length and Breadth must be filled out");
        return false;
     }
	document.getElementById("area").style.visibility='visible';
	document.getElementById("per").style.visibility='visible';
	document.getElementById("area1").style.visibility='visible';
	document.getElementById("per1").style.visibility='visible';
	document.getElementById("area1").innerHTML = x*y;
	document.getElementById("per1").innerHTML = 2*x+ 2*y;
	
}
function area2(){
	initialize();
	var x = document.getElementById("squareSide").value;
	
	if (x == "" ) {
        alert("Square side length must be filled out");
        return false;
     }
	document.getElementById("area").style.visibility='visible';
	document.getElementById("per").style.visibility='visible';
	document.getElementById("area1").style.visibility='visible';
	document.getElementById("per1").style.visibility='visible';
	document.getElementById("area1").innerHTML = x*x;
	document.getElementById("per1").innerHTML = 4*x;
}
function area3(){
	initialize();
	var x = document.getElementById("circleRadius").value;
	if (x == "" ) {
        alert("Circle radius must be filled out");
        return false;
     }
	document.getElementById("area").style.visibility='visible';
	document.getElementById("per").style.visibility='visible';
	document.getElementById("area1").style.visibility='visible';
	document.getElementById("per1").style.visibility='visible';
	document.getElementById("per1").innerHTML = MATH.PI*x*x;
	document.getElementById("per1").innerHTML = 2*MATH.PI*x;
}
function area4(){
	initialize();
	var x = document.getElementById("TriSide1").value;
	var y = document.getElementById("TriSide2").value;
	var z = document.getElementById("TriSide3").value;
	var p = (1*x+1*y+1*z)/2
	var k = x*y*p*p + y*z*p*p + x*z*p*p - x*y*z*p -p*p*p*p;
	if (x == "" || y ==""|| z=="") {
        alert("All sides must be filled out");
        return false;
     }
	document.getElementById("area").style.visibility='visible';
	document.getElementById("per").style.visibility='visible';
	document.getElementById("area1").style.visibility='visible';
	document.getElementById("per1").style.visibility='visible';
	document.getElementById("area1").innerHTML = Math.pow(k, 0.5);
	document.getElementById("per1").innerHTML = 1*x + 1*y + 1*z;
}
function area5(){
	initialize();
	var x = document.getElementById("hex1").value;
	var y = document.getElementById("hex2").value;
	var z = document.getElementById("hex3").value;
	var a = document.getElementById("hex4").value;
	var b = document.getElementById("hex5").value;
	var c = document.getElementById("hex6").value;
	var d1 =document.getElementById("d1").value
	var d2 =document.getElementById("d2").value
	var d3 = document.getElementById("d3").value
	var p1 = (1*x+1*y+1*d1)/2
	var k1= x*y*p1*p1 + y*d1*p1*p1 + x*d1*p1*p1 - x*y*d1*p1 -p1*p1*p1*p1;
	var a1 = MATH.PI(k1,0.5);
	var p2 = (1*d2+1*a+1*z)/2
	var k2= d2*a*p2*p2 + a*z*p2*p2 + d2*z*p2*p2 - d2*a*z*p2 -p2*p2*p2*p2;
	var a2 = MATH.PI(k2,0.5);
	var p3 = (1*b+1*c+1*d3)/2
	var k3 = b*c*p3*p3 + c*d3*p3*p3 + b*d3*p3*p3 - b*c*d3*p3 -p3*p3*p3*p3;
	var a3 = MATH.PI(k3,0.5);
	if (x == "" || y =="" || z==""||a==""||b==""||c=="") {
        alert("All Sides must be filled out");
        return false;
     }
	document.getElementById("area").style.visibility='visible';
	document.getElementById("per").style.visibility='visible';
	document.getElementById("area1").style.visibility='visible';
	document.getElementById("per1").style.visibility='visible';
	document.getElementById("area1").innerHTML = 1*k1 + 1*k2 + 1*k3;
	document.getElementById("per1").innerHTML = 1*x+1*y+1*z+1*a+1*b+1*c;
}

