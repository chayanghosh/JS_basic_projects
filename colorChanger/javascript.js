let btn = document.querySelectorAll('.button');
let body = document.querySelector('body');
console.log("hi");
 btn.forEach((button)=>{
   console.log(button);
   button.addEventListener('click',(e)=>{
    console.log(e.target)
    console.log(e.target.id)
    body.style.backgroundColor=e.target.id
  })
  })