
import gsap from "gsap"

class CardData {
  constructor(CC, dataobj){

    if(CC.currentIndex>-1){
        
      document.querySelector("#info").style.display= "block"
      
      gsap.to("#info", {
        duration: 0.05,
        rotate: 10,
        scale: 1.3,
        repeat: 3,
        transformOrigin: "center",
        yoyo: true,
      })
      
    }//END if


    let addInfo = dataobj.content[CC.currentDataIndex].information;

    let mStrength = document.querySelector("#strength")
    mStrength.textContent = addInfo.strength;

    let mLives = document.querySelector("#lives");
    mLives.textContent = addInfo.lives;
  }
}

export default CardData