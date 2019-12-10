let answer = 5;
if(answer < 100 ) {
	console.log("answer is less than 100");
}
else if(answer >= 100 && answer < 200) {
	console.log("answer is less than 200 but greater than or equal to 100");
}
else if(answer >= 200 && answer < 300) {
	console.log(" answer is less than 300 but greater than 200");
}
else {
	console.log("thats a BIG number!");
}

function checkQuiz() {
	let Question1 = document.getElementsByName("Question1");
	let Question2 = document.getElementsByName("Question2");
	let Question3 = document.getElementsByName("Question3");
	let Question4 = document.getElementsByName("Question4");

	let percentCorrect = 0;
	let numberCorrect = 0;


	for (let i = 0; i < Question1.length; i++) {
		if (Question1[i].checked && Question1[i].value =="2") {
		percentCorrect = percentCorrect + 25;
		numberCorrect = numberCorrect + 1;
		break;
	}
}

	for (let i = 0; i < Question2.length; i++) {
		if (Question2[i].checked && Question2[i].value =="1") {
		percentCorrect = percentCorrect + 25;
		numberCorrect = numberCorrect + 1;
		break;
	}
}

	for (let i = 0; i < Question3.length; i++) {
		if (Question3[i].checked && Question3[i].value =="4") {
		percentCorrect = percentCorrect + 25;
		numberCorrect = numberCorrect + 1;
		break;
	}
}

	for (let i = 0; i < Question4.length; i++) {
		if (Question4[i].checked && Question4[i].value =="3") {
		percentCorrect = percentCorrect + 25;
		numberCorrect = numberCorrect + 1;
		break;
	}
}


	alert(percentCorrect + " " + numberCorrect);
}