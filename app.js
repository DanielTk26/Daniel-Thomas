const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
  });
  
  document.addEventListener('keydown', function(e) {
	if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a' || e.key === 'p')) {
	  e.preventDefault();
	}
  });
  
document.addEventListener('DOMContentLoaded', () => {
	const typingText = document.getElementById('typing-text');
	const texts = [
		'Founder of FocusTube @ focustube-dev.web.app.',
	  'Passionate Amateur Web & App Developer.',
	  'Politically, Right Wing supporter.',
	  'Praise the Lord Jesus Christ our saviour!'
	];
	const typingSpeed = 20; 
	const deletingSpeed = 1; 
	const pauseDuration = 900; 
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
  
	function type() {
	  const currentText = texts[textIndex];
  
	  if (isDeleting) {
		typingText.innerText = currentText.substring(0, charIndex--);
	  } else {
		typingText.innerText = currentText.substring(0, charIndex++);
	  }
  
	  if (!isDeleting && charIndex === currentText.length) {
		isDeleting = true;
		setTimeout(type, pauseDuration);
	  } else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		textIndex = (textIndex + 1) % texts.length; 
		setTimeout(type, pauseDuration);
	  } else {
		setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
	  }
	}
  
	type();
  });
  
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
