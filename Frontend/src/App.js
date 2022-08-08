import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Reminder from './components/reminder';
import CreateReminder from './components/createReminder';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const teste = [
    { title: 'a', name: 'a', date: 'a' },
    { title: 'b', name: 'a', date: 'a' },
    { title: 'c', name: 'a', date: 'a' },
    { title: 'd', name: 'a', date: 'a' },
    { title: 'e', name: 'a', date: 'a' },
    { title: 'f', name: 'a', date: 'a' },
  ]

  const [reminderList, setReminderList] = useState([])

  const RenderList = () => {

    return (
      reminderList.map((item, i) =>
        <Reminder Title={item.title} Name={item.name} Date={item.date} />
      )
    )

  }

  useEffect(() => {

    axios.get('https://ik-solution-api.herokuapp.com/reminders').then(resp => {
      setReminderList(resp.data)
    });

  }, [])


  return (
    <div className="App">

      <Header />
      <CreateReminder />

      <div className='Content-div'>
        <Sidebar />
        <div className='Reminder-list'>

          <RenderList />

        </div>
      </div>

    </div>
  );
}

export default App;
