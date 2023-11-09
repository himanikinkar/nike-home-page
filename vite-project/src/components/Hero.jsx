import React from 'react'

const Hero = () => {
  return (
    <main className= "hero container">
      <div className="hero-content">
      <h1>YOUR FEET DESERVES THE BEST  </h1>
      <p>YOUR FEET DESERVES THE BEST AND WE ARE HERE TO
      HELP YOU WITH OUR SHOES , YOUR FEET DESERVES THE 
      BEST AND WE ARE HERE TO HELP YOU.</p>

      <div className= "hero-btn">
        <button>Shop Now</button>
        <button> Category</button> 
      </div>
      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icons">
          <img src="/public/images/Group 2.png"/>
          <img src="/public/images/Flipkart logo.png"/>
        </div>
      </div>
      
      </div>
      <div className="hero-image">
         <img src="/public/images/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail__1_-removebg-preview 1.png"/>
      </div>
    </main>
  )
}

export default Hero;
