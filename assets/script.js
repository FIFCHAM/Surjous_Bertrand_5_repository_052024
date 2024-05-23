const slides = [
	{
		
		"image": "http://127.0.0.1:5501/assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "http://127.0.0.1:5501/assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "http://127.0.0.1:5501/assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "http://127.0.0.1:5501/assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const bulletpoint = document.querySelector('.dots');
console.dir(bulletpoint);
console.log(slides);
const bannerimg = document.querySelector('.banner-img');
console.dir(bannerimg);
const tagimg = document.querySelector('#banner p');
console.log(tagimg);
const arrowright = document.querySelector('.arrow_right');
console.log(arrowright);
const arrowleft = document.querySelector('.arrow_left');
let picture = 0;

//----------------------- Créations bulletpoint ------------------------//
function createBullets() {
	for (let i = 0; i < slides.length; i++) {
		const bullet = document.createElement('span');
		bullet.classList.add('dot');
		bulletpoint.appendChild(bullet);
		if (i == picture) {
			bullet.classList.add('dot_selected');
		}
	}
}
createBullets()

//------------------------  Carroussel --------------------------------//
arrowright.addEventListener('click', function () {
	console.dir(arrowright);
	const arraybullet = document.querySelectorAll('.dot');
	arraybullet[picture].classList.remove('dot_selected');
	picture += 1;
	if (picture >= slides.length) {
		picture = 0;
	};
	bannerimg.src = slides[picture].image;
	tagimg.innerHTML = slides[picture].tagLine;
	arraybullet[picture].classList.add('dot_selected');
});

arrowleft.addEventListener('click', function () {
	console.log(arrowleft);
	const arraybullet = document.querySelectorAll('.dot');
	arraybullet[picture].classList.remove('dot_selected');
	picture -= 1;
	if (picture < 0) {
		picture = slides.length - 1;
		console.log(picture);
	}
	bannerimg.src = slides[picture].image;
	tagimg.innerHTML = slides[picture].tagLine;
	arraybullet[picture].classList.add('dot_selected');
});
















