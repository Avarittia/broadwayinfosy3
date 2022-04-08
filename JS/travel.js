ScrollReveal(
    { 
        reset: false ,
        distance: '60px',
        duration: 2500,
        delay: 200

    });
    ScrollReveal().reveal('.scroll-one', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('.scroll-two', { delay: 300, origin: 'bottom' });
    ScrollReveal().reveal('.scroll-three', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('.scroll-four', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.slider', { delay: 300, origin: 'top' });
    ScrollReveal().reveal('.scroll-five', { delay: 300, origin: 'top' });
    ScrollReveal().reveal('.scroll-six', { delay: 300, origin: 'top' });
    ScrollReveal().reveal('.scroll-seven', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('.scroll-eight', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.scroll-nine', { delay: 300, origin: 'top' });
    ScrollReveal().reveal('.scroll-ten', { delay: 300, origin: 'bottom' });
    ScrollReveal().reveal('.scroll-eleven', { delay: 300, origin: 'top' });
    ScrollReveal().reveal('.scroll-twelve', { delay: 300, origin: 'top' });

    //* scroll to top//

    const scrollbtn = document.querySelector('.up');


    scrollbtn.addEventListener('click',()=>{
        window.scrollTo(0,0)
    
    })
    
    function btnVisble(){
        const btnVisble = document.querySelector('.up')
        if(this.scrollY >= 350) btnVisble.style.display = 'block';
        else btnVisble.style.display = 'none';
    }
    window.addEventListener('scroll', btnVisble)