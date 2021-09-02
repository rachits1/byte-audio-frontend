import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {saveShippingDetails} from '../../Redux/actions/cart';
import TopBox from '../TopBox';

function RegisterScreen() {
    const history = useHistory()
    const dispatch = useDispatch()
    const userState = useSelector(state => state.users)
    const cartState = useSelector(state => state.cart)
    const {shippingDetails} = cartState
    const {userInfo} = userState;
    if (!userInfo){
        history.push('/signin')
    }
    const [formData,setFormData] = useState({
        name: shippingDetails.name,address: shippingDetails.address,city: shippingDetails.city,postalCode: shippingDetails.postalCode,country: shippingDetails.country
    })
    const {name,address,city,postalCode,country} = formData;

    function handleSubmit(event){
        event.preventDefault()
        dispatch(saveShippingDetails(name,address,city,postalCode,country))
        history.push('/orders')
    }

    return (
    <>

    <div className="signin-container flex column">
    <TopBox first second/>
        <h1 className="text-center my-2">Shipping Details</h1>
        <form className="signin-form p-2" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=> setFormData({...formData,name: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={address} onChange={(e)=> setFormData({...formData,address: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={city} onChange={(e)=> setFormData({...formData,city: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" name="postalCode" id="postalCode" value={postalCode} onChange={(e)=> setFormData({...formData,postalCode: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" value={country} onChange={(e)=> setFormData({...formData,country: e.target.value})}/>
            </div>

            <button className="btn si-btn" type="submit">Continue</button>
        </form>
    </div>
    </>
    )
}

export default RegisterScreen
