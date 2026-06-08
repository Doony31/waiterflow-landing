const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

const modalOverlay = document.getElementById('benefit-modal');
const modalClose = document.getElementById('modal-close');
const benefitCards = document.querySelectorAll('.bento-trigger');

const modalSubtitle = modalOverlay.querySelector('.modal-subtitle');
const modalTitle = modalOverlay.querySelector('.modal-title');
const modalText = modalOverlay.querySelector('.modal-text-box p');
const modalImg = modalOverlay.querySelector('.modal-img-container img');

benefitCards.forEach(card => {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        
        const infoSubtitle = card.dataset.subtitle;
        const infoTitle = card.dataset.title;
        const infoText = card.dataset.text;
        const infoImg = card.dataset.img;

    
        if (infoSubtitle) modalSubtitle.textContent = infoSubtitle;
        if (infoTitle) modalTitle.textContent = infoTitle;
        if (infoText) modalText.innerHTML = infoText;
        
        if (infoImg) {
            modalImg.src = infoImg;
        } else {
            modalImg.src = 'images/mockup.jpg'; 
        }

        modalOverlay.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});


const processSteps = document.querySelectorAll('.process-step');

if (processSteps.length > 0) {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const stepObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    processSteps.forEach(step => {
        stepObserver.observe(step);
    });
}

const testimTrack = document.getElementById('testim-track');
const btnPrev = document.getElementById('testim-prev');
const btnNext = document.getElementById('testim-next');

if (testimTrack && btnPrev && btnNext) {
    const getScrollAmount = () => {
        const card = testimTrack.querySelector('.testim-card');
        const cardWidth = card.offsetWidth; 
        const gap = parseFloat(getComputedStyle(testimTrack).gap) || 24;
        return cardWidth + gap;
    };

    btnNext.addEventListener('click', () => {
        testimTrack.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    btnPrev.addEventListener('click', () => {
        testimTrack.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });
}

const ctaWaContainer = document.querySelector('.cta-wa-container');

if (ctaWaContainer) {
    const ctaObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const ctaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, ctaObserverOptions);

    ctaObserver.observe(ctaWaContainer);
}