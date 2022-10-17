import React from 'react'
// import redVelvetImage from '..\assets\amirali-mirhashemian-EfkMkUXs0fU-unsplash.jpg'

const DealOfTheWeek = () => {
  return (
<div className="card cbg-base-100 image-full">
  <figure><img src={redVelvetImage} alt="Movie"/></figure>
  <div className="card-body">

    <h2 className="card-title">Online Ordering</h2>
    <p>In store Deal of the Week: Any Coffee + Red Velvet Cake £4</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Menu</button>
    </div>
  </div>
</div>
  )
}

export default DealOfTheWeek