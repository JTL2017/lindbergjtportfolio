const headerEL =  document.querySelector('header');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 900)
    {
        headerEL.classList.add('header-scroll');
    }
    else if(window.scrollY <= 900)
    {
        headerEL.classList.remove('header-scroll');
    }
})
const introEL = document.querySelector('.welcomeTo');
window.addEventListener('scroll', () =>
{
    if(window.scrollY >= 0)
    {
        introEL.classList.add('active');
    }
    else if(window.scrollY <= 200)
    {
        introEL.classList.remove('active');
    }
})


const proj1EL = document.querySelector('.project1');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 900)
    {
        proj1EL.classList.add('active');
    }
    else if(window.scrollY <= 980)
    {
        proj1EL.classList.remove('active');
    }
})
const proj2EL = document.querySelector('.project2');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 1600)
    {
        proj2EL.classList.add('active');
    }
    else if(window.scrollY <= 2000)
    {
        proj2EL.classList.remove('active');
    }
})
const proj3EL = document.querySelector('.project3');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 2300)
    {
        proj3EL.classList.add('active');
    }
    else if(window.scrollY <= 2700)
    {
        proj3EL.classList.remove('active');
    }
})

const head1EL = document.querySelector('.myHeader1');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 600)
    {
        head1EL.classList.add('active');
    }
    else if(window.scrollY <= 800)
    {
        head1EL.classList.remove('active');
    }
})

const line1EL = document.querySelector('.line1');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 600)
    {
        line1EL.classList.add('active');
    }
    else if(window.scrollY <= 900)
    {
        line1EL.classList.remove('active');
    }
})

const aboutEL = document.querySelector('.box');
window.addEventListener('scroll', () =>
{
    if(window.scrollY > 3200)
    {
        aboutEL.classList.add('active');
    }
    else if(window.scrollY <= 3500)
    {
        aboutEL.classList.remove('active');
    }
})

