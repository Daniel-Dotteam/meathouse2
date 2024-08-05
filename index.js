const sections = document.querySelectorAll('.section__fade');
const burger_menu = document.getElementById("burger-menu")


burger_menu.addEventListener('click', function(){
    const links = document.getElementById('mobile-menu');
    if(links.classList.contains('open')){
        links.classList.remove('open');
    } else{
        links.classList.add('open');
    }

    if(burger_menu.classList.contains('active')){
        burger_menu.classList.remove('active');
    } else{
        burger_menu.classList.add('active');
    }
})


document.addEventListener('scroll', function(){
    sections.forEach((paragraph) => {
        if(isInView(paragraph)){
            paragraph.classList.add('section__fade--visible');
        }
    })
})

sections.forEach((paragraph) => {

    if (isInView(paragraph)) {
  
      paragraph.classList.add('section__fade--visible');
  
    }
  
  });
  

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < 
        (window.innerHeight || document.documentElement.clientHeight)
    )
}