'use strict';


function getwindowsize(){
console.log((document.documentElement.scrollTop/(document.body.clientHeight-window.innerHeight))*100);
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = document.body.clientHeight;
}

function scrollcheck() {
  console.log((document.documentElement.scrollTop/(document.body.clientHeight-window.innerHeight))*100);
  var scrollPercent = ((document.documentElement.scrollTop/(document.body.clientHeight-window.innerHeight))*100);
  if (document.documentElement.scrollTop < (900 - (window.innerWidth/1.8))) {
      document.getElementById("hero-me").className = "home-hero-image hero-active";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  }else if (document.documentElement.scrollTop > (900 - (window.innerWidth/.18)) && document.documentElement.scrollTop < (1500- (window.innerWidth/1.8))) {
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
      document.getElementById("hero-royal").className = "home-hero-image hero-active";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  } else if (document.documentElement.scrollTop > (1500- (window.innerWidth/1.8))&& document.documentElement.scrollTop < (2100- (window.innerWidth/1.8))){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
      document.getElementById("hero-James").className = "home-hero-image hero-active";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  } else if (document.documentElement.scrollTop > (2100- (window.innerWidth/1.8))&& document.documentElement.scrollTop < (2650- (window.innerWidth/1.8))){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
      document.getElementById("hero-Shaw").className = "home-hero-image hero-active";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  } else if (document.documentElement.scrollTop > (2650- (window.innerWidth/1.8))&& document.documentElement.scrollTop){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
        document.getElementById("hero-PP").className = "home-hero-image hero-active";
  }

if (document.documentElement.scrollTop < (700 - (window.innerWidth/1.8))) {
        document.getElementById("scroll-bug").className = "scroll-indicator-active";
  } else if (document.documentElement.scrollTop > (700 - (window.innerWidth/.18))) {
      document.getElementById("scroll-bug").className = "scroll-indicator-inactive";
    }
  console.log("scrolldistance="+ (document.documentElement.scrollTop));
}

function scrollcheck2() {
  console.log((document.documentElement.scrollTop/(document.body.clientHeight-window.innerHeight))*100);
  var scrollPercent = ((document.documentElement.scrollTop/(document.body.clientHeight-window.innerHeight))*100);

  if(scrollPercent<22){
    document.getElementById("hero-me").className = "home-hero-image hero-active";
  document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
  document.getElementById("hero-James").className = "home-hero-image hero-inactive";
  document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
  document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

}else if((scrollPercent>22)&&(scrollPercent<44)){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
      document.getElementById("hero-royal").className = "home-hero-image hero-active";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  }else if((scrollPercent>44)&&(scrollPercent<68)){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
      document.getElementById("hero-James").className = "home-hero-image hero-active";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  }else if((scrollPercent>68)&&(scrollPercent<90)){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
      document.getElementById("hero-Shaw").className = "home-hero-image hero-active";
    document.getElementById("hero-PP").className = "home-hero-image hero-inactive";

  }else if(scrollPercent>90){
    document.getElementById("hero-me").className = "home-hero-image hero-inactive";
    document.getElementById("hero-royal").className = "home-hero-image hero-inactive";
    document.getElementById("hero-James").className = "home-hero-image hero-inactive";
    document.getElementById("hero-Shaw").className = "home-hero-image hero-inactive";
        document.getElementById("hero-PP").className = "home-hero-image hero-active";
  }

  if (document.documentElement.scrollTop < (700 - (window.innerWidth/1.8))) {
          document.getElementById("scroll-bug").className = "scroll-indicator-active";
    } else if (document.documentElement.scrollTop > (700 - (window.innerWidth/.18))) {
        document.getElementById("scroll-bug").className = "scroll-indicator-inactive";
      }

}

getwindowsize();
window.addEventListener("resize", getwindowsize);
//window.onscroll = function() {scrollcheck()};
window.onscroll = function(){scrollcheck2()};
console.log("javascript is running");
console.log("document height="+document.body.clientHeight);
console.log("window height="+window.innerHeight);
