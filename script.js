let btn=document.getElementById("btn");
let  text=document.getElementById("outerText");
let number=Math.floor(Math.random()*100)
btn.addEventListener('click',function (){
    let  output=document.getElementById("outerInput").value;
 if(number==output){
   text.innerHTML="congrats,you're right";
 }
 else if(number>output){
    text.innerHTML="sorry,you're low";
 }
 else{
        text.innerHTML= "sorry,you're high";
 };
})