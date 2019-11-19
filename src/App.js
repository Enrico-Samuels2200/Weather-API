import React from 'react';
import 'isomorphic-fetch';
import './App.css';
import Form from './Form';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { //Creates the state for the Class.
      city: "",
      weather_type: "",
      min_temperature: 0 + "°C",
      max_temperature: 0 + "°C",
      wind_speed: 0 + " km/h",
    }
  }

  fetchWeather = async(val) => { //Gets event data from form input.
    val.preventDefault(); //Prevents the form from refreshing on submit.

    const city = val.target.city.value; //Uses the cities name and save a as constant.

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4189d4a420d6e706009863c17d510bfd`); //fetches the API based on the const "city" and API key.
    const get = await res.json(); //Converts the API from a string into code. 
      try {
        this.setState({ //Sets the state to the chosen converted data.
          city: get.name,
          weather_type: get.weather[0].description,
          max_temperature: (get.main.temp_max - 273.15).toFixed(0) + "°C", //Converts the from kelvin to degrees celsius and put it no decimal places.
          min_temperature: (get.main.temp_min - 273.15).toFixed(0) + "°C",
          wind_speed: (get.wind.speed * 1.852).toFixed(0) + " km/h", //Places wind speed to no decimal places.
        })
      }
      catch(err){ //If there is an error retrieving the data or it's not available it will return this.
        this.setState({ //Sets the state.
          city: "Doesn't exist", //Displays if there is an error in recieving the data or if data doesn't exist.
          weather_type: "",
          min_temperature: 0,
          max_temperature: 0,
          wind_speed: 0,
        })
      }
    }

  render(){
      return (
        <div>
          <h1>{this.state.city}</h1> {/*Retrieves name from the state.*/}
          <Form loadWeather={this.fetchWeather}/> {/*Sets loadWeather value to that of the inputted value of fetchWeather.*/}
          <h1 id="W_P">Weather Type</h1>
          <h2>{this.state.weather_type}</h2>{/*Retrieves weather from the state.*/}
          <hr/>
          <h1 id="Max_T">Max Temperature</h1>
          <h2>{this.state.max_temperature}</h2>
          <hr/>
          <h1 id="Min_T">Min Temperature</h1>
          <h2>{this.state.min_temperature}</h2>
          <hr/>
          <h1 id="W_S">Wind Speed</h1>
          <h2>{this.state.wind_speed}</h2>
        </div>
      );
    
    }
  }