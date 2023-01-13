// MENU BTN
let $menuTriggerBtn = document.getElementById('menu-trigger-btn');
let $sidebar = document.getElementById('sidebar');

$menuTriggerBtn.addEventListener('click', () => {
    $menuTriggerBtn.classList.toggle('active');
    $sidebar.classList.toggle('active');
})

document.addEventListener('click', function(e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'menu-trigger-btn') {
        $menuTriggerBtn.classList.remove('active');
        $sidebar.classList.remove('active');
    }
})

// above solution works well only if you make the button with css not favicon.

// SLIDER
let $previousSlideLink = document.getElementById('previous-slide');
let $nextSlideLink = document.getElementById('next-slide');
let currentSlide = 1;
let $sliderList = document.getElementById('slider-list');
let allSlides = $sliderList.childElementCount;
console.log(allSlides);
console.log($sliderList.children);

function selectSlide(position) {
    $sliderList.children[currentSlide - 1].classList.remove('Active');
    currentSlide = position;
    $sliderList.children[currentSlide - 1].classList.add('Active');
}

$previousSlideLink.addEventListener('click', () => {
    let position = (currentSlide === 1) ? allSlides : (currentSlide - 1);
    selectSlide(position);
}, true)

$nextSlideLink.addEventListener('click', () => {
    let position = (currentSlide === allSlides) ? 1 : (currentSlide + 1);
    selectSlide(position);
}, true)