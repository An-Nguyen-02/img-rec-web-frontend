import './App.css';
import React from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import Rank from '../components/Rank/Rank.js';
import Input from '../components/Input/Input.js';
import Image from '../components/Image/Image.js';
import SignInForm from '../components/SignInForm/SignInForm.js';
import RegisterForm from '../components/RegisterForm/RegisterForm.js';
import Particles from 'react-tsparticles';
import particles_option from './particle_option.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      searchField : '',
      imgURL:'',
      webpage: 'sign_out',
      box: {
          leftCol: 0,
          topRow: 0,
          rightCol: 0,
          bottomRow: 0
        },
      user:
      {
        id: '',
        name: '',
        email: '',
        entries : '',
        joined: new Date()

      }
    }
  }

  loadUser = (user_) => {
    const {id, name, email, joined, entries} = user_;
    this.setState({user:{
      id: id,
      name: name,
      email: email,
      entries: entries,
      joined: joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onSearchChange = (event) =>{
    this.setState({searchField:event.target.value})
  }

  onPageChange = (page) =>{
    this.setState({webpage:page})
  }

  onButtonClick = () => {
  this.setState({imgURL: this.state.searchField});
    fetch('https://mysterious-hollows-03588.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.searchField
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://mysterious-hollows-03588.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(console.log)

      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  render() {
    const {imgURL, webpage, user, box} = this.state;
    return(
    <div className="App">
        <Particles params={particles_option} />
        <Navigation PageChange={this.onPageChange} Webpage={webpage}/>
        {webpage ==='sign_in' ?
          <div>
            <Logo />
            <Rank name={user.name} rank={user.entries}/>
            <Input searchChange={this.onSearchChange} buttonClick={this.onButtonClick}/>
            <Image imgURL={imgURL} box={box}/>
          </div>:
          ( webpage === 'sign_out' ?
            <SignInForm PageChange={this.onPageChange} loadUser={this.loadUser}/>: 
            <RegisterForm Register={this.onPageChange} loadUser={this.loadUser}/>
          )
        }
    </div>
  );};
}

export default App;
