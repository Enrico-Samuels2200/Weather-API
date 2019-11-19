import React from 'react';

const Form = props =>{
        return(
            <div>
                <form onSubmit={props.loadWeather} className="inputForm">
                    <input type="text" placeholder="Enter city name" name="city" autoComplete="off"/> {/*Updates event on change and uses the name 'city' as a reference to call element to recieve the value.*/}
                    <button>Get Weather</button>
                    <hr/>
                </form>
            </div>
        )
    }
export default Form