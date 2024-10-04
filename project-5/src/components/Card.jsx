import React from 'react'

const Card = ({username="FS" , post="not assigned yet"}) => {
    //console.log(props);
    
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?cs=srgb&dl=pexels-septimiu-lupea-208604-669015.jpg&fm=jpg" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4" >
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, id!
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
    </div>
</figure>
    //<div>
    //<img src='https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?cs=srgb&dl=pexels-septimiu-lupea-208604-669015.jpg&fm=jpg' alt='cat'/>
//<h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
    //<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, facilis!</p>
    //</div>
  )
}

export default Card