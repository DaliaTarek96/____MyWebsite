const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll("nav ul li");
const btnNav = document.getElementById('menu');
const list = document.getElementsByClassName('list')[0];

const blogLi = document.querySelectorAll(".blog ul li");
if(pageXOffset<992){
    btnNav.onclick=()=>{
        if (list.style.visibility == 'hidden'){
            list.style.visibility='visible';
        }
        else{
            list.style.visibility='hidden';
        }
    }
    
}
else{
    list.style.visibility='visible';

}
blogLi.forEach((li)=>{
    li.onclick=()=>{
        blogLi.forEach((li)=>{li.classList.remove("active");});
        li.classList.add("active");
    }
})

window.onscroll = () => {
    let current = "intro";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains("C"+current)) {
        li.classList.add("active");
      }
    });
    if(pageXOffset<992){

    if (pageYOffset >40)
        list.style.top='-20px';
    else  list.style.top='74px';}
  };