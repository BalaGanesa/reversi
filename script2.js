var main_div = document.getElementById("parent");
main_div.style = "display:flex;flex-wrap:wrap;width:800px;height:800px;margin:auto;margin-top:7%;position:relative;box-shadow: 20px green;";
var turnDiv = document.getElementById("turnDiv");
var row = 8;
var column = 8;
var turn = "White";
var turnopp = "Black";
var turnCheck=0;
var con = true;
var arr = [];
var count = 0;
var check=0;
var id;
var array=[];
var array1=[];
var ba,ac,bc, ad,bd,ae,be,changeturn,ab;
var WhiteCount1 = document.getElementById("Whitecount");
var BlackCount1 = document.getElementById("Blackcount");
for (let i = 1; i <=row; i++) {
	for (let j = 0; j < column; j++) {
		let small_box = document.createElement("div");
		small_box.setAttribute("id", i.toString() + j.toString())
		if (i % 2 == 0) {
			small_box.setAttribute("class", "child count");
		} 
		else {
			small_box.setAttribute("class", "child1 count");
		}
		small_box.style = "width:100px;height:100px;";
		main_div.appendChild(small_box);
		
    	small_box.addEventListener("click", function() {
			// this if condition check the bottom row;
				  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					  ab = parseInt(this.id);
					  let bottomid = ab + 10;
					  if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp)) {
						  while (con) {
							  ab = parseInt(this.id);
							  arr.push(bottomid);
							  bottomid = bottomid + 10;
							//   bottomid = bottomid.toString();
							  if ((document.getElementById(bottomid)== null)||(document.getElementById(bottomid).innerHTML == '')||document.getElementById(bottomid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } else if (document.getElementById(bottomid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					changeturn = "true";
							  }
						  }
						  con = true;
						  arr = [];
					  }
				  }
	  
	  
	  
			  // this if condition check the top row;
				  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					  ba = parseInt(this.id);
					  let topid = ba - 10;
					  if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp)) {
						  while (con) {
							  ba = parseInt(this.id);
							  arr.push(topid);
							  topid = topid - 10;
							//   topid = topid.toString();
							  if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')||document.getElementById(topid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } else if (document.getElementById(topid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
							  }
						  }
						  con = true;
						  arr = []; 
					  }
				  }
	  
	  
	  
			  // this if condition check the right row;
			  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					  bc = parseInt(this.id);
					  let rightid = (bc + 1);
					  if (document.getElementById(rightid) == null || document.getElementById(rightid).innerHTML.includes(turnopp)) {
						  while (con) {
							  bc = parseInt(this.id);
							  arr.push(rightid);
					  
							  rightid = rightid + 1;
				  
							//   rightid = rightid.toString();
							  if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')||document.getElementById(rightid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } else if (document.getElementById(rightid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
							  }
						  }
						  con = true;
						  arr = [];
					  }
				  }
	  
	  
	  
			  // this if condition check the left row;
			  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')){
					  ac = parseInt(this.id);
					  let leftid = ac - 1;
					  if (document.getElementById(leftid) == null || document.getElementById(leftid).innerHTML.includes(turnopp)) {
						  while (con) {
							  ac = parseInt(this.id);
							  arr.push(leftid);
							  leftid = leftid - 1;
							//   leftid = leftid.toString();
							  if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')||document.getElementById(leftid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } else if (document.getElementById(leftid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";    
							  }
						  }
						  con = true;
						  arr = [];
					  }
				  }


	  
				  // this if condition check the diagonal row;
				  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')){
					  ad = parseInt(this.id);
					  let lefttopid = ad + 9;
					  if (document.getElementById(lefttopid) == null || document.getElementById(lefttopid).innerHTML.includes(turnopp)) {
						  while (con) {
							  ad = parseInt(this.id);
							  arr.push(lefttopid);
							  lefttopid = lefttopid + 9;
							//   lefttopid = lefttopid.toString();
							  if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')||document.getElementById(lefttopid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } else if (document.getElementById(lefttopid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
							  } 
						  }
						  con = true;
						  arr = [];
					  }
				  }
	  
	  
				  // this if condition check the diagonal row;
			   if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					   bd = parseInt(this.id);
					  let leftbottomid = bd + 11;
					  if (document.getElementById(leftbottomid) == null || document.getElementById(leftbottomid).innerHTML.includes(turnopp)) {
						  while (con) {
							  bd = parseInt(this.id);
							  arr.push(leftbottomid);
							  leftbottomid = leftbottomid + 11;
							//   leftbottomid = leftbottomid.toString();
							  if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')||document.getElementById(leftbottomid).innerHTML==("trnasparent-removebg-preview.png")) {
								  con = false;
							  } 
							  else if (document.getElementById(leftbottomid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
										  }
						  }
						  con = true;
						  arr = [];
					  }
				  }
	  
	  

				  // this if condition check the diagonal row;
				  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					  ae = parseInt(this.id);
					  let rightbottomid = ae - 9;
					  if (document.getElementById(rightbottomid) == null || document.getElementById(rightbottomid).innerHTML.includes(turnopp)) {
						  while (con) {
							  ae = parseInt(this.id);
							  arr.push(rightbottomid);
							  rightbottomid = rightbottomid - 9;
							//   rightbottomid = rightbottomid.toString();
							  if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML =='')||document.getElementById(rightbottomid).innerHTML==("trnasparent-removebg-preview.png")){
								  con = false;
							  } else if (document.getElementById(rightbottomid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
							  }
						  }
						  con = true;
						  arr = [];
					  }
				  }



				  if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
					  be = parseInt(this.id);
					  let righttopid = ae - 11;
					  if (document.getElementById(righttopid) == null || document.getElementById(righttopid).innerHTML.includes(turnopp)) {
						  while (con) {
							  be = parseInt(this.id);
							  arr.push(righttopid);
							  righttopid = righttopid - 11;
							//   righttopid = righttopid.toString();
					  if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '')||document.getElementById(righttopid).innerHTML==("trnasparent-removebg-preview.png")){
								  con = false;
							  }
					   else if (document.getElementById(righttopid).innerHTML.includes(turn)) {
								  con = false;
								  change();
					 changeturn = "true";
							  }
						  }
						  con = true;
						  arr = [];
					  }
				  }
			if(changeturn == "true"){
			  AvailableDragRemove();
			 click(this);
			  }
			changeturn="false";
			Winning();
			Pass();
		  
			  })
		  }
	  }
		
function AvailableMoves(){
	
	 for(let i=1;i<=row;i++){
		for(let j=0;j<column;j++){
		
			
			var available = document.getElementById(i.toString() + j.toString());
	
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				
				ab = parseInt(available.id);
				
				let bottomid = ab + 10;
		
				if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp) ) {
					while (con) {
						ab = parseInt(available.id);
						
						bottomid = bottomid + 10;
						// bottomid = bottomid.toString();
						if ((document.getElementById(bottomid) == null)||(document.getElementById(bottomid).innerHTML == '')) {
							con = false;
						}
						 else if (document.getElementById(bottomid).innerHTML.includes(turn)) {
							con = false;
							array.push(ab);

						}
					}
					con = true;
				
				}
			}
		// console.log("a");
		 	// this if condition check the top row;
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				ba = parseInt(available.id);
				let topid = ba - 10;
				if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp) ) {
					while (con) {
						ba = parseInt(available.id);
						topid = topid - 10;
						// topid = topid.toString();
						if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')){
							con = false;
						}
						 else if (document.getElementById(topid).innerHTML.includes(turn)) {
							con = false;
							array.push(ba);
							
               
						}
					}
					con = true;
					
				}
			}
        // available if condition check the right row;
		if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				bc = parseInt(available.id);
				let rightid = (bc + 1);
				if (document.getElementById(rightid) == null || document.getElementById(rightid).innerHTML.includes(turnopp)) {
					while (con) {
						bc = parseInt(available.id);
						rightid = rightid + 1;
						// rightid = rightid.toString();
								if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')){
							con = false;
						}
						 else if (document.getElementById(rightid).innerHTML.includes(turn)) {
							con = false;
							array.push(bc);
							
						}
					}
					con = true;
					
				}
			}
        // available if condition check the top row;
		if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')){
				 
				ac = parseInt(available.id);
				let leftid = ac - 1;
				if (document.getElementById(leftid) == null || document.getElementById(leftid).innerHTML.includes(turnopp) ) {
					while (con) {
						ac = parseInt(available.id);
						
						leftid = leftid - 1;
						// leftid = leftid.toString();
						if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')) {
							con = false;
						}
						 else if (document.getElementById(leftid).innerHTML.includes(turn)) {
							con = false;
							array.push(ac);
							  
						}
					}
					con = true;
					
				}
			}
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')){
				ad = parseInt(available.id);
				let lefttopid = ad + 9;
				if (document.getElementById(lefttopid) == null || document.getElementById(lefttopid).innerHTML.includes(turnopp)) {
					while (con) {
						ad = parseInt(available.id);
						
						lefttopid = lefttopid + 9;
						// lefttopid = lefttopid.toString();
						if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')) {
							con = false;
						}
						 else if (document.getElementById(lefttopid).innerHTML.includes(turn)) {
							con = false;
							array.push(ad);
						
						}
					}
					con = true;
					
				}
			}
	     if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				 bd = parseInt(available.id);
				let leftbottomid = bd + 11;
				if (document.getElementById(leftbottomid) == null || document.getElementById(leftbottomid).innerHTML.includes(turnopp)) {
					while (con) {
						bd = parseInt(available.id);
						
						leftbottomid = leftbottomid + 11;
						// leftbottomid = leftbottomid.toString();
						if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')) {
							con = false;
						}
						 else if (document.getElementById(leftbottomid).innerHTML.includes(turn)) {
							con = false;
							array.push(bd);
							
									}
					}
					con = true;
				}
			}
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				ae = parseInt(available.id);
				let rightbottomid = ae - 9;
				if (document.getElementById(rightbottomid) == null || document.getElementById(rightbottomid).innerHTML.includes(turnopp) ) {
					while (con) {
						ae = parseInt(available.id);
						rightbottomid = rightbottomid - 9;
						// rightbottomid = rightbottomid.toString();
						if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML == '')){
							con = false;
						}
						 else if (document.getElementById(rightbottomid).innerHTML.includes(turn)) {
							con = false;
							array.push(ae);
						}
					}
					con = true;		
			}
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				be = parseInt(available.id);
				let righttopid = ae - 11;
				if (document.getElementById(righttopid) == null || document.getElementById(righttopid).innerHTML.includes(turnopp)) {
					while (con) {
						be = parseInt(available.id);
						righttopid = righttopid - 11;
						// righttopid = righttopid.toString();
						if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '' )){
							con = false;
						} 
						else if (document.getElementById(righttopid).innerHTML.includes(turn)) {
							con = false;
							array.push(be);
						}
					}
					con = true;
				}
		}
 	}

 }
AvailableDrag();
}
}
function click(a) {

	switch (turn) {
		case "White":
			var image = document.createElement("img");
			image.setAttribute("src", "White.png");
			image.setAttribute("class", "reversii");
			a.appendChild(image);
			turn = "Black";
      turnopp = "White";
		break;
		
		case "Black":
			var image1 = document.createElement("img");
			image1.setAttribute("src", "Black.png");
			image1.setAttribute("class", "reversii");
			a.appendChild(image1);
			turn = "White";
      turnopp = "Black";

			break;
  }
  AvailableMoves();
if((turn=="Black")&&((BlackCount+WhiteCount)<=64)){
 setTimeout(()=>onePlayer(),800);
}
  BlackCountCheck();
  WhiteCountCheck();
  arr = [];
}
// var change = [];
function change() {
	arr=[...new Set(arr)];
    for (let i = 0; i < arr.length; i++) {
		document.getElementById(arr[i]).children[0].setAttribute("src", turn + ".png");
	}
	arr=[];
}
var image = document.createElement("img");
image.setAttribute("src", "White.png");
image.setAttribute("class", "reversii");
var a28 = document.getElementById("43");
a28.appendChild(image);
var image = document.createElement("img");
image.setAttribute("src", "White.png");
image.setAttribute("class", "reversii");
var a37 = document.getElementById("54");
a37.appendChild(image);
var image1 = document.createElement("img");
image1.setAttribute("src", "Black.png");
image1.setAttribute("class", "reversii");
var a29 = document.getElementById("44");
a29.appendChild(image1);
var image1 = document.createElement("img");
image1.setAttribute("src", "Black.png");
image1.setAttribute("class", "reversii");
var a36 = document.getElementById("53");
a36.appendChild(image1);
var BlackCount=0;
function BlackCountCheck(){
 BlackCount=0;
// console.log("black");
  let a = document.querySelectorAll(".count");
  for(i=0;i<a.length;i++){
    if(document.getElementsByClassName("count")[i].innerHTML.includes("Black.png"))
    BlackCount+=1;
  }
BlackCount1.innerText=BlackCount;
}
var WhiteCount=0;
function WhiteCountCheck(){
	WhiteCount=0;
  let a = document.querySelectorAll(".count");
  for(i=0;i<a.length;i++){
    if(document.getElementsByClassName("count")[i].innerHTML.includes("White.png"))
   WhiteCount+=1;
  }
  WhiteCount1.innerText=WhiteCount;
}
function AvailableDrag(){

if(turn=="white"){
	return turncheck()

}

	array=[...new Set(array)];
	for (let i = 0; i < array.length; i++) {
		var a = document.getElementById(array[i]);
		var image1 = document.createElement("img");
			image1.setAttribute("src", "circle-removebg-preview.png");
			image1.setAttribute("class", "count");
			a.appendChild(image1);
	}
}
function AvailableDragRemove(){
	for (let i = 0; i < array.length; i++) {
		var a = document.getElementById(array[i]);
		a.innerHTML="";
	}
	array=[];
	turncheck();
}
function Winning(){
	if((BlackCount+WhiteCount==64)||(BlackCount==0)||(WhiteCount==0)){
		console.log(BlackCount);
		console.log(WhiteCount);
		console.log("varuthu");
		if((WhiteCount>BlackCount)){
		var whiteDIv = document.createElement("div");
		var a = document.createElement('a');
		whiteDIv.setAttribute("id","whitewin");
		whiteDIv.setAttribute("class","winWhite");
		whiteDIv.innerText="White Win";
		document.body.appendChild(a);
      a.href = "index2.html";
      a.appendChild(whiteDIv);
		}
		else if((BlackCount>WhiteCount)){
			var blackDIv = document.createElement("div");
			var a = document.createElement('a');
			blackDIv.setAttribute("id","blackwin");
			blackDIv.setAttribute("class","WinWhite");
			blackDIv.innerText="Black Win";
			document.body.appendChild(a);	
      a.href = "index2.html";
      a.appendChild(blackDIv);
	}
	else if((WhiteCount>30)&&(BlackCount>30)&&(BlackCount==WhiteCount)){
		console.log("varuthu");
		var drawDIv = document.createElement("div");
		var a = document.createElement('a');
		drawDIv.setAttribute("id","draw");
		drawDIv.setAttribute("class","WinWhite");
		drawDIv.innerText="Draw";
		document.body.appendChild(a);	
			  a.href = "index2.html";
			a.appendChild(drawDIv);
		   }
		}
	
		}	
			let element=document.getElementById("turnDiv");
function Pass(){
	console.log("Akash");
	if((!(BlackCount+WhiteCount==0))&&(array.length==0)&&((WhiteCount+BlackCount<=63))){
		console.log("Pas");
			
		setTimeout(()=>alert("PASS !"),200)
		console.log("pass");
		turnCheck=2;
		var tempturn=turn;
		// turn=turnopp
		turnopp=tempturn;
		console.log(turn);
			AvailableMoves();
		console.log(turn);
	
		element.innerText= turn+" turn";
	}
}
element.innerText= turnopp+" turn";
function turncheck(){
	(turnCheck==0)?(turn = "White",turnDiv.innerText=turnopp+" turn",turnCheck=1) : (turn = "Black",turnDiv.innerText=turnopp+" turn",turnCheck=0);
	if(turnCheck==2){
		if(turn=="white"){
			turnCheck = 0;
		}
		else{
			turnCheck=1;
		}
		if(turn=="Black"){
			turnCheck = 1;
		}
		else{
			turnCheck=0;
		}
		turnDiv.innerText=turnopp+ " turn";
	}
}

function onePlayer(){
	var count1 = 0;
    AvailableMoves();
	// console.log(array3);
	var array3 = [10,17,80,87];
if(array.includes(array3[0])){
	console.log(array3[0]);
	pcClick(array3[0]);

}
else if(array.includes(array3[1])){
	console.log(array3[1]);
	pcClick(array3[1]);
}
else if(array.includes(array3[2])){
	console.log(array3[2]);
	pcClick(array3[2]);
}
else if(array.includes(array3[3])){
	console.log(array3[3]);
	pcClick(array3[3]);
}
 
   else{
    for(let i=0;i<array.length;i++){
        if (!(document.getElementById((array[i].toString())).innerHTML.includes('White.png')) && !(document.getElementById((array[i].toString())).innerHTML.includes('Black.png'))) {

			ab = parseInt(array[i]);
			let bottomid = ab + 10;
			if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp) ) {

				while (con) {
					ab = parseInt(array[i]);
					count1++;
					bottomid = bottomid + 10;
					// bottomid = bottomid.toString();
					if ((document.getElementById(bottomid)== null)||(document.getElementById(bottomid).innerHTML == '')||document.getElementById(bottomid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} 
					else if (document.getElementById(bottomid).innerHTML.includes(turn)) {
						con = false;
				        count = count1+count;
					}
				}
				con = true;	
				count1=0;		
		}
	}
		if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !(document.getElementById(array[i].toString())).innerHTML.includes('Black.png')) {
			ba = parseInt(array[i]);
			let topid = ba - 10;
			if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp) ) {
				while (con) {
					
					ba = parseInt(array[i]);
					count1++;
					topid = topid - 10;
					// topid = topid.toString();
					if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')||document.getElementById(topid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} else if (document.getElementById(topid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
					}
				}
				con = true;
				count1=0;
			}
		}
		if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			bc = parseInt(array[i]);
			let rightid = (bc + 1);
			if (document.getElementById(rightid) == null || document.getElementById(rightid).innerHTML.includes(turnopp)) {
				while (con) {
					bc = parseInt(array[i]);
				
			count1++;
					rightid = rightid + 1;
					// rightid = rightid.toString();

					if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')||document.getElementById(rightid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} else if (document.getElementById(rightid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
				}
				}
				con = true;
				count1=0;
			}
		}
		// this if condition check the left row;
		if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			ac = parseInt(array[i]);
			let leftid = ac - 1;
			if (document.getElementById(leftid) == null || document.getElementById(leftid).innerHTML.includes(turnopp) ) {
				while (con) {
					ac = parseInt(array[i]);
					count1++;
					leftid = leftid - 1;
					// leftid = leftid.toString();
					if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')||document.getElementById(leftid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} else if (document.getElementById(leftid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
					}
				}
				con = true;
				count1=0;
			}
		}
		// this if condition check the diagonal row;
		if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			ad = parseInt(array[i]);
			let lefttopid = ad + 9;
			if (document.getElementById(lefttopid) == null || document.getElementById(lefttopid).innerHTML.includes(turnopp)) {
				while (con) {
					ad = parseInt(array[i]);
					count1++;
					lefttopid = lefttopid + 9;
					// lefttopid = lefttopid.toString();
					if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')||document.getElementById(lefttopid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} else if (document.getElementById(lefttopid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
					}
				}
				con = true;
				count1=0;
			}
		}
		// this if condition check the diagonal row;
		if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			 bd = parseInt(array[i]);
			let leftbottomid = bd + 11;
			if (document.getElementById(leftbottomid) == null || document.getElementById(leftbottomid).innerHTML.includes(turnopp)) {
				while (con) {
					bd = parseInt(array[i]);
					arr.push(leftbottomid);
					count1++;
					leftbottomid = leftbottomid + 11;
					// leftbottomid = leftbottomid.toString();
					if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')||document.getElementById(leftbottomid).innerHTML==("trnasparent-removebg-preview.png")) {
						con = false;
					} 
					else if (document.getElementById(leftbottomid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
								}
				}
				con = true;
				count1=0;
			}
		}
		// this if condition check the diagonal row;
			if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			ae = parseInt(array[i]);
			let rightbottomid = ae - 9;
			if (document.getElementById(rightbottomid) == null || document.getElementById(rightbottomid).innerHTML.includes(turnopp) ) {
				while (con) {
					ae = parseInt(array[i]);
					count1++;
					rightbottomid = rightbottomid - 9;
					// rightbottomid = rightbottomid.toString();
					if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML =='')||document.getElementById(rightbottomid).innerHTML==("trnasparent-removebg-preview.png")){
						con = false;
					} else if (document.getElementById(rightbottomid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;

					}
				}
				con = true;
				count1=0;
			}
		}
				if (!document.getElementById((array[i].toString())).innerHTML.includes('White.png') && !document.getElementById((array[i].toString())).innerHTML.includes('Black.png')) {
			be = parseInt(array[i]);
			let righttopid = ae - 11;
			if (document.getElementById(righttopid) == null || document.getElementById(righttopid).innerHTML.includes(turnopp)) {
				while (con) {
					be = parseInt(array[i]);

					count1++;
					righttopid = righttopid - 11;
					// righttopid = righttopid.toString();
			if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '')||document.getElementById(righttopid).innerHTML==("trnasparent-removebg-preview.png")){
						con = false;
					}
			 else if (document.getElementById(righttopid).innerHTML.includes(turn)) {
						con = false;
						count = count1+count;
					}
				}
				con = true;
				count1=0;
			}
		} 
		if(check<count){
			check=count;
			id = array[i];
			
		}
		count = 0;
        }
		check=0;
		pcClick(id);
	}

}


function pcClick(a){
	// this if condition check the bottom row;
arr=[];
	let id = document.getElementById(a);

		  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			  
			  ab = parseInt(id.id);
			  let bottomid = ab + 10;
			  if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp) ) {
				  while (con) {
					  ab = parseInt(id.id);
					  arr.push(bottomid);
					  bottomid = bottomid + 10;  
					//   bottomid = bottomid.toString();
					  if ((document.getElementById(bottomid)== null)||(document.getElementById(bottomid).innerHTML == '')||document.getElementById(bottomid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } else if (document.getElementById(bottomid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }



	  // id if condition check the top row;
		  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			  ba = parseInt(id.id);
			  let topid = ba - 10;
			  if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp) ) {
				  while (con) {
					  ba = parseInt(id.id);
					  arr.push(topid);
					  topid = topid - 10;
					//   topid = topid.toString();
					  if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')||document.getElementById(topid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } else if (document.getElementById(topid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }



	  // id if condition check the right row;
	  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			  bc = parseInt(id.id);
			  let rightid = (bc + 1);
			  if (document.getElementById(rightid) == null || document.getElementById(rightid).innerHTML.includes(turnopp)) {
				  while (con) {
					  bc = parseInt(id.id);
					  arr.push(rightid);
					  rightid = rightid + 1;
		  
					//   rightid = rightid.toString();
					  if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')||document.getElementById(rightid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } else if (document.getElementById(rightid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }



	  // id if condition check the left row;
	  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')){
			  ac = parseInt(id.id);
			  let leftid = ac - 1;
			  if (document.getElementById(leftid) == null || document.getElementById(leftid).innerHTML.includes(turnopp) ) {
				  while (con) {
					  ac = parseInt(id.id);
					  arr.push(leftid);
					  leftid = leftid - 1;
					//   leftid = leftid.toString();
					  if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')||document.getElementById(leftid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } else if (document.getElementById(leftid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";    
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }

		  // id if condition check the diagonal row;
		  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')){
			  ad = parseInt(id.id);
			  let lefttopid = ad + 9;
			  if (document.getElementById(lefttopid) == null || document.getElementById(lefttopid).innerHTML.includes(turnopp)) {
				  while (con) {
					  ad = parseInt(id.id);
					  arr.push(lefttopid);
					  lefttopid = lefttopid + 9;
					//   lefttopid = lefttopid.toString();
					  if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')||document.getElementById(lefttopid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } else if (document.getElementById(lefttopid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }


		  // id if condition check the diagonal row;
	   if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			   bd = parseInt(id.id);
			  let leftbottomid = bd + 11;
			  if (document.getElementById(leftbottomid) == null || document.getElementById(leftbottomid).innerHTML.includes(turnopp)) {
				  while (con) {
					  bd = parseInt(id.id);
					  arr.push(leftbottomid);
					  leftbottomid = leftbottomid + 11;  
					//   leftbottomid = leftbottomid.toString();
					  if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')||document.getElementById(leftbottomid).innerHTML==("trnasparent-removebg-preview.png")) {
						  con = false;
					  } 
					  else if (document.getElementById(leftbottomid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
								  }
				  }
				  con = true;
				  arr = [];
			  }
		  }
		  // id if condition check the diagonal row;
		  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			  ae = parseInt(id.id);
			  let rightbottomid = ae - 9;
			  if (document.getElementById(rightbottomid) == null || document.getElementById(rightbottomid).innerHTML.includes(turnopp) ) {
				  while (con) {
					  ae = parseInt(id.id);
					  arr.push(rightbottomid);
					  rightbottomid = rightbottomid - 9;
					//   rightbottomid = rightbottomid.toString();
					  if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML =='')||document.getElementById(rightbottomid).innerHTML==("trnasparent-removebg-preview.png")){
						  con = false;
					  } else if (document.getElementById(rightbottomid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }
		  if (!id.innerHTML.includes('White.png') && !id.innerHTML.includes('Black.png')) {
			  be = parseInt(id);
			  let righttopid = ae - 11;
			  if (document.getElementById(righttopid) == null || document.getElementById(righttopid).innerHTML.includes(turnopp)) {
				  while (con) {
					  be = parseInt(id);
					  arr.push(righttopid);
					  righttopid = righttopid - 11;
					//   righttopid = righttopid.toString();
			  if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '')||document.getElementById(righttopid).innerHTML==("trnasparent-removebg-preview.png")){
						  con = false;
					  }
			   else if (document.getElementById(righttopid).innerHTML.includes(turn)) {
						  con = false;
						  change();
			 changeturn = "true";
					  }
				  }
				  con = true;
				  arr = [];
			  }
		  }
	if(changeturn == "true"){
	  AvailableDragRemove();
	 click(id);
	  }
	changeturn="false";
	Winning();
    Pass();
	  }
