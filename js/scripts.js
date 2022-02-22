const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavLength = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i = 0; i < totalNavLength; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", () => {
        for(let j = 0; j < navList.length; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        a.classList.add("active");
        // console.log(this);
        showSection(a);
        leftSectionToggler();
    })
    // console.log(this);
}

function showSection(element){
    for(let i =0; i < totalSection; i++){
        allSection[i].classList.remove('active');
    }
    const href = element.getAttribute("href").split("#");
    target = href[1];
    document.querySelector('#'+target).classList.add('active');
    

}
        
const navBarToggler = document.querySelector('.navbar-switch-toggler'),
      leftSection = document.querySelector('.left-section');

navBarToggler.addEventListener('click',() => {
    leftSectionToggler();
})

function leftSectionToggler() {
    console.log('left section toggle');
    navBarToggler.classList.toggle("open");
    leftSection.classList.toggle("open");
}
