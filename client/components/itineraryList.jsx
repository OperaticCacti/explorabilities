import React from 'react';
import ItineraryListItem from './itineraryListItem.jsx';

const ItineraryList = (props) => {
  let headerText = 'Itinerary';
  let saveButton = '';
  let reorderButton = '';
  let emailButton = '';

  if (props.query.name) {
    headerText += ' for ' + props.query.name;
  }

  if (props.saveMessage.length === 0) {
    saveButton = <button className="save-itinerary" onClick={props.saveItinerary}>Save Itinerary</button>;
  }

  if (props) {
    reorderButton = <button className="reorder" onClick={props.reorderItinerary}>Reorder Itinerary</button>;
  }

  if (props) {
    emailButton = <button className="email" onClick={props.emailItinerary}>Email Itinerary</button>;
  }

  return (
    <div id="itinerary">
      <div className="clearfix">
        <h3 className="itineraryHeader">{headerText}</h3>
        {reorderButton}
        {saveButton}
        <p className="save-itinerary save-text">{props.saveMessage}</p>
      </div>
      <ul>
        {Object.keys(props.list).map((key) => (
            <ItineraryListItem
              key={props.list[key].place_id}
              place={props.list[key]}
              /* Binding list[key].id as the first argument when RemoveItem is called */
              removeItem={props.removeItem.bind(this, props.list[key].place_id)}
            />
          ))}
      </ul>
      {emailButton}
    </div>
  );
};

export default ItineraryList;
