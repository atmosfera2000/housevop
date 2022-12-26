import './style.scss'
import { Collapse, ScrollSpy } from 'bootstrap';

window.addEventListener('load', init);

function init () {   
    document.body.classList.remove('overflow-hidden')                        
    document.getElementById('content').classList.remove('opacity-0')
    
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

    //document.getElementById('yandexMap').src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A82d7a4f3f9ef8fb43c45373fb4e83e7b446bb1b38079564af9ec76ed97338126&amp;source=constructor';
}