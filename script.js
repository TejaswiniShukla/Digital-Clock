const hour=document.getElementById('hours')
const minute=document.getElementById('minutes')
const second=document.getElementById('seconds')
const ampmEl=document.getElementById('ampm')

function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm='AM'
    if(h>12){
        h=h-12
        ampm='PM'
    }
    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()