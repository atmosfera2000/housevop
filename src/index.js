import './style.scss'
import { Collapse, ScrollSpy } from 'bootstrap';

window.addEventListener('load', () => setTimeout(init, 100));

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
}