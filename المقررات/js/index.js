const loginbtn=document.getElementById("loginbtn");
const logincard=document.getElementById("logincard");
const regbtn=document.getElementById("regbtn");
const regcard=document.getElementById("regcard");


loginbtn.onclick=()=>{
    logincard.style.display = 'block'
    regcard.style.display = 'none'
}

regbtn.onclick=()=>{
    logincard.style.display = 'none'
    regcard.style.display = 'block'
}

