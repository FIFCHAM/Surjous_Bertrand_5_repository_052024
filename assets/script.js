const slides = [
	{ 
		"src":'http://127.0.0.1:5501/assets/images/slideshow/slide1.jpg',
		"image":"/assets/images/slideshow/slide1.jpg",
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
const bulletpoint =[...document.querySelectorAll('.dot')];
console.log(bulletpoint);

console.log(slides);
const bannerimg =document.querySelector('.banner-img');
console.dir(bannerimg);
const tagimg =document.querySelector('#banner p');
console.log(tagimg);

const arrowright =document.querySelector('.arrow_right');
console.log(arrowright);
const arrowleft =document.querySelector('.arrow_left');

	let image=0
	
	
	
	arrowright.addEventListener('click',function(){
		console.dir( arrowright);
		image+=1
		
		if(image>=slides.length){
			image=0
		}
		
		
			//bannerimg.src=slides[image].src;
			//console.dir(banner[children[2]].src);
			bannerimg.src=slides[image].src	
			tagimg.innerHTML=slides[image].tagLine;
	})

	arrowleft.addEventListener('click',function(){
		console.log(arrowleft);
		image-=1
		if(image<0){
			image=slides.length-1
			console.log(image);
		}
		bannerimg.src=slides[image].src;
		tagimg.innerHTML=slides[image].tagLine;


	})

	bulletpoint.forEach(bullet =>{
		console.log(bullet);
	})

		
		 
				
		
	
	
	


