import { useState } from 'react';
import inputDateConvert from '../../utils/inputDateConvert';
import './style.css';

export default function Reminder({ Title, Name, Date, onClick}) {

  let _date = []

  if(Date != undefined && Date != null){
    _date = Date.split(' ')
    _date[0] = inputDateConvert(_date[0])
  }

  return (
    <div onClick={() => onClick()} className="reminder">

      <div className='content-div'>
        <strong>
          {Title}
        </strong>

        <p>{Name}</p>
      </div>

      <div className='Datetime'>
        <p className='Date-text'>{_date[0] + ' ' + _date[1]}</p>
      </div>

    </div>
  );
}

