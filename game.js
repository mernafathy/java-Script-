const grass_number = 50;
const ball_number = 10;
var Score = 0;
const SOUND = new Audio("coin.mp3");

const PLAYER = document.querySelector(".player");
let playerPosition = {
  x: 0,
  y: 0,
};
let playerVelocity = {
  x: 0,
  y: 0,
};
const START_PLAYER_POS = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

function Start(){
   
    gereate_grosANDball("gras",grass_number);
    gereate_grosANDball("ball",ball_number);

    playerPosition = START_PLAYER_POS;
    
}
function Update()
{
    playerPosition.x += playerVelocity.x;
    playerPosition.y += playerVelocity.y;
    if (playerPosition.x < 1450 && playerPosition.x > 0){
        PLAYER.style.left = playerPosition.x + "px";
    }
    if (playerPosition.y < 650 && playerPosition.y > 0){
        PLAYER.style.top = playerPosition.y + "px";
    }
    requestAnimationFrame(Update);
    checkCollisions();
}

window.addEventListener('keydown',(e) =>{
    if(e.key == "ArrowUp")
    {
        playerVelocity.y= -1 *5;
        PLAYER.style.backgroundImage = "url('player_front.png')";
        
    }
    if(e.key == "ArrowDown")
    {
        playerVelocity.y=1 *5;
        PLAYER.style.backgroundImage = "url('player_back.png')";
    }
    if(e.key == "ArrowLeft")
    {
        playerVelocity.x=-1 * 5;
        PLAYER.style.backgroundImage = "url('player_left.png')";
    }
    if(e.key == "ArrowRight")
    {
        playerVelocity.x=1 *5;
        PLAYER.style.backgroundImage = "url('player_right.png')";
    }
    PLAYER.classList.add("walk");
});

window.addEventListener('keyup',(e) =>{
    playerVelocity.x=0;
    playerVelocity.y=0;
    PLAYER.classList.remove("walk");
});

function gereate_grosANDball(className,numberOFelment)
{
    for(let i = 0 ;i < numberOFelment ; i++ )
    {
        const new_Elemnt = document.createElement('div');
        new_Elemnt.classList.add(className);
        new_Elemnt.style.left=Math.random() * 100 + "%" ;
        new_Elemnt.style.top=Math.random() * 100 + "%" ;
        document.body.appendChild(new_Elemnt);
    } 
}
function checkCollisions() {
    balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      if (collision(ball, PLAYER)) {
        SOUND.play();
        ball.style.left = Math.random() * 100 + "%";
        ball.style.top = Math.random() * 100 + "%";
        Score+=1;
        var score= document.getElementById("score");
        score.innerText=`Score : ${Score}`;
        
      }
    });
  }
  
  // ============= Check collision between 2 divs ===========
  function collision($div1, $div2) {

    var left1 = $div1.getBoundingClientRect().left;
    var top1 = $div1.getBoundingClientRect().top;
    var bottom1 = $div1.getBoundingClientRect().bottom;
    var right1 = $div1.getBoundingClientRect().right;

    var left2 = $div2.getBoundingClientRect().left;
    var top2 = $div2.getBoundingClientRect().top;
    var bottom2 = $div2.getBoundingClientRect().bottom;
    var right2 = $div2.getBoundingClientRect().right;

    if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) return false;
    return true;

   
  }
  

Start();
Update();