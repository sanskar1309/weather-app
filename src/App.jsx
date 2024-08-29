import React from 'react';
import CityInput from './components/CityInput';
import WeatherDetails from './components/WeatherDetails';
import Loader from './components/Loader'; // Import the Loader component
import backgroundImage from '../src/assets/bgimg.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: '',
      route: 'search',
      temp: 0,
      windSpeed: 0,
      humidity: 0,
      condition: '',
      alert: '',
      icon: '',
      loading: false, // Add a loading state
    };
  }

  onCitySearchChange = (event) => {
    this.setState({ cityName: event.target.value });
  }

  onSearch = () => {
    this.setState({ loading: true }); // Start the loader
  
    // Simulate a delay to test the loader
    setTimeout(() => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=dc8caf5e8f834de195f72918212506&q=${this.state.cityName}`)
        .then(response => response.json())
        .then(data => {
          if (Object.keys(data).length > 1) {
            if (data.location.name.toLowerCase() === this.state.cityName.toLowerCase()) {
              this.setState({
                route: 'result',
                temp: data.current.temp_c,
                windSpeed: data.current.wind_kph,
                humidity: data.current.humidity,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                loading: false, // Stop the loader
              });
            } else {
              this.setState({ route: 'search', alert: 'No City Found', loading: false });
            }
          } else {
            this.setState({ route: 'search', alert: 'No City Found', loading: false });
          }
        })
        .catch(() => {
          this.setState({ route: 'search', alert: 'No City Found', loading: false });
        });
    }, 1000); // 3-second delay for testing
  }

  onSearchButton = (event) => {
    if (event.which === 13) {
      this.onSearch();
    }
  }

  render() {
    const { alert, route, temp, windSpeed, humidity, condition, icon, loading } = this.state;

    return (
      <div
        className="relative flex flex-col min-h-screen text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative p-8 mt-4 md:mt-4">
          <CityInput
            onCitySearchChange={this.onCitySearchChange}
            onSearch={this.onSearch}
            onSearchButton={this.onSearchButton}
          />
        </div>

        <div className="relative p-8  ">
          {loading ? (
            <Loader /> 
          ) : route === 'result' ? (
            <div className="mt-8">
              <WeatherDetails
                temp={temp}
                windSpeed={windSpeed}
                humidity={humidity}
                condition={condition}
                icon={icon}
              />
            </div>
          ) : (
            <div className="text-red-500 text-center">{alert}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
