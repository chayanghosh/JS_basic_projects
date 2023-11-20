const clock = document.getElementById('clock')
setInterval(function(){
    clock.innerText=new Date().toLocaleTimeString();
},1000)