import React from 'react';
// import Participant from './Participants';
// import STORE from '/.store';

// new Date(timestamp)

export default function Chatlog(props) {
  console.log(props)
  return (

    <section className='Chatlog'>

      <div classname='Chatlog-entry'>
        {props.STORE.chatEvents.map((participant) =>
        <Chatlog 
        participantId={props.participantId}
        type={props.type}
        message={props.message}
        time={props.time}
        timestamp={props.timestamp}        
        />
        )}

      </div>
    </section>


  );
}