import React from 'react'
import logo from '../logo.svg';



export default function NavBar(props) {

 

  return (
    <div>
        <div className='fixed-top' id='navbar' style={{display:'flex', justifyContent: 'space-between', backgroundColor: props.styl.bgclr, color: props.styl.txtclr }}>
            <div>
                <img src={logo} className='App-logo1' alt={'App-logo1'}/>
            </div>
            <div style={{display:'flex', marginRight:100}}>
            <div className="form-check form-switch" style={{padding:15}}>
  <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
  
</div>
                <div style={{padding:15}}><a href='/'>Home</a></div>
                <div style={{padding:15}}><a href='/signin'>SignIn</a></div>
                <div style={{padding:15}}><a href='/signup'>SignUp</a></div>
            </div>
        </div>
        <hr/>
    </div>
  )
}
