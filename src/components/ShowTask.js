import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export const ShowTask = () => {
  
  const [showTask, setShowTask] = useState(false);

  const tasks = [
    { id: 1, name: 'Task A', time: '10:06 PM 4/7/2024' },
    { id: 2, name: 'Task B', time: '10:06 PM 4/07/2024' },
    { id: 3, name: 'Task C', time: '10:06 PM 4/07/2024' },
  ];

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasks.length}</span>
        </div>
        <button className='clearAll'>Clear all</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'>{task.time}</span>
            </p>
            <i className='bi-pencil-square'>
              <MdEdit />
            </i>
            <i className='bi-trash'>
              <MdDelete />
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};
