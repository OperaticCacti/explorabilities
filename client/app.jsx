import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import MapContainer from './components/MapContainer.jsx';
import Place from './components/Place.jsx';
import ItineraryList from './components/itineraryList.jsx';

import data from "./stubs.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      data: [
        {
          "id": 1,
          "city": "SF",
          "state": "CA",
          "thingsToEat": ["california pizza", "sushirito"],
          "hotSpot": ["Golden Gate Bridge", "Piers 19", "Muir Woods"]
        },
        {
          "id": 2,
          "city": "Oakland",
          "state": "CA",
          "thingsToEat": ["Sushi", "Barbeque Chicken"],
          "hotSpot": ["Lake Meritt", "Broadway St"]
        },
        {
          "id": 3,
          "city": "NYC",
          "state": "NY",
          "thingsToEat": ["Buffalo Wings", "New York Pizza"],
          "hotSpot": ["Central Park", "Broadway Theatre", "Statue of Loberty"]
        }
      ]
    };
  }
  render() {
    return (
      <div id="exploreBody">
        <div id="exploreContainer">
          <Nav />
          <MapContainer updatePlace={this.updatePlace.bind(this)}/>
          <div id="exploreContent" className="clearfix">
            <Place place={this.state.place}/>
            <ItineraryList list={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }

  updatePlace(place) {
    console.log('Place set');
    console.log(place);
  }
}
