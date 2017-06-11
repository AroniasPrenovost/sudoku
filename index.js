      document.getElementById('myBtn1').onclick = function() {
        document.getElementById("myForm").reset();
        $("input").prop('readonly', false);
        document.getElementById("inp4").value = "5";
        document.getElementById('inp4').readOnly = true;
        document.getElementById("inp6").value = "8";
        document.getElementById('inp6').readOnly = true;
        document.getElementById("inp32").value = "8";
        document.getElementById('inp32').readOnly = true;
        document.getElementById("inp39").value = "8";
        document.getElementById('inp39').readOnly = true;
        document.getElementById("inp71").value = "8";
        document.getElementById('inp71').readOnly = true;
        document.getElementById("inp59").value = "8";
        document.getElementById('inp59').readOnly = true;
      }
      document.getElementById('myBtn2').onclick = function() {
          document.getElementById("myForm").reset();
          $("input").prop('readonly', false);
        document.getElementById("inp1").value = "5";
        document.getElementById('inp1').readOnly = true;
        document.getElementById("inp8").value = "8";
        document.getElementById('inp8').readOnly = true;
        document.getElementById("inp70").value = "8";
        document.getElementById('inp70').readOnly = true;
        document.getElementById("inp23").value = "8";
        document.getElementById('inp23').readOnly = true;
        document.getElementById("inp41").value = "8";
        document.getElementById('inp41').readOnly = true;
        document.getElementById("inp39").value = "8";
        document.getElementById('inp39').readOnly = true;
      }
        document.getElementById('myBtn3').onclick = function() {
          document.getElementById("myForm").reset();
          $("input").prop('readonly', false);
        document.getElementById("inp2").value = "5";
        document.getElementById('inp2').readOnly = true;
        document.getElementById("inp7").value = "8";
        document.getElementById('inp7').readOnly = true;
        document.getElementById("inp72").value = "8";
        document.getElementById('inp72').readOnly = true;
        document.getElementById("inp54").value = "8";
        document.getElementById('inp54').readOnly = true;
        document.getElementById("inp42").value = "8";
        document.getElementById('inp42').readOnly = true;
        document.getElementById("inp38").value = "9";
        document.getElementById('inp38').readOnly = true;
      }
//-- REQUIREMENTS --// 
// - uniquely ordered arrays
// - must #'s 1-9, no 0's 
function validSolution(board){
// return "false" if the table contains any 0's
var stringboard = board.join("");
var zeroCheck = stringboard.search("0");
if (zeroCheck != -1) {
	return false;
} else {
	board = board;
}
// if there are no 0's, let's turn the data into something more manageable
var arrayVals = [];
for(var i = 0; i < board.length; i++){
	for(var j = 0; j < board[i].length; j++){
		arrayVals.push(board[i][j]);
	}
// remove commas from each string and replace with +'s
var regex = new RegExp(',', 'g');
var row1 = arrayVals.slice(0, 9).toString().replace(regex, '+');
var row2 = arrayVals.slice(9, 18).toString().replace(regex, '+');
var row3 = arrayVals.slice(18, 27).toString().replace(regex, '+');
var row4 = arrayVals.slice(27, 36).toString().replace(regex, '+');
var row5 = arrayVals.slice(36, 45).toString().replace(regex, '+');
var row6 = arrayVals.slice(45, 54).toString().replace(regex, '+');
var row7 = arrayVals.slice(54, 63).toString().replace(regex, '+');
var row8 = arrayVals.slice(63, 72).toString().replace(regex, '+');
var row9 = arrayVals.slice(72, 81).toString().replace(regex, '+');
} // end for loop
// evaluate the expression. numbers 1-9 will = 45
var rows = [eval(row1), eval(row2), eval(row3), eval(row4), eval(row5), eval(row6), eval(row7), eval(row8), eval(row9)];
var wrong = [];
var right = [];
for(var i = 0; i < rows.length; i++){
	if(rows[i] != 45) {
		return false;
	} else {
		right.push(rows[i]);
	}
} // end for loop
if (right.length > 8) {
	rows = rows;
} else {
	return false;
}
// check if all arrays are in a different order
var arrS = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
//  return rawRows;
var sorted_arr = arrS.slice().sort();                        
var results = [];
for (var i = 0; i < arrS.length + 1 - 1; i++) {
	if (sorted_arr[i + 1] == sorted_arr[i]) {
		results.push(sorted_arr[i]);
	}
}
if (results.length > 0) {
	return false;
} else {
	arrS = arrS;
}
// if vertical "column" numbers = 9, they are also uniquely ordered!
var vertOne = (eval(row1.charAt(0) + "+" + row2.charAt(0) + "+" + row3.charAt(0) + "+" + row4.charAt(0) + "+" + row5.charAt(0) + "+" + row6.charAt(0) + "+" + row7.charAt(0) + "+" + row8.charAt(0) + "+" + row9.charAt(0)));
var vertTwo = (eval(row1.charAt(2) + "+" + row2.charAt(2) + "+" + row3.charAt(2) + "+" + row4.charAt(2) + "+" + row5.charAt(2) + "+" + row6.charAt(2) + "+" + row7.charAt(2) + "+" + row8.charAt(2) + "+" + row9.charAt(2)));
var vertThree = (eval(row1.charAt(4) + "+" + row2.charAt(4) + "+" + row3.charAt(4) + "+" + row4.charAt(4) + "+" + row5.charAt(4) + "+" + row6.charAt(4) + "+" + row7.charAt(4) + "+" + row8.charAt(4) + "+" + row9.charAt(4)));
var vertFour = (eval(row1.charAt(6) + "+" + row2.charAt(6) + "+" + row3.charAt(6) + "+" + row4.charAt(6) + "+" + row5.charAt(6) + "+" + row6.charAt(6) + "+" + row7.charAt(6) + "+" + row8.charAt(6) + "+" + row9.charAt(6)));
var vertFive = (eval(row1.charAt(8) + "+" + row2.charAt(8) + "+" + row3.charAt(8) + "+" + row4.charAt(8) + "+" + row5.charAt(8) + "+" + row6.charAt(8) + "+" + row7.charAt(8) + "+" + row8.charAt(8) + "+" + row9.charAt(8)));
var vertSix = (eval(row1.charAt(10) + "+" + row2.charAt(10) + "+" + row3.charAt(10) + "+" + row4.charAt(10) + "+" + row5.charAt(10) + "+" + row6.charAt(10) + "+" + row7.charAt(10) + "+" + row8.charAt(10) + "+" + row9.charAt(10)));
var vertSeven = (eval(row1.charAt(12) + "+" + row2.charAt(12) + "+" + row3.charAt(12) + "+" + row4.charAt(12) + "+" + row5.charAt(12) + "+" + row6.charAt(12) + "+" + row7.charAt(12) + "+" + row8.charAt(12) + "+" + row9.charAt(12)));
var vertEight = (eval(row1.charAt(14) + "+" + row2.charAt(14) + "+" + row3.charAt(14) + "+" + row4.charAt(14) + "+" + row5.charAt(14) + "+" + row6.charAt(14) + "+" + row7.charAt(14) + "+" + row8.charAt(14) + "+" + row9.charAt(14)));
var vertNine = (eval(row1.charAt(16) + "+" + row2.charAt(16) + "+" + row3.charAt(16) + "+" + row4.charAt(16) + "+" + row5.charAt(16) + "+" + row6.charAt(16) + "+" + row7.charAt(16) + "+" + row8.charAt(16) + "+" + row9.charAt(16)));
var vertRow = vertOne + " " + vertTwo + " " + vertThree + " " + vertFour + " " + vertFive + " " + vertSix + " " + vertSeven + " " + vertEight + " " + vertNine;
// convert vertRow to an array of integers
var change = vertRow.split(" ");
var vertRowIntegers = [];
var result = change.map(function (z) { 
	vertRowIntegers.push(parseInt(z, 10)); 
});
// finally, evaluate the expression. numbers 1-9 will = 45
for(var i = 0; i < vertRowIntegers.length; i++){
	if(vertRowIntegers[i] != 45) {
		return false;
	} else {
		return true
		}	
	}
}
document.getElementById('myBtn').onclick = function(){
	var inp1 = Number(document.getElementById('inp1').value);
	var inp2 = Number(document.getElementById('inp2').value);
	var inp3 = Number(document.getElementById('inp3').value);
	var inp4 = Number(document.getElementById('inp4').value);
	var inp5 = Number(document.getElementById('inp5').value);
	var inp6 = Number(document.getElementById('inp6').value);
	var inp7 = Number(document.getElementById('inp7').value);
	var inp8 = Number(document.getElementById('inp8').value);
	var inp9 = Number(document.getElementById('inp9').value);
	var inp10 = Number(document.getElementById('inp10').value);
	var inp11 = Number(document.getElementById('inp11').value);
	var inp12 = Number(document.getElementById('inp12').value);
	var inp13 = Number(document.getElementById('inp13').value);
	var inp14 = Number(document.getElementById('inp14').value);
	var inp15 = Number(document.getElementById('inp15').value);
	var inp16 = Number(document.getElementById('inp16').value);
	var inp17 = Number(document.getElementById('inp17').value);
	var inp18 = Number(document.getElementById('inp18').value);
	var inp19 = Number(document.getElementById('inp19').value);
	var inp20 = Number(document.getElementById('inp20').value);
	var inp21 = Number(document.getElementById('inp21').value);
	var inp22 = Number(document.getElementById('inp22').value);
	var inp23 = Number(document.getElementById('inp23').value);
	var inp24 = Number(document.getElementById('inp24').value);
	var inp25 = Number(document.getElementById('inp25').value);
	var inp26 = Number(document.getElementById('inp26').value);
	var inp27 = Number(document.getElementById('inp27').value);
	var inp28 = Number(document.getElementById('inp28').value);
	var inp29 = Number(document.getElementById('inp29').value);
	var inp30 = Number(document.getElementById('inp30').value);
	var inp31 = Number(document.getElementById('inp31').value);
	var inp32 = Number(document.getElementById('inp32').value);
	var inp33 = Number(document.getElementById('inp33').value);
	var inp34 = Number(document.getElementById('inp34').value);
	var inp35 = Number(document.getElementById('inp35').value);
	var inp36 = Number(document.getElementById('inp36').value);
	var inp37 = Number(document.getElementById('inp37').value);
	var inp38 = Number(document.getElementById('inp38').value);
	var inp39 = Number(document.getElementById('inp39').value);
	var inp40 = Number(document.getElementById('inp40').value);
	var inp41 = Number(document.getElementById('inp41').value);
	var inp42 = Number(document.getElementById('inp42').value);
	var inp43 = Number(document.getElementById('inp43').value);
	var inp44 = Number(document.getElementById('inp44').value);
	var inp45 = Number(document.getElementById('inp45').value);
	var inp46 = Number(document.getElementById('inp46').value);
	var inp47 = Number(document.getElementById('inp47').value);
	var inp48 = Number(document.getElementById('inp48').value);
	var inp49 = Number(document.getElementById('inp49').value);
	var inp50 = Number(document.getElementById('inp50').value);
	var inp51 = Number(document.getElementById('inp51').value);
	var inp52 = Number(document.getElementById('inp52').value);
	var inp53 = Number(document.getElementById('inp53').value);
	var inp54 = Number(document.getElementById('inp54').value);
	var inp55 = Number(document.getElementById('inp55').value);
	var inp56 = Number(document.getElementById('inp56').value);
	var inp57 = Number(document.getElementById('inp57').value);
	var inp58 = Number(document.getElementById('inp58').value);
	var inp59 = Number(document.getElementById('inp59').value);
	var inp60 = Number(document.getElementById('inp60').value);
	var inp61 = Number(document.getElementById('inp61').value);
	var inp62 = Number(document.getElementById('inp62').value);
	var inp63 = Number(document.getElementById('inp63').value);
	var inp64 = Number(document.getElementById('inp64').value);
	var inp65 = Number(document.getElementById('inp65').value);
	var inp66 = Number(document.getElementById('inp66').value);
	var inp67 = Number(document.getElementById('inp67').value);
	var inp68 = Number(document.getElementById('inp68').value);
	var inp69 = Number(document.getElementById('inp69').value);
	var inp70 = Number(document.getElementById('inp70').value);
	var inp71 = Number(document.getElementById('inp71').value);
	var inp72 = Number(document.getElementById('inp72').value);
	var inp73 = Number(document.getElementById('inp73').value);
	var inp74 = Number(document.getElementById('inp74').value);
	var inp75 = Number(document.getElementById('inp75').value);
	var inp76 = Number(document.getElementById('inp76').value);
	var inp77 = Number(document.getElementById('inp77').value);
	var inp78 = Number(document.getElementById('inp78').value);
	var inp79 = Number(document.getElementById('inp79').value);
	var inp80 = Number(document.getElementById('inp80').value);
	var inp81 = Number(document.getElementById('inp81').value);

	var solution = [[inp1,inp2,inp3,inp4,inp5,inp6,inp7,inp8,inp9],
	[inp10,inp11,inp12,inp13,inp14,inp15,inp16,inp17,inp18],
	[inp19,inp20,inp21,inp22,inp23,inp24,inp25,inp26,inp27],
	[inp28,inp29,inp30,inp31,inp32,inp33,inp34,inp35,inp36],
	[inp37,inp38,inp39,inp40,inp41,inp42,inp43,inp44,inp45],
	[inp46,inp47,inp48,inp49,inp50,inp51,inp52,inp53,inp54],
	[inp55,inp56,inp57,inp58,inp59,inp60,inp61,inp62,inp63],
	[inp64,inp65,inp66,inp67,inp68,inp69,inp70,inp71,inp72],
	[inp73,inp74,inp75,inp76,inp77,inp78,inp79,inp80,inp81]
	]
	alert(validSolution(solution)); 
}