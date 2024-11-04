document.addEventListener('DOMContentLoaded',()=>{
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('nav');
 
    hamburger.addEventListener('click',()=>{
     nav.classList.toggle('active')
    })
 });
 
 const typingElement = document.getElementById('typing')
 const words = ["Web Developer", "Web Designer","Programmer","Digital Marketing"]
 let wordIndex = 0;
 let letterIndex = 0;
 let currentWord = '';
 let currentletter = '';
 let isDeleting = false;
 
 function type(){
     if(isDeleting){
         currentletter=currentWord.substring(0,letterIndex -1)
         letterIndex --;
     }
     else{
         currentletter=currentWord.substring(0,substring+1)
         letterIndex ++;
         typingElement.innerHTML = currentletter;
     }
 }
 
 let typeSpeed = 200;
 if (isDeleting) {
     typeSpeed /= 2;
 }
 
 if (!isDeleting && letterIndex === currentWord.length) {
     typeSpeed = 2000;
     isDeleting = true;
 } else if (isDeleting && letterIndex === 0) {
     isDeleting = false;
     wordIndex++;
     if (wordIndex === words.length) {
         wordIndex = 0;
     }
     currentWord = words[wordIndex];
     typeSpeed = 500;
 }
 
 