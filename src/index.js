import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import one from './images/p1.jpg'
import two from './images/p2.jpg'
import three from './images/p3.jpg'
import four from './images/p4.jpg'

const a = ReactDom.createRoot(document.getElementById("root"))

function One(props) {
  return (
    <div className='p-2 '>
      <div className='rounded-2xl bg-pink-300 w-full max-w-[250px] aspect-[3/2] border border-black flex flex-col shadow-gray shadow-2xl hover:-translate-y-2 duration-500 hover:shadow-2xl'>

        {/* Image container */}
        <div className="w-full h-[95%] overflow-hidden rounded-t-2xl">
          <img
            src={props.img}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <p className='text-center text-sm p-1'>
          {props.text}
        </p>

      </div>
    </div>
  )
}

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
  }
]


a.render(
  <div className='flex items-center min-h-screen justify-center bg-blue-300 '>
    <div className='grid md:grid-cols-4 grid-cols-2 lg:grid-cols-4'>
      {
        image.map(function (items) {
          return <One img={items.img} text={items.text} ></One>
        })
      }
    </div>
  </div>
)