const navAnchorTag = document.querySelectorAll("#navBar ul a");
const Skills_container = document.getElementById('Skills-Container');
const skills = document.querySelectorAll("#Skills-Container p");
const progressBar = document.getElementById('progressBar');



function smoothScroll(event){
    event.preventDefault();
    let TargetElementId = event.srcElement.textContent;
    let TargetElement = document.getElementById(TargetElementId);
    let distanceFromtop = TargetElement.getBoundingClientRect().top +10;
    let count = 0;
    let setIntervelId = setInterval(() => {
        count+=50;
        if(count>=distanceFromtop){
            clearInterval(setIntervelId);
        }else{
            window.scrollTo(0,count);
        }
    }, 15); 
}
navAnchorTag.forEach(element => {
    element.addEventListener("click",smoothScroll);
});

document.addEventListener('scroll',checkScroll);

function skillPercentage(element){
    if(element.getAttribute('id')=="Cplus"){
        element.style.width = "60%";
    }
    if(element.getAttribute('id')=="Java"){
        element.style.width = "80%";
    }
    if(element.getAttribute('id')=="DSA"){
        element.style.width = "75%";
    }
    if(element.getAttribute('id')=="HTML"){
        element.style.width = "95%";
    }
    if(element.getAttribute('id')=="CSS"){
        element.style.width = "85%";
    }
    if(element.getAttribute('id')=="JavaScript"){
        element.style.width = "90%";
    }
}

function checkScroll(){
    // console.log(document.body.getBoundingClientRect().top)
    if(document.body.getBoundingClientRect().top <= -685 && document.body.getBoundingClientRect().top >= -1538){
        skills.forEach(element => {
            skillPercentage(element)
        });
    }
    else{
        skills.forEach(element => {
            element.style.width ="0%";
        });
    }

}


// ProgressBar
window.addEventListener('scroll',()=>{
    const entireHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.offsetHeight,
        document.body.clientHeight, 
        document.documentElement.clientHeight
      );
    let presentAt = Math.abs(document.body.getBoundingClientRect().top);
    let percentage = parseInt((presentAt/(entireHeight-window.innerHeight))*100);
    if(percentage==99){
        progressBar.textContent = `100% viewed`;
    }else{
        progressBar.textContent = `${percentage}% viewed`;
    }
    
    
})


  
