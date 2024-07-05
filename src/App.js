import './App.css';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className='container'>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
    </div>
  );
}

export default App;
