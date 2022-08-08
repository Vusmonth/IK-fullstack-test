import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function Reminder({ Title, Name, Date }) {

  return (
    <div className="reminder">

      <div className='content-div'>
        <strong>
          {Title}
        </strong>

        <p>{Name}</p>
      </div>

      <div className='Datetime'>
        <p className='Date-text'>{Date}</p>
      </div>

    </div>
  );
}

