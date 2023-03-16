window.onload = function(){
  let character01 = document.querySelectorAll(".character01");
  let charactersBox = document.querySelectorAll(".characters-box");
  let characterTitle = document.querySelectorAll(".character-title");
  let rightBtn = document.querySelector(".NEXT");
  let leftBtn = document.querySelector(".PREV");

  let pageNum = 0;
  let totalNum = 0; 
  let totalNum2 = 0; 
  totalNum = charactersBox.length;
  totalNum2 = characterTitle.length;

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.008;

  rightBtn.addEventListener("click", function(){
    if(pageNum > 0){
      pageNum --;
    } else {
      pageNum = totalNum -1;
    }
    pageChangeFunc();
  })
  leftBtn.addEventListener("click", function(){
    if(pageNum < totalNum -1){
      pageNum ++;
    } else {
      pageNum = 0;
    }
    pageChangeFunc();
  })

  function pageChangeFunc() {
    for(let i=0; i<totalNum; i++){
      if(pageNum == i){
        charactersBox[i].classList.add("active");
        characterTitle[i].classList.add("active");

      } else {
        charactersBox[i].classList.remove("active");
        characterTitle[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("mousemove", moveE, false);

  function moveE(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);

    loop();
  }

  function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    for(let i=0; i<character01.length; i++){
      character01[i].style.transform = "translate("+ -(mx/100)+"px, "+ -(my/100)+"px"+")";

    }
    // boxColorBg.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // boxColor.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // centerLi.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // centerLi.style.transform = "translate3d("+ -(mx/10) +"px," + -(my/10) +"px,0) rotate3d(0,1,0,"+ -mx / 50 +"deg)";

    window.requestAnimationFrame(loop);
  }

  
  pageChangeFunc();
}