import gsap from "gsap"

class ChangeContent {

  constructor(){

    this.currentDataIndex = -1;//default value

  }//END constructor

  getData(e,data){

    document.querySelector("#info").style.display= "none"
  this.currentDataIndex = e.currentTarget.dataset.index;


  let mHeadline = document.querySelector('#headline');
  mHeadline.textContent = data.name;

  const imageSrc = data.img; //path to dataobj
  const img ="../assets/"+imageSrc; //path to image

  let mImg = document.querySelector("#showImg");
  mImg.src=img;

  let mContent = document.querySelector('#content');
  mContent.textContent = data.text

  let elem = document.querySelector("#cardContainer");

  gsap.to(elem, {
    duration: 0.05,
    scaleX: -1,
    alpha: 0,
    repeat: 3,
    yoyo: true,
  })
  } //END getData

  get currentIndex(){
    return this.currentDataIndex;
  }

}//END class

export default ChangeContent