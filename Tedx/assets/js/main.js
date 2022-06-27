/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active--link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active--link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const navBar = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 600){
        navBar.classList.add('scroll-header');
    }else navBar.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.question__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.question__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.question__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=======================SPEAKER PREVIEW ============================ */

let previewContainer = document.querySelector('.speaker__preview-body');
let previewBox = document.querySelectorAll('.speaker__preview');

document.querySelectorAll('.speaker__group .speaker__item').forEach(speaker__item =>{
    speaker__item.onclick = () => {
        previewContainer.style.display = 'flex'
        let name = speaker__item.getAttribute('data-name');
        previewBox.forEach(speaker__preview => {
            let target = speaker__preview.getAttribute('data-target');
            if(name == target){
                speaker__preview.classList.add('active');
            }else{
                speaker__preview.classList.remove('active')
            }
        })
    };
});

previewBox.forEach(closeModal => {
    closeModal.querySelector('.btn-close').onclick = () =>{
        closeModal.classList.remove('active');
        previewContainer.style.display = 'none'
    }
});

/*=======================ABOUT TAB ============================ */

const about = document.querySelector('.about__body');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const imgEl =document.querySelector('.about__photo')

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    //   imgEl.classList.add('active');
    });
    e.target.classList.add('active');
    
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');

    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

button1.addEventListener('click',function(){
    imgEl.src = '1.jpg'
    console.log('clicked')
})

button2.addEventListener('click',function(){
    imgEl.src = 'hero-bcg.jpeg'
    console.log('clicked')
})

button3.addEventListener('click',function(){
    imgEl.src = '5.jpg'
    console.log('clicked')
})

/*=======================TEAM SWIPER ============================ */
let swiper = new Swiper('.team__swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*======================= SCROLL REVEAL ANIMATION ============================ */
const  sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: '2500',
    delay:400,
    // reset:true
})

sr.reveal('.about-img',{interval:200})
sr.reveal('.about__body',{interval:100})
sr.reveal('.speaker__item, .question__item',{interval:200})
sr.reveal('.team__description, .team__swiper',{interval:200})
sr.reveal('.schedule__program-content',{interval:150})
