var displaybtn=document.querySelector(".contbtn");
var restartbtn=document.querySelector(".restartbtn");
var cont2=document.querySelector("#container2");
var cont1=document.querySelector("#container1");
var cont3=document.querySelector("#container3");
var option1=document.querySelector(".option1")
var option2=document.querySelector(".option2")
var option3=document.querySelector(".option3")
var option4=document.querySelector(".option4")
var nextbtn=document.querySelector(".nextbtn")
var question=document.getElementById("quesheading")
var scoretag=document.getElementById("scoretag")
var quesnum=document.querySelector(".quesnum");
var timerem=document.querySelector(".time");
var score =0;
timertime=5;
function timer(){
    var timerint = setInterval(function(){
        if(timertime>0){
            timertime--;
            timerem.innerHTML=""+timertime;
        }
        if(timertime==0){
            alert("Time is up!!!");
            result();
            console.log("Timer chal gya")
            clearInterval(timerint);
            console.log("Interval claer hogya")
            console.log(timertime)
            timertime=5;
            console.log(timertime)
        }

        
    },1000
)}
console.log(timerem)
var val=1;
var answer=1;
var ans=false;

function result(){
    cont3.style.display="flex";
    cont2.style.display="none";
    scoretag.innerHTML="You scored " + score +" out of 5"

}
var optionselected=false;
function optionselct(){
    option1.addEventListener('click', function() {
        if(optionselected==false){
            if(answer==1){
                option1.style.backgroundColor="lightgreen"
                option1.style.borderColor="lightgreen"
                score=score+1;
                console.log(score)
            }
            else {
                option1.style.backgroundColor="rgb(233, 131, 131)"
                option1.style.borderColor="red"
    
            }
            ans=true;
            optionselected=true;
        }
    })
    option2.addEventListener('click', function() {
        if(optionselected==false){
            if(answer==2){
                option2.style.backgroundColor="lightgreen"
                option2.style.borderColor="lightgreen"
                score=score+1;
                console.log(score)
                
            }
            else {
                option2.style.backgroundColor="rgb(233, 131, 131)"
                option2.style.borderColor="red"
    
            }
            ans=true;
            optionselected=true;
        }
        
    })
    option3.addEventListener('click', function() {
        
        if(optionselected==false){
            if(answer==3){
                option3.style.backgroundColor="lightgreen"
                option3.style.borderColor="lightgreen"
                score=score+1;
                console.log(score)
            }
            else {
                option3.style.backgroundColor="rgb(233, 131, 131)"
                option3.style.borderColor="red"
    
            }
            ans=true;
            optionselected=true;
        }
        
    })
    option4.addEventListener('click', function() {
        if(optionselected==false){
            if(answer==4){
                option4.style.backgroundColor="lightgreen"
                option4.style.borderColor="lightgreen"
                score++;
                console.log(score)
            }
            else {
                option4.style.backgroundColor="rgb(233, 131, 131)"
                option4.style.borderColor="red"
    
            }
            ans=true;
            optionselected=true;
        }
        
        
    })
    
}
function checkans(){
    if(val==2) ans=2;
    if(val==3) ans=3;
    if(val==4) ans=1;
    if(val==5) ans=4;
}
function valupdate(){
    quesnum.innerHTML=val+" out of 5";
}

function queschange(){
    optionselected=false;
    if(ans==false){
        alert("Please select any option");

    }
    else{
        if(val=="2"){
            question.innerHTML="Ques. WHo is Director of IET ?";
            option1.innerHTML="Prof. Vineet Kansal";
            option2.innerHTML="Prof. Alka Tripathi";
            option3.innerHTML="Prof. Sanjay Srivastava";
            option4.innerHTML="Prof. Y.N Singh";
        }
        if(val=="3"){
            question.innerHTML="Ques. First Year boys hostel ?";
            option1.innerHTML="Sarojni hostel";
            option2.innerHTML="Ramanujan Hostel";
            option3.innerHTML="Aryabhatt Hostel";
            option4.innerHTML="Bhabha Hostel";
        }
        if(val=="4"){
            question.innerHTML="Ques. I.E.T lucknow's popular name in Lucknow ?";
            option1.innerHTML="I.T College";
            option2.innerHTML="Engineering College";
            option3.innerHTML="IET lucknow college";
            option4.innerHTML="Technology college";
        }
        if(val=="5"){
            question.innerHTML="Ques. In best colleges of up IET is at which number ?";
            option1.innerHTML="5";
            option2.innerHTML="2";
            option3.innerHTML="8";
            option4.innerHTML="6";
        }
    }
    
}
function optionsreset(){
    ans=false;
    option1.style.backgroundColor="initial"
    option1.style.borderColor="initial"
    option2.style.backgroundColor="initial"
    option2.style.borderColor="initial"
    option3.style.backgroundColor="initial"
    option3.style.borderColor="initial"
    option4.style.backgroundColor="initial"
    option4.style.borderColor="initial"
}
function next(){
    if(ans==true){
        val++;
    if(val==2) answer=1;
    if(val==3) answer=2;
    if(val==4) answer=2;
    if(val==5) answer=4;
    if(val==6){
        result();
        val=1;
    }
    else{
        
    queschange();
    checkans();
    optionsreset();
    valupdate();
    checkans();
    
    }
    }
    
    else{
        alert("Please select any option--")
    }
    
    
    
    
}
optionselct();

displaybtn.addEventListener("click",function(){
    cont2.style.display="flex";
    cont1.style.display="none";
    score=0;
    timer();
    
    
})
restartbtn.addEventListener("click",function(){
    cont1.style.display="flex";
    cont3.style.display="none";
    score=0;
    val=1;
    answer=1;
    ans=false;
    optionsreset();
    timertime=5;
    
})

nextbtn.addEventListener('click',function(){
    next();
    option1.style.width="90%";
    timertime=5;
});