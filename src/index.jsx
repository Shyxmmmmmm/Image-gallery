import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import One from './images/p1.jpg'
import Two from './images/p2.jpg'
import Three from './images/p3.jpg'
import Four from './images/p4.jpg'
import Five from './images/p5.jpg'
import Six from './images/p6.jpg'
import Seven from './images/p7.jpg'
import Eight from './images/p8.jpg'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const a=ReactDom.createRoot(document.getElementById('root'))


var image=[
  {
    img:One,
    text:'Doggy'
  },
  {
    img:Two,
    text:'Doggy'
  },
  {
    img:Three,
    text:'Doggy'
  },
  {
    img:Four,
    text:'Doggy'
  },
  {
    img:Five,
    text:'Doggy'
  },
  {
    img:Six,
    text:'Doggy'
  },
  {
    img:Seven,
    text:'Doggy'
  },
  {
    img:Eight,
    text:'Doggy'
  },
  
]


a.render(
  <div>
    <Header></Header>
    <div className='gap-10 p-10 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 place-items-center'>
      {
        image.map(function(items){
          return <Body img={items.img} text={items.text}></Body>
        })
      }
    </div>
    <Footer/>
  </div>
)