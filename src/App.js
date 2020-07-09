import React from 'react';
import './App.css';
import ButtonRipple from "./componets/buttonripple";

const  App= () =>{

  return (
   <div className="page-content ">
     <div className="react_form">
    <div className="form-left">
				<h2>INFOMATION</h2>
				<p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.</p>
				<p className="text-2"><span>Fill All the info</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae, voluptatum iure consequatur, laboriosam officiis, voluptate rem accusantium beatae laudantium itaque similique. Omnis culpa distinctio libero, earum dolor voluptas a.</p>
				<div className="form-left-last">
          <ButtonRipple onClick={e => console.log(e)}>Have An Account</ButtonRipple>
			  </div>
    </div>
    <form className="form-detail" action="#" method="post" id="myform">
				<h2>REGISTER FORM</h2>
				<div className="form-group">
					<div className="form-row form-row-1">
						<label htmlFor="first_name">First Name</label>
						<input type="text" name="first_name" id="first_name" className="input-text" required />
					</div>
					<div className="form-row form-row-1">
						<label htmlFor="last_name">Last Name</label>
						<input type="text" name="last_name" id="last_name" className="input-text" />
					</div>
				</div>
				<div className="form-row">
					<label htmlFor="your_email">Your Email</label>
					<input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
				</div>
				<div className="form-group">
					<div className="form-row form-row-1 ">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" className="input-text" required />
					</div>
					<div className="form-row form-row-1">
						<label htmlFor="comfirm-password">Comfirm Password</label>
						<input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required />
					</div>
				</div>
				<div className="form-checkbox">
					<label className="container"><p>I agree to the <a href="href" className="text">Terms and Conditions</a></p>
					  	<input type="checkbox" name="checkbox" />
					  	<span className="checkmark"></span>
					</label>
				</div>
				<div className="form-row-last">
          <ButtonRipple onClick={e => console.log(e)}>Register</ButtonRipple>
				</div>
			</form>
      
     </div>
     
   </div>
  );
}

export default App;
