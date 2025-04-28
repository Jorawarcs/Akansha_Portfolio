const typingElement = document.querySelector('.typing');
const words = ['Full Stack Developer', 'DevOps Engineer'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) {
    wordIndex = 0;
  }
  currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex++;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();
