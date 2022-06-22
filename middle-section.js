let works = document.querySelector('.works');
let cardWorks = document.querySelector('.card-works-1');
let cardWorksReverse = document.querySelector('.card-works-1 row-reverse');
let photo = document.querySelector('.snapshoot-portofolio-1');
let blocks = document.querySelector('.block-1');
let buttonX = document.querySelector('.Close-btn');


buttonX.addEventListener('click', () => {
   works.classList.toggle('active');
});
