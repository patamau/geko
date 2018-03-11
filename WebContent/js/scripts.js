/**
 * 
 */
function openForm(formid){
	$('.about').animate({
		width: '0'
	}, {duration: 400, queue: false});
	$('.about').hide({duration: 400, queue: false});
	$('.hints').animate({
		width: '55%',
		height: '140%'
	}, {duration: 400, queue: false});
	$(formid).show({duration: 400, queue: false});
	$('#geko').hide({duration: 400, queue: false});
	$('.controls').animate({width:'40%'}, 
			{duration: 400, queue: false});
}

function closeForm(formid){
	$('.about').show({duration: 400, queue: false});
	$('.hints').animate({
		width: '30%',
		height: '100%'
	}, {duration: 400, queue: false});
	$('.about').animate(
		{width: '30%'}, 
		{duration: 400, queue: false},
		fixAbout()
	);
	$('#geko').show({duration: 400, queue: false});
	$(formid).hide({duration: 100, queue: false});
	$('.controls').animate({width:'100%'}, 
			{duration: 400, queue: false});
}
		
function fixAbout(){
	$('.about').css('overflow','visible');
	$('.about').css('height','');
}

function openInfoBox(title, text){
	$('#infobox-title').text(title);
	$('#infobox-text').text(text);
	$('.infobox').fadeIn({duration: 400, queue: false});
}

function closeInfoBox(){
	$('.infobox').fadeOut({duration: 400, queue: false});
}

function closeWindow() {
  if (confirm("Quit?")) {
	  window.open('','_self').close();
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}