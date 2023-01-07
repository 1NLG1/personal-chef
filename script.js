// MENU BTN
let $menuBtn = document.getElementById('menu-btn');
let $sidebar = document.getElementById('sidebar');
let $page = document.body;
console.log($page);
$menuBtn.addEventListener('click', () => {
    $sidebar.classList.add('display-menu')
})

// $page.addEventListener('click', () => {
//     $sidebar.classList.remove('display-menu');
// })

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