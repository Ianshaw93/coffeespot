import React from 'react'
import menuImage from '../assets/coffeeStopMenu.png'


const Menu = () => {
  return (
    <div className="hero min-h-screen bg-base-200"
    style={{ backgroundImage: `url(${menuImage})` }}
    id={"menu"}>
        {/* <div>
            In store Deal of the Week: Any Coffee + Red Velvet Cake £4
        </div> */}
        <div className="hero-content flex-col lg:flex-row-reverse"
        >
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-white inline-block align-top">Order now and avoid waiting!</h1>
                <p className="py-6 hidden">Pre-order available for take-away or sit-in.</p>
                <div className='hidden'>
            In store Deal of the Week: Any Coffee + Red Velvet Cake £4
        </div>
            </div>
            {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <div className="dropdown dropdown-top">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Take-away</a></li>
                        <li><a>Eat-in</a></li>
                    </ul>
                </div>                    
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </div>
            </div> */}
        </div>
    </div>
  )
}

export default Menu