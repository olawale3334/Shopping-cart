import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './Components/NavBar'
import HeroPage from './Components/HeroPage'
import Prouduct from './Components/Prouduct'
import socks from '/athletic-cotton-socks-6-pairs.jpg'
import  tshirt from '/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import altshoe from '/knit-athletic-sneakers-gray.jpg'
import capw from '/women-chiffon-beachwear-coverup-black.jpg'
import beachsan from '/women-beach-sandals.jpg'
import benea from '/women-chunky-beanie-gray.webp'
import wcamo from '/women-french-terry-fleece-jogger-camo.jpg'
import whodies from '/women-stretch-popover-hoodie-black.jpg'
import plainh from '/plain-hooded-fleece-sweatshirt-yellow.jpg'
import mens from '/men-slim-fit-summer-shorts-gray.jpg'
import towel from '/luxury-tower-set-6-piece.jpg'
import sunglas from '/men-navigator-sunglasses-brown.jpg'
import wat1 from '/watch-item6.jpg'
import wat2 from '/watch-item7.jpg'
import wat3 from '/watch-item8.jpg'
import wat4 from '/watch-item9.jpg'
import men1 from '/men-chino-pants-beige.jpg'
import men2 from '/men-cozy-fleece-zip-up-hoodie-red.jpg'
import men3 from '/men-golf-polo-t-shirt-blue.jpg'
import phone1 from '/iphone-item1.jpg' 
import phone2 from '/iphone-item2.jpg' 
import phone3 from '/iphone-item3.jpg' 
import phone4 from '/iphone-item4.jpg' 
import shoe1 from '/card-item1m.jpg'
import shoe2 from '/card-item2m.jpg'
import shoe3 from '/card-item3m.jpg'
import shoe4 from '/card-item4.jpg'
import shoe5 from '/card-item5.jpg'

function App() {
  const categories = ["men",'women','watch','shoe','clothes','phone']
 const [product] = useState([
  
 
   
  {
    id: 2,
    image: wat3,
    name: "Spotted watch",
    price: 9990,
    categorie: 'watch'
   
  },
  
  {
    id: "4",
    image: wat2,
    name: "Heavy watch",
    price: 9990,
     categorie: 'watch'
   
      
  },
  {
    id: "5",
    image: wat1,
    name: "Pink watch",
     price: 9990,
    categorie: 'watch'
   
  },
  // {
  //   id: "6",
  //   image:  beachsan ,
  //   name: "Women's  Buckle Sandals",
  //    price: 990,
  //   categorie: 'women'
    
  // },
   {
  id: "24",
    image: phone4 ,
    name: "Iphone 13",
     price: 87054,
    categorie: 'phone'
    
  },
 
  
  // {
  //   id: "9",
  //   image: sunglas ,
  //   name: "men sunglasses brown",
  //    price: 3990,
  //    categorie: 'men'
   
  // },
  // {
  //   id: "10",
  //   image: altshoe,
  //   name: " Knit Athletic Sneakers",
  //    price: 990,
  //   categories: "shoe"
   
  // },

 
  // {
  //   id: "17",
  //   image: mens,
  //   name: "Men's Slim-Fit  Shorts",
  //    price: 490,
  //   categorie: 'men'
    
  // },
  // {
  //   id: "18",
  //   image: men1,
  //   name: "men chino pants beige",
  //    price: 2090,
  //   categorie: 'men'
    
  // },
  
  // {
  //   id: "11",
  //   image:  whodies,
  //   name: "Women's Chiffon Beachwear Cover Up - Black",
  //    price: 950,
  //    categorie: "women"

  // },
  
  // {
  //   id: "13",
  //   image: capw,
  //   name: " women stretch hoodie-black",
  //    price: 2990,
  //   categorie: " women"
   
  //   },
    
  
  // {
  //   id: "14",
  //   image: wcamo ,
  //   name: "women jogger-camo",
  //    price: 1290,
  //   categorie: 'women'
  // },
  {
    id: "15",
    image: wat4,
    name: " Black watch",
     price: 9990,
    categorie: 'watch'
    
  },
  {
  id: "21",
    image: phone1 ,
    name: "Iphone 10",
     price: 15090,
    categorie: 'phone'
    
  },
  {
  id: "22",
    image: phone2 ,
    name: "Iphone 11",
     price: 40090,
    categorie: 'phone'
    
  },
  {
  id: "23",
    image: phone3 ,
    name: "Iphone 8",
     price: 10590,
    categorie: 'phone'
    
  },
   {
  id: "26",
    image: shoe5 ,
    name: "Arthletic Sneakers men",
     price: 3890,
    categorie: 'shoe'
    
  },
   {
  id: "25",
    image: shoe4 ,
    name: "Athletic Sneakers",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: "22",
    image: shoe1,
    name: "runing shoe for men",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: "23",
    image: shoe2 ,
    name: "runing shoe for men",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: "24",
    image: shoe3 ,
    name: "runing shoe for men",
     price: 3990,
    categorie: 'shoe'
    
  },
  
 
  
   {
    id: 1,
    image: socks,
    name: "Black & Gray  Socks 6 Pairs",
    price: 1990,
    categorie: 'clothes'
   
    },
  {
    id: "20",
    image: men3 ,
    name: "men golf polo t-shirt blue",
     price: 1090,
    categorie: 'men'
    
  },
  //  {
  //   id: "16",
  //   image: benea,
  //   name: "women beanie gray",
  //    price: 590,
  //   categorie: 'women'

   
  // },
  // {
  //   id: "8",
  //   image: towel,
  //   name: "Luxury Towel Set Gray",
  //    price: 1090,
  //   categorie: 'clothes'
   
    
  // },
  {
    id: 3,
    image: tshirt,
    name: "Adults Plain  T-Shirt2 ",
    price: 190,
    categorie: 'clothes'
    
    
  },
   {
    id: "19",
    image: men2,
    name: "men-cozy zip-up hoodie red",
     price: 2990,
    categorie: 'men'
    
  },
   
   {
    id: "7",
    image: plainh,
    name: "Plain Hooded  Sweatshirt",
     price: 1560,
    categorie: 'clothes'
    
  },



 ])

  return (
    <>
     <NavBar/>
     <HeroPage/>
     <Prouduct product ={product}/>
    </>
  )
}

export default App
