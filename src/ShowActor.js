import gsap from "gsap";
import dataobj from "./hero.json"
import ChangeContent from "./ChangeContent";
import Menu from "./Menu";
import CardData from "./CardData";

class ShowActor {

  constructor(){

    const CC = new ChangeContent();

    this.currentDataIndex; //number


    new Menu(CC, dataobj)//Menu


    const cardContainer = document.createElement('section');
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);
    
    const childCardArray = ["headline", "imagecon", "content", "info"];

    childCardArray.forEach((elementId, index)=>{
      const cardChild = document.createElement('div')
      cardChild.id=elementId;
      card.appendChild(cardChild);
    });

    const showImg = document.createElement('img');
    showImg.id ="showImg";
    showImg.src="../assets/ninja.png";
    document.querySelector('#imagecon').appendChild(showImg);

    const infochild = document.createElement("div");
    infochild.id = "infochild";
    document.querySelector("#info").appendChild(infochild);

    const strength = document.createElement("div");
    strength.id = "strength";
    document.querySelector("#infochild").appendChild(strength);

    const lives = document.createElement("div");
    lives.id = "lives";
    document.querySelector("#infochild").appendChild(lives);

    card.addEventListener("click",(e)=>{

      new CardData(CC, dataobj);

    })//END eventlistener

    const footer = document.createElement('footer')
    footer.id="footer";
    document.body.appendChild(footer);

  }//END constructor


}//END class

export default ShowActor;