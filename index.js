function myFunction() {
let score=0;
    let testarray=[];
Questions = [{
    quest: "Javascript is an _______ language?",
    options: ["Object-Oriented","Object-Based","Procedural","None"],
    ans:"Object-Oriented"},
  {
    quest: "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var","let","both","none"],
    ans: "both"
  },
  {
    quest: "How can a datatype be declared to be a constant type?",
    options: ["const","let","var","constant"],
    ans: "const"
  },
  {
    quest: "What keyword is used to check whether a given property is valid or not?",
    options: ["in","is in","exists","lies"],
    ans: "in"
  }]

  for (let x=1;x<=Questions.length;x++){
  do {
  randomriddle=Math.floor(Math.random() * Questions.length);
  } while (testarray.includes(randomriddle))

  testarray.push(randomriddle);
  let answer=prompt(Questions[randomriddle].quest + "\n"+"\n"+Questions[randomriddle].options);
  if (answer.toLowerCase() == Questions[randomriddle].ans.toLowerCase()){
    alert("Hey Genious ! you are correct ");
    score+=1;
  }
}   

per=(score/(Questions.length+1))*100

document.getElementById("resultID").innerHTML = "Your Result is "+per+"%";

  /*let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("resultID").innerHTML =
    "Hello " + person + "! How are you today?";
  }*/
}
