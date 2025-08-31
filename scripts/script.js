// if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual';
//     }

//     // Reload hone ke baad hamesha top pe scroll karo
//     window.onbeforeunload = function () {
//       window.scrollTo(0, 0);
//     };


   let discoverBtn=document.querySelector(".discover-btn");
   discoverBtn.addEventListener("click",function (){
     window.scrollTo({
      top: window.innerHeight,  // poore page ki height
      behavior: "smooth"                // smooth scrolling
    });
    
   })