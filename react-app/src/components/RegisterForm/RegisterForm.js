import React from 'react';

class RegisterForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event)=>{
		this.setState({name:event.target.value})
	}

	onEmailChange = (event)=>{
		this.setState({email:event.target.value})
	}

	onPasswordChange = (event)=>{
		this.setState({password:event.target.value})
	}

	onRegisterClick = () =>{
		const {name, password, email} = this.state;
		fetch('https://mysterious-hollows-03588.herokuapp.com/register',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: password,
				name:name
			})
		})
		.then(res=>res.json())
		.then(user=>{
			if (user){
				this.props.loadUser(user);
				this.props.Register('sign_in')
			}
		})
		
	}

	render(){
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="fw6 ph0 mh0 f1">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" forhtml="text">User name</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="text"
				        onChange={this.onNameChange}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" forhtml="email-address">Email</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" forhtml="password">Password</label>
				        <input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.onPasswordChange}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.onRegisterClick}/>
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default RegisterForm;