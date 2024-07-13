import React, { useState } from 'react'
import logo from "../assets/images/logo-header.svg"
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import logoMobile from "../assets/images/logo-mobile.svg"

const Header = () => {
    const [active,setActive] =useState("Home")
    const [isActive,setIsActive] = useState(null)
  return (
    <>
    <header>
        <div className='header-up'>
            <div className='header-up-left'>
                <ul>
                    <li>Open Sponsorship</li>
                    <li>Call Center</li>
                    <li>Help</li>
                    <li>Tutorial </li>
                </ul>
            </div>

            <div className='header-up-right'>
                <ul>
                    <li>Be Partners</li>
                    <li>Open Shop</li>
                    <li>
                        <select>
                            <option>English</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>Download</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>

        <div className='header-down'>
            <div className='header-down-left'>
                <img src={logo} alt="" />
            </div>

            <div className='header-down-middle'>
                <ul>
                    <Link to='/'>
                        <li onClick={() => setActive("Home")} className={active === "Home" ? "active" : "" }>Home</li>
                    </Link>

                    <Link>
                        <li onClick={() => setActive("Affiliate")}  className={active === "Affiliate" ? "active" : ""}>Affiliate</li>
                    </Link>

                    <Link>
                        <li onClick={() => setActive("Category")} className={active === "Category" ? "active" : ""}>Category</li>
                    </Link>

                    <Link >
                        <li onClick={() => setActive("Collection")} className={active === "Collection" ? "active" : ""}>Collection</li>
                    </Link>

                    <Link >
                        <li onClick={() => setActive("Blogs")} className={active === "Blogs" ? "active" : ""}>Blogs</li>
                    </Link>
                </ul>
            </div>

            <div className='header-down-right'>
                <div className='search-icon'>
                <IoSearch/>
                </div>

                <div className='cart-icon'>
                    <RiShoppingBasketLine/>
                </div>

                <div className='register-button'>
                    <button>Register</button>
                </div>

                <div className='signin-button'>
                <button>Sign In</button>
                </div>
            </div>
        </div>


        {/* <MOBILE */}
        <div className="hamburger-mobile">
          <ul>
            <li className="hamburger" onClick={() => setIsActive(!isActive)}>
              <GiHamburgerMenu color="#000000" />
            </li>
          </ul>
        </div>
        <div
          className={`mobile-nav ${isActive ? "active" : ""}`}
          id="mobile-hambargur"
        >
          <div className="one">
            <div className="one-left">
              {/* <a href="/">
                <img
                  src={logoMobile}
                  alt="logo"
                //   style={{ width: "65px", borderRadius: "100%" }}
                />

              </a> */}
            </div>

            <div
              className={`one-right ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <RxCross2 color="#fff" />
            </div>
          </div>

          <div className="two" id="after-login-mobile">
            <ul>
              <Link>
                <li>Home</li>
              </Link>

              <Link>
                <li>Affiliate</li>
              </Link>

              <Link>
                <li>Category</li>
              </Link>

              <Link>
                <li>Collection</li>
              </Link>

              <Link>
                <li>Blogs</li>
              </Link>
           
            </ul>
          </div>
          <div className='header-down-right'>
                <div className='icons'>
                <div className='search-icon'>
                <IoSearch color='#fff'/>
                </div>

                <div className='cart-icon'>
                    <RiShoppingBasketLine color='#fff'/>
                </div>
                </div>

                <div className='register-button'>
                    <button>Register</button>
                </div>

                <div className='signin-button'>
                <button>Sign In</button>
                </div>
            </div>
          
        </div>
    </header>
    </>
  )
}

export default Header
