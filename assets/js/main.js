
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.querySelector(".menu-btn");
  const nav=document.querySelector("#main-nav");
  if(btn&&nav){
    btn.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      btn.setAttribute("aria-expanded",String(open));
    });
  }
});
