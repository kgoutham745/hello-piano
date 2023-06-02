function enable(e)
{
    if(e.classList.contains("active")){
        e.classList.remove("active");
    }
    else{
        e.classList.add("active")
    }
    document.getElementById("btn").disabled=true;
}
function disable()
{
    document.getElementById("btn").disabled=false;
}


// const continuebtn=document.getElementById("yes");
// const op1=document.getElementById("1");

// input.addEventListener("keypress",(e)=>{
//     const value=e.currentTarget.value;
//     if(value=="1")
//         continuebtn.disabled=true;
//     else
//         continuebtn.disabled=false;
// });

