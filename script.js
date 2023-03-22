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
var array=[];
var ba,ac,bc, ad,bd,ae,be,changeturn,ab;
var WhiteCount=2;
var BlackCount=2;
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

	  AvailableMoves();
			if (!this.innerHTML.includes('White.png') && !this.innerHTML.includes('Black.png')) {
				
				ab = parseInt(this.id);
				let bottomid = ab + 10;
				if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp) ) {
					while (con) {
						ab = parseInt(this.id);
						arr.push(bottomid);
						bottomid = bottomid + 10;
						if ((document.getElementById(bottomid)== null)||(document.getElementById(bottomid).innerHTML == '')||document.getElementById(bottomid).innerHTML==("circle-removebg-preview.png")) {
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
				if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp) ) {
					while (con) {
						ba = parseInt(this.id);
						arr.push(topid);
						topid = topid - 10;
						if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')||document.getElementById(topid).innerHTML==("circle-removebg-preview.png")) {
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
            

						if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')||document.getElementById(rightid).innerHTML==("circle-removebg-preview.png")) {
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
				if (document.getElementById(leftid) == null || document.getElementById(leftid).innerHTML.includes(turnopp) ) {
					while (con) {
						ac = parseInt(this.id);
						arr.push(leftid);
						leftid = leftid - 1;
						if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')||document.getElementById(leftid).innerHTML==("circle-removebg-preview.png")) {
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
						if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')||document.getElementById(lefttopid).innerHTML==("circle-removebg-preview.png")) {
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
						if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')||document.getElementById(leftbottomid).innerHTML==("circle-removebg-preview.png")) {
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
				if (document.getElementById(rightbottomid) == null || document.getElementById(rightbottomid).innerHTML.includes(turnopp) ) {
					while (con) {
						ae = parseInt(this.id);
						arr.push(rightbottomid);
						rightbottomid = rightbottomid - 9;

						if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML =='')||document.getElementById(rightbottomid).innerHTML==("circle-removebg-preview.png")){
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
		    	if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '')||document.getElementById(righttopid).innerHTML==("circle-removebg-preview.png")){
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
	//    console.log("click");
        }
      changeturn="false";
	 setTimeout(() => { Winning()}, );
      Pass();
	//   console.log("pass");
		})
	}
}
function AvailableMoves(){
	 for(let i=1;i<=row;i++){
		for(let j=0;j<column;j++){
		
			
			var available = document.getElementById(i.toString() + j.toString());
			// console.log(available);
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				
				ab = parseInt(available.id);
				let bottomid = ab + 10;
				if (document.getElementById(bottomid) == null || document.getElementById(bottomid).innerHTML.includes(turnopp) ) {
					while (con) {
						ab = parseInt(available.id);
						
						bottomid = bottomid + 10;
						if ((document.getElementById(bottomid) == null)||(document.getElementById(bottomid).innerHTML == '')) {
							con = false;
						} else if (document.getElementById(bottomid).innerHTML.includes(turn)) {
							con = false;
							array.push(ab);

						}
					}
					con = true;
				}
			}
		
		 	// this if condition check the top row;
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
				ba = parseInt(available.id);
				let topid = ba - 10;
				if (document.getElementById(topid) == null || document.getElementById(topid).innerHTML.includes(turnopp) ) {
					while (con) {
						ba = parseInt(available.id);
						topid = topid - 10;
						if ((document.getElementById(topid)== null)||(document.getElementById(topid).innerHTML == '')){
							con = false;
						} else if (document.getElementById(topid).innerHTML.includes(turn)) {
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
						if ((document.getElementById(rightid)== null)||(document.getElementById(rightid).innerHTML == '')){
							con = false;
						} else if (document.getElementById(rightid).innerHTML.includes(turn)) {
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
						if ((document.getElementById(leftid)== null)||(document.getElementById(leftid).innerHTML == '')) {
							con = false;
						} else if (document.getElementById(leftid).innerHTML.includes(turn)) {
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
						if ((document.getElementById(lefttopid)== null)||(document.getElementById(lefttopid).innerHTML == '')) {
							con = false;
						} else if (document.getElementById(lefttopid).innerHTML.includes(turn)) {
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
						if ((document.getElementById(leftbottomid)== null)||(document.getElementById(leftbottomid).innerHTML == '')) {
							con = false;
						} else if (document.getElementById(leftbottomid).innerHTML.includes(turn)) {
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
						if ((document.getElementById(rightbottomid)== null)||(document.getElementById(rightbottomid).innerHTML == '')){
							con = false;
						} else if (document.getElementById(rightbottomid).innerHTML.includes(turn)) {
							con = false;
							array.push(ae);
						
						}
					}
					con = true;
					
			}
		}
			if (!available.innerHTML.includes('White.png') && !available.innerHTML.includes('Black.png')) {
		
				be = parseInt(available.id);
				let righttopid = ae - 11;
				if (document.getElementById(righttopid) == null || document.getElementById(righttopid).innerHTML.includes(turnopp)) {
					while (con) {
						be = parseInt(available.id);
						
						righttopid = righttopid - 11;
						if ((document.getElementById(righttopid)== null)||(document.getElementById(righttopid).innerHTML == '' )){
							con = false;
						} else if (document.getElementById(righttopid).innerHTML.includes(turn)) {
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

function click(a) {
		// turncheck();
	// console.log(array.length);
	if(array==[]){
		console.log("a");
		var tempturn = turn;
		turn = tempturn;
		tempturn = tempturn;
	}
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
//   turncheck();
  AvailableMoves();
  BlackCountCheck();
  WhiteCountCheck();
  arr = [];
    
}
function change() {
	console.log(arr);
    for (let i = 0; i < arr.length; i++) {
		document.getElementById(arr[i]).children[0].setAttribute("src", turn + ".png"); 
	}
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


function BlackCountCheck(){
  BlackCount=0;
  let a = document.querySelectorAll(".count");
  for(i=0;i<a.length;i++){
    if(document.getElementsByClassName("count")[i].innerHTML.includes("Black.png"))
    BlackCount+=1;
  }
BlackCount1.innerText=BlackCount;
// console.log(BlackCount);
}



function WhiteCountCheck(){
  WhiteCount=0;
  let a = document.querySelectorAll(".count");
  for(i=0;i<a.length;i++){
    if(document.getElementsByClassName("count")[i].innerHTML.includes("White.png"))
   WhiteCount+=1;
  }
  WhiteCount1.innerText=WhiteCount;
//   console.log(WhiteCount);
}



function AvailableDrag(){
	array=[...new Set(array)];
for(let i=0;i<array.length;i++){
	array[i].innerHTML="";
}
	for (let i = 0; i < array.length; i++) {
		// array[i].innerHTML="";
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
		console.log("varuthu");
		if((WhiteCount>BlackCount)){
		var whiteDIv = document.createElement("div");
		var a = document.createElement("a");
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
	else if(BlackCount==WhiteCount){
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
	
	
function Pass(){
	console.log(array.length);
	if((array.length==0)&&((WhiteCount+BlackCount<64))){
		console.log("A");
		let element=document.getElementById("turnDiv");
		element.innerText=turn+" turn";	
		setTimeout(()=>alert("PASS !"),800)
		turnCheck=2;
		var tempturn=turn;
		turn=turnopp
		turnopp=tempturn;

			AvailableMoves();

		console.log(turnCheck);
	}
}

function turncheck(){
	(turnCheck==0)?(turn = "White",turnDiv.innerText=turnopp+" turn",turnCheck=1) :(turnCheck==1)?(turn = "Black",turnDiv.innerText=turnopp+" turn",turnCheck=0):null;
	if(turnCheck==2){
		
		if(turn=="white"){
			turnCheck = 0;
		}
		else{
			turnCheck=1;
		}
		if(turn=="Black"){
			turnCheck = 0;
		}
		else{
			turnCheck=1;
		}
		turnDiv.innerText=turnopp+ " turn";
	}
}
