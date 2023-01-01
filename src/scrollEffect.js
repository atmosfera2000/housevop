export default function makeScrollEffect() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    observeElem('.photo-link.animate__animated', null, animateLeftRight);
    observeElem('h2.animate__animated', 'animate__lightSpeedInLeft');
    observeElem('form.animate__animated', 'animate__fadeInRight');
    observeElem('.video.animate__animated', 'animate__fadeInLeft'); 
    observeElem('.map.animate__animated', 'animate__fadeInRight'); 
    
    function observeElem(selector, animateClass, callback) {
        const observer = new IntersectionObserver((entries, observer) => {      
            entries.forEach((entry, index) => {         
                if (entry.isIntersecting) {       
                    if (callback) {
                        callback(entry.target, index)
                    } else {
                        entry.target.classList.add(animateClass)
                        if (entry.target.classList.contains('map')) {
                            entry.target.querySelector('#yandexMap').src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A82d7a4f3f9ef8fb43c45373fb4e83e7b446bb1b38079564af9ec76ed97338126&amp;source=constructor'
                        }
                    }          
                                    
                    observer.unobserve(entry.target)
                }
            })
        }, options)
    
        document.querySelectorAll(selector).forEach(elem => {
            observer.observe(elem)
        })    
    }

    function animateLeftRight(elem, index) {
        if((index + 1) % 2 === 0) {
            elem.classList.add('animate__fadeInRight')
        } else {
            elem.classList.add('animate__fadeInLeft')
        }   
    }
}