const links = document.querySelectorAll(".alternate-style")
        totalLinks = links.length;
   

function setActiveStyle(color) {
    console.log(color);
    for(let i = 0; i < totalLinks; i++){
   
        if(color == links[i].getAttribute("title"))
        {
            links[i].removeAttribute("disabled");
            console.log("doing task");
        }
        else{
            links[i].setAttribute("disabled","true");
            console.log("doing task another");
        }
    }
}

document.querySelector('.style-switch-toggler').addEventListener("click",() => {
    console.log("done");
    document.querySelector('.style-switcher').classList.toggle("open");
})