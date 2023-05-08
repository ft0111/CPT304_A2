import './App.css';
import holidy from './component/holidy';
import hotel from './component/hotel';
import weather from './component/weather';

function App() {
  return (
    <>
      year :
      <input type="text" placeholder="eg. 2019, 2022" id="year"></input>
      <br/>
      country :
      <input type="text" placeholder="eg. CN, US" id="country"></input>
      <br/>
      <button onClick={holidy}>Search</button>
      <table id="holidayTable"></table>

      city :
      <input type="text" placeholder='eg. new york' id="city"></input>
      <input type="text" placeholder='eg. 2020-5-8' id="date"></input>
      <br/>
      <button onClick={hotel}>Hotel</button>
      <button onClick={weather}>Weather</button>

      <table id="hotelTable"></table>

      <table id="weatherTable"></table>
      
    </>

  );
}

export default App;
