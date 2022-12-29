import './style.scss'
import { Collapse, ScrollSpy } from 'bootstrap';
import makeScrollEffect from './scrollEffect';

let navbarCollapseState = {
    show: false
}

window.addEventListener('load', () => setTimeout(init, 100));

function init () {  
    navbarShrink() 
    makeScrollEffect()
    document.body.classList.remove('overflow-hidden') 
    document.body.classList.remove('no-transition')
    document.getElementById('content').classList.remove('opacity-0') 
    document.getElementById('yandexMap').src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A82d7a4f3f9ef8fb43c45373fb4e83e7b446bb1b38079564af9ec76ed97338126&amp;source=constructor'     
    
    const scrollSpy = new ScrollSpy(document.body, {
        target: '#navbar',
        rootMargin: '0px 0px -25%',
        smoothScroll: true 
    })

    const bsCollapse = new Collapse(document.getElementById('navbarCollapse'), {
        toggle: false
    })

    document.getElementById('navbarCollapse').addEventListener('pointerdown', event => {
        if (event.target.tagName != 'A') return;
        setTimeout(() => bsCollapse.hide(), 200)
    })  
    
    document.getElementById('navbarCollapse').addEventListener('show.bs.collapse', event => {
        document.querySelector('.navbar-toggler').classList.toggle('navbar-toggler_active')    
        document.getElementById('navbar').classList.add('navbar_shadow')
        document.getElementById('navbar').classList.add('navbar_dark')

        navbarCollapseState.show = true;
    })

    document.getElementById('navbarCollapse').addEventListener('hide.bs.collapse', event => {
        document.querySelector('.navbar-toggler').classList.toggle('navbar-toggler_active')    
        document.getElementById('navbar').classList.remove('navbar_shadow') 
        
        navbarCollapseState.show = false;
    })

    document.getElementById('navbarCollapse').addEventListener('hidden.bs.collapse', event => {
        document.getElementById('navbar').classList.remove('navbar_dark')
    })    

    document.addEventListener('scroll', navbarShrink);          
}

function navbarShrink() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        document.getElementById('navbar').classList.add('navbar_shadow')
        document.getElementById('navbar').classList.add('navbar_dark')
        document.getElementById('navbar').classList.add('navbar_shrink')        
    } else {
        document.getElementById('navbar').classList.remove('navbar_shadow')
        document.getElementById('navbar').classList.remove('navbar_dark')
        document.getElementById('navbar').classList.remove('navbar_shrink')
    }   

    if ((document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) && navbarCollapseState.show) {
        document.getElementById('navbar').classList.add('navbar_shadow')
        document.getElementById('navbar').classList.add('navbar_dark')
    } 
}







