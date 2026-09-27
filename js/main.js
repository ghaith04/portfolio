/*for header*/ 
/*show button*/
const navmenu = document.getElementById('nav-menu'),
      navtoggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')

if(navtoggle){
    navtoggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu')
    })
}
if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}
/*remove menu*/
const navlink = document.querySelectorAll('.nav-link')
const linkaction = () => {
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkaction))

/*main button*/
const projectbtn = document.querySelector('.main-btn')
const projectsection = document.getElementById('project')

projectbtn.addEventListener('click', () => {
    projectsection.scrollIntoView({behavior : "smooth"})
})