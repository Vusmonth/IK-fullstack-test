import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function CreateReminder({ active, onCancel, onSubmit }) {

  const [formData, setFormData] = useState({})

  const [title, setTitle] = useState('')
  const [name, setname] = useState('')
  const [date, setdate] = useState('')
  const [time, settime] = useState('')

  useEffect(() => {

    setFormData({
      title: title,
      name: name,
      datetime: date + ' ' + time
    })

  }, [title, name, date, time])

  return (
    <div className="Container" style={{ display: active ? 'flex' : 'none' }}>

      <div className='Modal'>

        <input
          type="text"
          placeholder='Titulo'
          className='Title-input'
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          placeholder='Crie um lembrete...'
          cols='6'
          maxLength={180}
          className='Details-input'
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="date"
          className='Date-input'
          onChange={(e) => setdate(e.target.value)}
        />

        <input
          type="time"
          className='Date-input'
          onChange={(e) => settime(e.target.value)}
        />

        <div className='Buttons-div'>
          <button className='Cancel-buttom' onClick={() => onCancel()}>Cancelar</button>
          <button onClick={() => onSubmit(formData)}>Criar Lembrete</button>
        </div>

      </div>

    </div>
  );
}

