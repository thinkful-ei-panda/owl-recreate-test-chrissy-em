import React from 'react';
import Participant from './Participant';
// import STORE from '/.store';

export default function Stage(props) {
  return (

    <section className='Stage'>
      
      <header className='Stage-header'>
        <h2>{props.name}</h2>
      </header>
        
        <div className='Participant-stage'>
          {props.STORE.participants.map((participant) =>
          <Participant 
          key={participant.id}
          name={participant.name}
          avatar={participant.avatar}
          inSession={participant.inSession}
          onStage={participant.onStage}
          />
          )}

        </div>
    </section>

  );

}