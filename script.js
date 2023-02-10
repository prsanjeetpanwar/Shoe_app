// console.log("this is")
const wrappper = document.querySelector(".sliderwrapper");
// wrappper.style.transform="translateX(-400vw)"
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 12000,
    colors: [
      {
        code: "black",
        img: "air.png",
      },
      {
        code:"darkblue",
        img:"air2.png"
      }
    ],
  },
  {
    id: 2,
    title: "Air Jorden",
    price: 13000,
    colors: [
      {
        code: "lightgray",
        img: "jordan2.png",
      },
      {
        code:"green",
        img:"jordan2.png"
      }
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: 21000,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code:"green",
        img:"blazer2.png"
      }
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: 24000,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code:"lightgray",
        img:"crater2.png"
      }
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: 32000,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code:"black",
        img:"hippie2.png",
      }
    ],
  },
  
];

let choosenProduct=products[0]



const crrentProductImg=document.querySelector(".productImg")
const crrentProducttitle=document.querySelector(".productTitle")
const crrentProductPrice=document.querySelector(".productPrice")
const crrentProductColors=document.querySelectorAll(".color")
const crrentProductSizes=document.querySelectorAll(".size")







menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("you clicked"+index)
    //change the current s;ide
    wrappper.style.transform = `translateX(${-100 * index}vw)`;
    //change the choosen products
    choosenProduct=products[index]


    //change text of current product

crrentProducttitle.textContent=choosenProduct.title
crrentProductPrice.textContent=choosenProduct.price+" RS"
crrentProductImg.src=choosenProduct.colors[0].img;
crrentProductColors.forEach((color,index)=>{
    //assgin new color
color.style.backgroundColor=choosenProduct.colors[index].code
})

  });
});
crrentProductColors.forEach((color,index)=>{

    color.addEventListener("click",()=>{
        crrentProductImg.src=choosenProduct.colors[index].img
    })
})



crrentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
crrentProductSizes.forEach((size)=>{
     size.style.backgroundColor="white"
     size.style.color="black";
})

        size.style.backgroundColor="black";
        size.style.color="white"
    })
})

const productButton=document.querySelector('.productButtom')
const payment=document.querySelector('.payment')
const close=document.querySelector('.close')



productButton.addEventListener("click",()=>{
    payment.style.display="flex"

})
close.addEventListener("click",()=>{
    payment.style.display="none"

})











