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
  const [createActive, setcreateActive] = useState([])

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

  const SubmitData = async (data) => {
    setcreateActive(false)
    axios.post('https://ik-solution-api.herokuapp.com/new-reminder', {
      data
    })
      .then(resp => {
        setReminderList(resp.data)
      });
  }


  return (
    <div className="App">

      <Header />
      <CreateReminder
        active={createActive}
        onCancel={() => setcreateActive(false)}
        onSubmit={(e) => SubmitData(e)}
      />

      <div className='Content-div'>
        <Sidebar createReminder={() => setcreateActive(true)} />

        <div className='Reminder-list'>
          <RenderList />
        </div>

      </div>

    </div>
  );
}

export default App;
