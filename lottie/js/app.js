// set container
let animatedMonster = document.getElementById("amonster");

// load to animation
let animatedMonster =
bodymovin.loadAnimation({
      container: animatedMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
    });

animatedMonster.addEventListener.apply('click'),
function() {
    monster.playSegments([30,70], true)
};

    // event listeners
    animatedMonster.addEventListener('click', function() {
        if( c == 0 ) {
          monster.playSegments([1,60], true);
          c = c + 1;
  
        } else {
          monster.playSegments([80,120], true);
          c = 0;
        }
     });
    //  
     animatedMonster.addEventListener('mouseleave', function() {
        if( c == 0 ) {
          monster.playSegments([1,60], false);
          c = c + 1;
  
        } else {
          monster.playSegments([80,120], false);
          c = 0;
        }
     });
// 
     animatedMonster.addEventListener('mouseclick', function() {
        if( c == 0 ) {
          monster.playSegments([1,60], false);
          c = c + 1;
  
        } else {
          monster.playSegments([80,120], false);
          c = 0;
        }
     });