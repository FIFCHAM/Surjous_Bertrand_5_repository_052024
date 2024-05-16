const slides = [
	{ 
		"src":'http://127.0.0.1:5501/assets/images/slideshow/slide1.jpg',
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"src":'http://127.0.0.1:5501/assets/images/slideshow/slide2.jpg',
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"src":'http://127.0.0.1:5501/assets/images/slideshow/slide3.jpg',
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"src":'http://127.0.0.1:5501/assets/images/slideshow/slide4.png',
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner =document.querySelector('#banner');

console.dir(banner);
const arrows =[...document.querySelectorAll('.arrow')];
console.log(arrows)let image =1
arrows.forEach(e => {
	e.addEventListener('click',function(){
		console.dir( e);
		
		if(e.className=='arrow arrow_right'){
			banner.children[2].src=slides[image].src;
		banner.children[3].innerHTML=slides[image].tagLine;
		image++
		

		}
		 if(e.className=='arrow arrow_left'){
		
			
			banner.children[2].src=slides[image].src;
				banner.children[3].innerHTML=slides[image].tagLine;
				image--;
		}
		
		}
	
	)

	
});

const bulletpoint =[...document.querySelectorAll('.dot')];
console.log(bulletpoint);

console.log(slides);