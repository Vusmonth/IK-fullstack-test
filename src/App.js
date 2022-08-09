import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Reminder from './components/reminder';
import CreateReminder from './components/createReminder';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [reminderList, setReminderList] = useState([])
  const [createActive, setcreateActive] = useState(false)

  const [editingReminder, setEditingReminder] = useState({})

  const RenderList = () => {

    return (
      reminderList.map((item, i) =>
        <Reminder onClick={() => { setEditingReminder(item); setcreateActive(true) }} Title={item.title} Name={item.name} Date={item.datetime} />
      )
    )
  }

  useEffect(() => {
    FetchData()
  }, [])

  const SubmitData = async () => {
    setcreateActive(false)
    FetchData()
  }

  const FetchData = async () => {
    axios.get('https://ik-solution-api.herokuapp.com/reminders').then(resp => {
      setReminderList((resp.data).reverse())
    });
  }


  return (
    <div className="App">

      <Header />
      <CreateReminder
        active={createActive}
        onCancel={() => setcreateActive(false)}
        onSubmit={() => SubmitData()}
        onCatch={(err) => alert(err)}
        editObject={editingReminder}
      />

      <div className='Content-div'>
        <Sidebar createReminder={() => {setcreateActive(true); setEditingReminder({})}} />

        <div className='Reminder-list'>
          {reminderList.length == 0 ? <h4>Nenhum lembrete definido</h4> : <RenderList />}
          
        </div>

      </div>

    </div>
  );
}

export default App;
