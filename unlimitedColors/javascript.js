function randomColor(){
    const colorCode='0123456789ABCDEF'
    let cc='#'
    for(let i=0;i<6;i++){
      cc+=colorCode[Math.floor(Math.random()*16)]
    }
    return cc
  }
  function changeBGColor(){
    document.body.style.background=randomColor()
  }
  
  let interval
  const startChanging=function(){
    interval=setInterval(function(){
      document.body.style.background=randomColor()
    },150)
  }
  
  const stopChanging=function(){
    clearInterval(interval)
  }
  
  document.querySelector('#change').
  addEventListener('click',changeBGColor)
  
  document.querySelector('#start').
  addEventListener('click',startChanging)
  
  document.querySelector('#stop').
  addEventListener('click',stopChanging)
  