/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/ 

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');

	}, 2000);
	
});

$(document).ready(function() {
 var swiper1 = new Swiper('.s1');


 var swiper2 = new Swiper('.s2', {
   slidesPerView: 3,
   spaceBetween: 0,
   freeMode: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });
});