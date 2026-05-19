// ounter App using HTML,CSS,JavaScript

let count=Number(localStorage.getItem("count"))||0;
let history=[];
const countElement=document.getElementById("count");
const IncreaseBtn=document.getElementById("increase");
const DecreaseBtn=document.getElementById("decrease");
const IncreaseDoubleBtn=document.getElementById("double");
const undoBtn=document.getElementById("undo");
const themeBtn=document.getElementById("theme");
const stepInput=document.getElementById("stepInput");
const customAddBtn=document.getElementById("customAdd");
const historyList=document.getElementById("historyList");
const ResetBtn=document.getElementById("reset");
const message=document.getElementById("message");
function updateCounter(){
    countElement.innerText=count;
    localStorage.setItem("count",count);
    if(count>0){
        countElement.style.color="green";
    }
    else if(count<0){
        countElement.style.color="red";
    }
   else{
    countElement.style.color="black";
   }

   if(count>10){
    message.innerText="Maxmimum limit reached";
   }
   else if(count<=-10){
     message.innerText="Minimum limit reached";
   }
   else{
    message.innerText="";
   }
}

function addToHistory(){
    history.push(count);
    renderHistory();
}

function renderHistory(){
    historyList.innerHTML="";
    history.forEach(item=>{
        const li=document.createElement("li");
        li.innerText=item;
        historyList.appendChild(li);
    });
}
IncreaseBtn.addEventListener("click",()=>{
    if(count>=10){
        return ;
    }
    count++;
    updateCounter();
      addToHistory();
    changeBackground();
});

DecreaseBtn.addEventListener("click",()=>{
    if(count<=-10){
        return;
    }
    count--;
    updateCounter();
      addToHistory();
    changeBackground();
});

IncreaseDoubleBtn.addEventListener("click",()=>{
    if(count>=10){
        return;
    }
    count+=2;
    updateCounter();
    addToHistory();
    changeBackground();
});

undoBtn.addEventListener("click",()=>{
    history.pop();
    count=history[history.length-1]||0;
    updateCounter();
    renderHistory();
});

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
});

customAddBtn.addEventListener("click",()=>{
    const value=Number(stepInput.value);
    count+=value;
    updateCounter();
    addToHistory();
    stepInput.value="";
});

ResetBtn.addEventListener("click",()=>{
    count=0;
    updateCounter();

    changeBackground();
});

function changeBackground(){
      const randomColor="#" + Math.floor(
                            Math.random()*16777215
                            ).toString(16);
      document.body.style.backgroundColor=randomColor;
}

updateCounter();

renderHistory();