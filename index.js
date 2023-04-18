
<html>
	<body>
	
	<h1>Welcome to the Quiz</h1>
	
	<button onclick="myFunction()">Please click here for the Questionnaire</button>
	
	<p id="resultID"></p>
	
	<script>
		let actualdl = [];
	function myFunction() {
	let score=0;
		let testarray=[];
	Questions = [{
		quest: "lowId1 - Javascript is an _______ language?",
		options: ["Object-Oriented","Object-Based","Procedural","None"],
		ans:"Object-Oriented",
	    dl:"low",
	    score:0},
		
	  {
		quest: "highId2 - Which of the following keywords is used to define a variable in Javascript?",
		options: ["var","let","both","none"],
		ans: "both",
	    dl:"high",
	    score:0
	  },
	  {
		quest: "mediumId3 - How can a datatype be declared to be a constant type?",
		options: ["const","let","var","constant"],
		ans: "const",
	    dl:"medium",
	    score:0
	  },
	  {
		quest: "lowId4 - What keyword is used to check whether a given property is valid or not?",
		options: ["in","is in","exists","lies"],
		ans: "in",
	    dl:"low",
	    score:0
	  },{
		quest: "lowId5 - Javascript is an _______ language?",
		options: ["Object-Oriented","Object-Based","Procedural","None"],
		ans:"Object-Oriented",
	    dl:"low",
	    score:0},
		
	  {
		quest: "highId6 - Which of the following keywords is used to define a variable in Javascript?",
		options: ["var","let","both","none"],
		ans: "both",
	    dl:"high",
	    score:0
	  },
	  {
		quest: "mediumId7 - How can a datatype be declared to be a constant type?",
		options: ["const","let","var","constant"],
		ans: "const",
	    dl:"medium",
	    score:0
	  },
	  {
		quest: "lowId8 - What keyword is used to check whether a given property is valid or not?",
		options: ["in","is in","exists","lies"],
		ans: "in",
	    dl:"low",
	    score:0
	  }]

	  let dlanswer=prompt("Enter the difficulty level ? " + "\n"+"\n"+"Low, Medium or High");
	  actualdl=dlanswer.toLowerCase();
	
	  actualQuestions = filter(Questions,filterdl);

	  for (let x=1;x<=actualQuestions.length;x++){
	  do {
	  randomriddle=Math.floor(Math.random() * actualQuestions.length);
	  } while (testarray.includes(randomriddle))
	
	  testarray.push(randomriddle);
	  let answer=prompt(actualQuestions[randomriddle].quest + "\n"+"\n"+actualQuestions[randomriddle].options);
	  if (answer.toLowerCase() == actualQuestions[randomriddle].ans.toLowerCase()){
		alert("Hey Genious ! you are correct ");
		score+=1;
		
	  }
	}   

	function filterdl(e){
		return e.dl === actualdl;
	}

	function filter(nos,action){
    var result = []; 
    for (i=0;i<nos.length;i++){
		if (action(nos[i])){result.push(nos[i]);}
	}
	return result;
  }



  console.log("The total no. of questions are "+(actualQuestions.length));
	
	per=(score/(actualQuestions.length))*100
	
	document.getElementById("resultID").innerHTML = "Your Result is "+per+"%";
	
	}
	</script>
	
	</body>
	</html>
	
