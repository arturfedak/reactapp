import React from 'react';
import Form from './Form';
import WeatherComponent from './WeatherComponent';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <WeatherComponent />
                <Form />
            </div>
        )
    }
}

export default Home;