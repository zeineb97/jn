import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    level: 0,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="file-field input-field">
            <div class="btn pink lighten-1 z-depth-0">
            <span>Profile Picture</span>
            <input type="file" accept="image/*" onChange={this.handleChange}/>
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="displayName">Display Name</label>
            <input type="text" id='displayName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="materialize-textarea">
            <label htmlFor="bio">Bio</label>
            <textarea type="text" id='bio' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="level">Level</label>
            <input type="number" id='level' onChange={this.handleChange} />
          </div>

         
          
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
