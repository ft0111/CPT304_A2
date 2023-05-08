import './App.css';
import holiday from './component/holiday';
import hotel from './component/hotel';
import weather from './component/weather';

function App() {
  return (
    <>
      Year :
      <input type="text" placeholder="eg. 2022" id="year"></input>
      <br/>
      Country :
      <input type="text" placeholder="eg. CN" id="country"></input>
      <br/>
      <button onClick={holiday}>Search Holiday</button>
      <table id="holidayTable"></table>

      City :
      <input type="text" placeholder='eg. london' id="city"></input>
      <input type="text" placeholder='eg. 2022-6-1' id="date"></input>
      <br/>
      <button onClick={hotel}>Search Hotel</button>
      <button onClick={weather}>Search Weather</button>

      <table id="hotelTable"></table>

      <table id="weatherTable"></table>
      
    </>

  );
}

export default App;
