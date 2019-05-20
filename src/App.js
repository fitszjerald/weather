import React, { Component } from 'react'
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

import 'bootstrap/dist/css/bootstrap.css';
const API_TOKEN = '34deb606163c72f42440c915fc116f0f';



class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      tempreature:'',
      country:'',
      city:'',
      weather:""
    }
  }
  
  // componentDidMount(){
      getData = (e) =>{
      e.preventDefault()
          const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_TOKEN}`)
      .then(data=>data.json())
      .then(result=>{
      this.setState({
        tempreature:result.main.temp,
        country:result.sys.country,
        city:result.name,
        weather:result.weather[0].description
      })
      })
    }
  // }

  // getData = async (e) => {
  //   e.preventDefault();
    
  //   const city = e.target.elements.city.value
  //   const country = e.target.elements.country.value
  //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_TOKEN}`)
  //   const result =await api_call.json()
  //   console.log(result)
  //   this.setState({
  //     tempreature:result.main.temp,
  //     country:result.sys.country,
  //     city:result.name
  //   })
  // }
  render() {
    return (
      <div className="main-bg">
      <div className='container app-bg'>
        <div className='row justify-content-center'>

          <div className='color-bg col-lg-6'>
            <div className=' title-bg'>
              <Title />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='weather-get'>
            <Form getData={this.getData} />
              <Weather 
                tempreature={this.state.tempreature}
                city={this.state.city}
                country={this.state.country}
                weather={this.state.weather}
              />
            
            </div>
          </div>          
        </div>
      </div>
     </div>
    )
  }
}

export default App;
