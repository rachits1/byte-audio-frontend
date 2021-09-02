import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getRegisterInfo} from '../../Redux/actions/users';

function RegisterScreen(props) {
    const userState = useSelector(state => state.users)
    const {userInfo} = userState;
    const [formData,setFormData] = useState({
        name: '',email: '',password: '',confirmPassword: ''
    })
    const {name,email,password,confirmPassword} = formData;

    const dispatch = useDispatch()
    const history = useHistory()

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    function handleSubmit(){
        if (password !== confirmPassword){
            alert("Passwords don't match")
        } else {
            dispatch(getRegisterInfo(name,email,password))
        }
    }

    useEffect(()=>{
        if (userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])

    return (
    <div className="signin-container flex column">
        <h1 className="text-center my-2">Register</h1>
        <form className="signin-form p-2" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=> setFormData({...formData,name: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e)=> setFormData({...formData,email: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=> setFormData({...formData,password: e.target.value})}/>
            </div>

            <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e)=> setFormData({...formData,confirmPassword: e.target.value})}/>
            </div>

            <button className="btn si-btn" type="submit">Register</button>
            <h5 className="py-2">Already Have An Account ? <Link to='/signin' className="si-link">Sign In</Link></h5>
        </form>
    </div>
    )
}

export default RegisterScreen
