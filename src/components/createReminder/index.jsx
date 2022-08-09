import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function CreateReminder({ active, onCancel, onSubmit, onCatch, editObject }) {

  const [formData, setFormData] = useState({})
  const [isEditing, setIsEditing] = useState(false)

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

  useEffect(() => {

    if (Object.keys(editObject) != 0) {
      setIsEditing(true)

      let datetime = editObject.datetime.split(' ');

      setTitle(editObject.title)
      setname(editObject.name)
      setdate(datetime[0])
      settime(datetime[1])
    }
    else {
      setIsEditing(false)
      setTitle('')
      setname('')
      setdate('')
      settime('')
    }

  }, [editObject, active])

  const OnSubmitPress = () => {
    if (!isEditing) {
      SubmitData()
    }
    else {
      EditData()
    }
  }

  const SubmitData = async () => {
    axios.post('https://ik-solution-api.herokuapp.com/new-reminder', {
      name: formData.name,
      datetime: formData.datetime,
      title: formData.title
    })
      .then(resp => {
        onSubmit()
      })
      .catch(err => {
        onCatch(err)
      });
  }

  const EditData = async () => {
    axios.patch('https://ik-solution-api.herokuapp.com/update-reminder', {
      id: editObject.id,
      name: formData.name,
      datetime: formData.datetime,
      title: formData.title
    })
      .then(resp => {
        onSubmit()
      })
      .catch(err => {
        onCatch(err)
      });
  }

  const DeleteReminder = async () => {
    axios.delete('https://ik-solution-api.herokuapp.com/delete-reminder', {
      data: {id: editObject.id} 
    })
      .then(resp => {
        console.log(resp)
        onSubmit()
      })
      .catch(err => {
        console.log(err)
        onCatch(err)
      });
  }



  return (
    <div className="Container" style={{ display: active ? 'flex' : 'none' }}>

      <div className='Modal'>

        <input
          type="text"
          placeholder='Titulo'
          className='Title-input'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          type="text"
          placeholder='Crie um lembrete...'
          cols='6'
          maxLength={180}
          className='Details-input'
          onChange={(e) => setname(e.target.value)}
          value={name}
        />

        <input
          type="date"
          className='Date-input'
          onChange={(e) => setdate(e.target.value)}
          value={date}
        />

        <input
          type="time"
          className='Date-input'
          onChange={(e) => settime(e.target.value)}
          value={time}
        />

        <div className='Buttons-div'>
          <button className='Cancel-buttom' onClick={() => onCancel()}>Cancelar</button>
          <button onClick={() => OnSubmitPress()}>{isEditing ? 'Alterar lembrete' : 'Criar Lembrete'}</button>
        </div>

        <button

          className='Delete-buttom'
          style={{ display: isEditing ? 'block' : 'none' }}
          onClick={() => DeleteReminder()}>
          Excluir Lembrete
        </button>

      </div>

    </div>
  );
}

