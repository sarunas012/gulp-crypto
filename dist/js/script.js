// console.log(6848645);
const sections = document.querySelectorAll('section');
const points = document.querySelectorAll('.navigation .point');
const btn = document.querySelector('.menu')
const menu = document.querySelector('header nav')
const body = document.querySelector('body')

window.addEventListener('scroll', function(){
    sections.forEach((section, i) =>{
        if(window.innerHeight/1.3 + window.scrollY > section.offsetTop){
            //nuimam visiems point klase active
            points.forEach((point)=>point.classList.remove('active'))
            points[i].classList.add('active')
        }
    })
});

points.forEach((point, i)=>{
    point.addEventListener('click', ()=>{
        window.scrollTo(0, sections[i].offsetTop)
    })
})

btn.addEventListener('click', ()=>{
    menu.classList.toggle('active-menu');
    body.classList.toggle('no-scroll')
})
