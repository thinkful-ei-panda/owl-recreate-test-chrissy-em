import React from 'react';
// import STORE from '/.store';

// function to create a participant

export default function Participant(props) {

  return (

    <div className='Participant'>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.avatar}</p>
      <p>{props.inSession}</p>
      <p>{props.onStage}</p>
    </div>

  )
}