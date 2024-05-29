import React, { useEffect, useContext } from 'react'
import { AppRoute } from '../../App';

// react k icons use kr rhi
import { HiOutlineHome } from 'react-icons/hi';
import { BiSolidCategory } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

// context lagayengy
import {AccountContextVariable} from '../../GlobalContext/AccountContext'


export default function () {
  //For hover active effect
const location=useLocation()

// using our context
const {account_state, account_dispatch}=useContext(AccountContextVariable)


//correct way of navbar
  const NavItems = [
    
    {
      tab: 'Categories',
      url: "/categoryAdmin",
      icon: <BiSolidCategory style={{color:'black'}} />
    },
    {
      tab: 'Products',
      url: "/productsAdmin",
      icon: <BiSolidCategory style={{color:'black'}} />
    },
    {
      tab: 'Stitch Type',
      url: "/StitchTypeAdmin",
      icon: <BiSolidCategory style={{color:'black'}} />
    }
    ,
    {
      tab: 'Orders',
      url: "/orders",
      icon: <BiSolidCategory style={{color:'black'}} />
    }
  ]


  return (
    <>
      <div className=" d-flex justify-content-between align-items-center p-3  " style={{backgroundColor:"#ffecf1"}} >
        <h2 className='text-dark fw-bold px-2'>Admin Dashboard</h2>
        
        {/* <button className='btn text-dark btn-outline-dark'   onClick={() => {
                                account_dispatch({
                                    type: "LOGOUT"
                                })
                            }}>Logout</button> */}
      </div>

      <ul className="nav flex-column">
        {
          NavItems.map((val,index)=> //curly bracket + backtick = expression
          <li className={`nav-item my-1 mx-2 ${location.pathname==val.url ? 'bg-light rounded' : null}`} key={index}>  
          <Link to={val.url} className='nav-link d-flex align-items-center gap-2'>
          <span>{val.icon}</span>
          {val.tab}
          </Link>

        </li>
        
        )
        }
      </ul>


    </>
  )
}
