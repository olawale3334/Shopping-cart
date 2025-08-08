import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './Components/NavBar'
import HeroPage from './Components/HeroPage'
import Prouduct from './Components/Prouduct'
import socks from '/athletic-cotton-socks-6-pairs.jpg'
import  tshirt from '/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import plainh from '/plain-hooded-fleece-sweatshirt-yellow.jpg'
import wat1 from '/watch-item6.jpg'
import wat2 from '/watch-item7.jpg'
import wat3 from '/watch-item8.jpg'
import wat4 from '/watch-item9.jpg'
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
import { Routes,Route } from 'react-router-dom'
import Cart from './Components/Cart'

function App() {
  const categories = ['watch','shoe','clothes','phone']

 const [product] = useState([ 
  {
    id: 2,
    image: wat3,
    name: "Spotted watch",
    price: 9990,
    categorie: 'watch'
   
  },
  
  {
    id: 4,
    image: wat2,
    name: "Heavy watch",
    price: 9990,
     categorie: 'watch'
   
      
  },
  {
    id: 5,
    image: wat1,
    name: "Pink watch",
     price: 9990,
    categorie: 'watch'
   
  },
  
   {
  id: 24,
    image: phone4 ,
    name: "Iphone 13",
     price: 87054,
    categorie: 'phone'
    
  },
 

  {
    id: 15,
    image: wat4,
    name: " Black watch",
     price: 9990,
    categorie: 'watch'
    
  },
  {
  id: 21,
    image: phone1 ,
    name: "Iphone 10",
     price: 15090,
    categorie: 'phone'
    
  },
  {
  id: 22,
    image: phone2 ,
    name: "Iphone 11",
     price: 40090,
    categorie: 'phone'
    
  },
  {
  id: 23,
    image: phone3 ,
    name: "Iphone 8",
     price: 10590,
    categorie: 'phone'
    
  },
   {
  id: 26,
    image: shoe5 ,
    name: "Arthletic Sneakers men",
     price: 3890,
    categorie: 'shoe'
    
  },
   {
  id: 25,
    image: shoe4 ,
    name: "Athletic Sneakers",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: 22,
    image: shoe1,
    name: "runing shoe for men",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: 23,
    image: shoe2 ,
    name: "runing shoe for men",
     price: 3990,
    categorie: 'shoe'
    
  },
   {
  id: 24,
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
    id: 20,
    image: men3 ,
    name: "men golf polo t-shirt blue",
     price: 1090,
    categorie: 'clothes'
    
  },
  
  {
    id: 3,
    image: tshirt,
    name: "Adults Plain  T-Shirt2 ",
    price: 190,
    categorie: 'clothes'
    
    
  },
   {
    id: 19,
    image: men2,
    name: "men-cozy zip-up hoodie red",
     price: 2990,
    categorie: 'clothes'
    
  },
   
   {
    id: 7,
    image: plainh,
    name: "Plain Hooded  Sweatshirt",
     price: 1560,
    categorie: 'clothes'
    
  },



 ])

  return (
    <>
     
     <Routes>
      <Route
          path="/"
          element={<>
          <NavBar categories ={categories} product={product}/>
          <HeroPage />
          <Prouduct product={product} />
            </>
          }/>
          
     <Route path="/cart" element={<Cart />} />

     </Routes>
    </>
  )
}

export default App
