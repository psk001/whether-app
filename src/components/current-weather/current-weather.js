import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Delhi</p>
          <p className="weather-description">Rainy</p>
        </div>

        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </div>

      <div className="bottom">
        <p className="temperature">15° C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22 °C </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">22 kmph </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15% </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">35pa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
