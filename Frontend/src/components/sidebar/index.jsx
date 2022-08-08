import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

export default function Sidebar({createReminder}) {

  const [URLhash, setURLhash] = useState('')

  useEffect(() => {
    setURLhash(window.location.hash)
  }, [window.location.hash]) 

  return (
    <div className="Side-menu">

      <button onClick={() => createReminder()}>
        Criar um lembrete
      </button>

      <div 
      onClick={() => setURLhash('#all')}
      className={URLhash == "#all" ? 'Nav-link-selected' : 'Nav-link'}>
        <a href="#all">Todos</a>
      </div>

      <div 
      onClick={() => setURLhash('#open')}
      className={URLhash == "#open" ? 'Nav-link-selected' : 'Nav-link'}>
        <a href="#open">Em aberto</a>
      </div>

      <div 
      onClick={() => setURLhash('#late')}
      className={URLhash == "#late" ? 'Nav-link-selected' : 'Nav-link'}>
        <a href="#late">Atrasados</a>
      </div>

    </div>
  );
}

