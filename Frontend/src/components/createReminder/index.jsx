import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function CreateReminder() {

  const [URLhash, setURLhash] = useState('')

  return (
    <div className="Container" style={{display: 'none'}}>

      <div className='Modal'>

        <input type="text" placeholder='Titulo' className='Title-input' />

        <input type="text" placeholder='Titulo' className='Details-input' />

      </div>

    </div>
  );
}

