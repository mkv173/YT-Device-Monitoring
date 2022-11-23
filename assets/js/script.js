$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:2

    })
});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        if (href.length > 1) {
            const scrollTarget = document.getElementById(href);
            // const topOffset = document.querySelector('.scrollto').offsetHeight;
            const topOffset = 0; // если не нужен отступ сверху
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition ,
                behavior: 'smooth'
            });
        }
    });
});

function showModal(title, message) {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    let modalTitle = modal.querySelector('.modal__title');
    modalTitle.innerHTML = title;
    let modalMessage = modal.querySelector('.modal__message');
    modalMessage.innerHTML = message;
}
function hideModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}



