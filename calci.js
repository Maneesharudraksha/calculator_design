let history=document.getElementById("history-value");
let result=document.getElementById("output-value");
let clicked=0;
function display(num){   
    history.innerText+=num;
    clicked++;
    if(clicked>=25){
        document.getElementsByClassName("number").disabled=true;
    }
}

function deletelast(){
    history.innerHTML=history.innerHTML.slice(0,-1);
    result.innerHTML="";
}
function calculate(){
    try{
        if(history!=null){
        result.innerHTML=eval(history.innerText);
}else{
    alert("enter something!!");
}
    }
catch(err){
    alert("invalid");
}
}
function allclear(){
    if(history.innerHTML!=""||result.innerHTML!=""){
        history.innerHTML="";
        result.innerHTML="";
    }
}



