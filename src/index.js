import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import Onne from '../src/components/Body'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import one from './images/p1.jpg'
import two from './images/p2.jpg'
import three from './images/p3.jpg'
import four from './images/p4.jpg'

const a = ReactDom.createRoot(document.getElementById("root"))


var image = [
  {
    img: one,
    text: "Julie rabbit Ear's"
  },
  {
    img: two,
    text: "The innocent Look"
  },
  {
    img: three,
    text: "Big Eyed Caesar"
  },
  {
    img: four,
    text: 'The Saint Tom'
  },
  {
    img: one,
    text: "Julie rabbit Ear's"
  },
  {
    img: two,
    text: "The innocent Look"
  },
  {
    img: three,
    text: "Big Eyed Caesar"
  },
  {
    img: four,
    text: 'The Saint Tom'
  },
  {
    img: one,
    text: "Julie rabbit Ear's"
  },
  {
    img: two,
    text: "The innocent Look"
  },
  {
    img: three,
    text: "Big Eyed Caesar"
  },
  {
    img: four,
    text: 'The Saint Tom'
  },
]


a.render(
  <div className='bg-blue-300'>
    <Header> </Header>
    <div className='  min-h-screen  bg-blue-300 '>


      <div className='grid gap-0 md:grid-cols-4 grid-cols-2 lg:grid-cols-4 place-items-center'>
        {
          image.map(function (items, index) {
            return <Onne key={index} img={items.img} text={items.text} ></Onne>
          })
        }
      </div>
    </div>
    <Footer></Footer>
  </div>
)