import React, { Component } from 'react';
import Login_Helper from './Login_Helper';
var PropTypes = require('prop-types');

export default class Login extends Component {;
  constructor(props) {
    super(props);
    this.handleSignInAttempt = this.handleSignInAttempt.bind(this);
    this.handleSignUpAttempt = this.handleSignUpAttempt.bind(this);
  }
  static props = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: false
  }

  state = {
    errorMsg: "",
    signin_email: "",
    signin_password: "",
    create_first_name:"",
    create_middle_initial:"",
    create_last_name:"",
    create_email:"",
    create_password:"",
    create_company:"",
    create_street_address:"",
    create_city:"",
    create_state_address:"",
    create_zip_code:"",
    create_country:""
  }

  handleSignInEmail(e) {
    this.setState({signin_email: e.target.value});
  }

  handleSignInPassword(e) {
    this.setState({signin_password: e.target.value});
  }
  handleUpdateFirstName(e) {
    this.setState({create_first_name: e.target.value});
  }

  handleUpdateMiddleInitial(e) {
    this.setState({create_middle_initial: e.target.value});
  }

  handleUpdateLastName(e) {
    this.setState({create_last_name: e.target.value});
  }

  handleUpdateCreateEmail(e) {
    this.setState({create_email: e.target.value});
  }
  handleUpdateCreatePassword(e) {
    this.setState({create_password: e.target.value});
  }

  handleUpdateCompany(e) {
    this.setState({create_company: e.target.value});
  }

  handleUpdateStreet(e) {
    this.setState({create_street_address: e.target.value});
  }

  handleUpdateCity(e) {
    this.setState({create_city: e.target.value});
  }

  handleUpdateStateAddress(e) {
    this.setState({create_state_address: e.target.value});
  }

  handleUpdateZipCode(e) {
    this.setState({create_zip_code: e.target.value});
  }

  handleUpdateCountry(e) {
    this.setState({create_country: e.target.value});
  }

  async handleSignInAttempt(e) {
    let getUsersPromise = Login_Helper.getAllUsers(this.state.signin_email, this.state.signin_password);

    getUsersPromise.then((users) => {
      users.forEach((user) => {
        var data = user.data();
        if (data['email'] === this.state.signin_email && data['password'] === this.state.signin_password) {
          Login_Helper.handleSignInSuccess();
          return true;
        } else if (data['email'] === this.state.username) {
          return false;
        }
      });
      this.handleSignInFailure("Invalid Email or Password. If you don't have an account, create one below");
    });
  }

  async handleSignUpAttempt(e) {
    let returnVal = Login_Helper.signUp(this.state);
    returnVal.then(e => {
      alert("KJDFHKJSHDF");
      alert(e);
      console.log(e);
    });
  }

  handleSignInFailure(message = "") {
    this.setState({errorMsg: message});
  }

  componentDidMount() {
    console.log("Loading Login Page with " + this.props.isLoggedIn);
    if (this.props.isLoggedIn) {
      window.location = "/home";
    }
  };

  render() {
    return (
	    <div>
	    	<div className="form-group">
	    	   <input type="text" name="email" id="login-email" tabIndex="1" className="form-control" placeholder="Email" value={this.state.username} onChange={e => this.handleSignInEmail(e)}/>
	    	</div>
	    	<div className="form-group">
	    	  <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" onChange={e=> this.handleSignInPassword(e)}/>
        </div>
        {this.state.errorMsg !== "" &&
           <p className="text-danger">{this.state.errorMsg}</p>
        }
        <button type="submit" name="login-submit" id="login-submit" tabIndex="3" className="form-control btn btn-login" value="Log In" onClick={this.handleSignInAttempt}>Sign In</button>

        <p>This is the login component: {this.props.isLoggedIn.toString()}</p>
        <div className="form-group">
            <input type="text" className="form-control" id="first-name" tabIndex="4" placeholder="First Name" onChange={e=> this.handleUpdateFirstName(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="last-name" tabIndex="5" placeholder="Last Name" onChange={e=> this.handleUpdateLastName(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="middle-initial" tabIndex="6" placeholder="Middle Initial" onChange={e=> this.handleUpdateMiddleInitial(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="email" tabIndex="7" placeholder="Email" onChange={e=> this.handleUpdateCreateEmail(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="password-create" tabIndex="8" placeholder="Password" onChange={e=> this.handleUpdateCreatePassword(e)}/>
        </div>
  <div className="form-group">
            <input type="text" className="form-control" id="street-address" tabIndex="9" placeholder="Street" onChange={e=> this.handleUpdateStreet(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="city" tabIndex="10" placeholder="City" onChange={e=> this.handleUpdateCity(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="state" tabIndex="11" placeholder="State" onChange={e=> this.handleUpdateStateAddress(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="country" tabIndex="12" placeholder="Country" onChange={e=> this.handleUpdateCountry(e)}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="zip" tabIndex="13" placeholder="Zip Code" onChange={e=> this.handleUpdateZipCode(e)}/>
        </div>
        <button type="submit" name="create-submit" id="create-submit" tabIndex="14" className="form-control btn btn-login" value="Create" onClick={this.handleSignUpAttempt}>Create</button>
    </div>
    );
  }
}

