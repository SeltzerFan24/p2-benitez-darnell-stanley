const donationsPopup = document.querySelector(".donations-popup");
const close = document.querySelector(".close-donations");


window.addEventListener("load",function(){
  showPopup();
  })

  function showPopup(){
      const timeLimit = 3 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          donationsPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    donationsPopup.classList.remove("show");
  })