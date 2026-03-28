
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


export default One