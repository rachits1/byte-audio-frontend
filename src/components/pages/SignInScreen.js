import React,{useState,useEffect} from 'react';
import './SignInScreen.css';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getUserInfo} from '../../Redux/actions/users'

function SignInScreen(props) {
    const userState = useSelector(state => state.users)
    const {userInfo} = userState;
    const [formData,setFormData] = useState({
        email: '',password: ''
    })
    const {email,password} = formData;
    const dispatch = useDispatch()
    const history = useHistory()

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    function handleSubmit(event){
        event.preventDefault()
        dispatch(getUserInfo(email,password))
    }

    
    useEffect(()=>{
        if (userInfo){
            history.push(redirect)
        }
    },[userInfo,history,redirect])

    return (
        <div className="signin-container flex column">
            <h1 className="text-center my-2">Login</h1>
            <form className="signin-form p-2" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={(e)=> setFormData({...formData,email: e.target.value})}/>
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={(e)=> setFormData({...formData,password: e.target.value})}/>
                </div>

                <button className="btn si-btn" type="submit">Sign In</button>
                <h5 className="py-2">New Here ? <Link to='/register' className="si-link">Create Account</Link></h5>
            </form>
        </div>
    )
}

export default SignInScreen
