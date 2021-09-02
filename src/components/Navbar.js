import React,{useEffect} from 'react';
import './Navbar.css';
import {Link,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logoutUser} from '../Redux/actions/users';

function Navbar() {
    const cartState = useSelector(state => state.cart);
    const userState = useSelector(state => state.users);
    const {userInfo} = userState;
    const {cartItems} = cartState;
    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogout(){
        dispatch(logoutUser())
        history.push('/')
        window.location.reload()

    }

    return (
        <div className="container nav-container py-1 flex">
            <Link to='/' className="link">
                <h1 className="logo">by<span className="logo-red">t</span>e</h1>
            </Link>
            <div className="flex">
                <div className="search-box">
                    <input type="text" name="search" className="search-box" placeholder="Search..."/>
                    <i className="fas fa-search"></i>
                </div>

                <div className="dropdown">
                    <Link className="link login-link" to='/signin'>
                        <button className={userInfo ? "btn btn-primary nav-btn login-btn" : "btn btn-primary nav-btn"}>{userInfo ? userInfo.name : "Sign In"}</button>
                    </Link>
                    {userInfo ? 
                        <ul className="lo-ul">
                            <button className="lo-btn btn" onClick={handleLogout}>Log Out</button>
                        </ul> 
                        :
                        <>
                        </>
                    }

                </div>
                <Link to='/cart' className="link cart-link"><i class="fas fa-shopping-cart"><span className="cart-count">{cartItems.length}</span></i></Link>
            </div>

        </div>
    )
}

export default Navbar;
