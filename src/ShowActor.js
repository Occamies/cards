

class ShowActor {

  constructor(){

    const dataObj = [
      {
        name: "Death Smokie",
        img: "death-smokie.png",
        information: {strength:100, lives: 10},
        text:"Ninja KILLER dont touch him",
      },
      {
        name: "Black Scum",
        img: "black-alien-scum.png",
        information: {strength:90, lives: 5},
        text:"Black Scum is a Ninja KILLER",
      },
      {
        name: "Ping Pang",
        img: "angry-ping.png",
        information: {strength:80, lives: 4},
        text:"Just som penguin Shit",
      },
    ]

    console.log(dataObj);

    const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer"
    document.body.appendChild(menuContainer)
    
    const menuItemContainer = document.createElement("ul");
    menuItemContainer.id = "menuItemContainer"
    menuContainer.appendChild(menuItemContainer)

    dataObj.forEach((el, index)=> {
      const menuItem = document.createElement("li");
      menuItem.setAttribute("data-index", index);
      menuItem.className = "menuItem";
      menuItem.textContent = el.name;
      menuItemContainer.appendChild(menuItem)
      menuItem.addEventListener("click", (e)=>this.changeContent(e, el))
    })


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

    const footer = document.createElement('footer')
    footer.id="footer";
    document.body.appendChild(footer);

  }//END constructor

 changeContent(e, data){

  let mHeadline = document.querySelector('#headline');
  mHeadline.textContent = data.name;

  const imageSrc = data.img; //path to dataobj
  const img ="../assets/"+imageSrc; //path to image
  let mImg = document.querySelector("#showImg");
  mImg.src=img;

  let mContent = document.querySelector('#content');
  mContent.textContent = data.text



 }

}//END class

export default ShowActor;