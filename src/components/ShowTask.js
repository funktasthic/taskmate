import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export const ShowTask = ({ tasklist, setTasklist, setTask, task }) => {
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTaskList);
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick={() => setTasklist([])}>
          Clear all
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className='name'>{todo.name}</span>
              <span className='time'>{todo.time}</span>
            </p>
            <i className='bi-pencil-square' onClick={() => handleEdit(todo.id)}>
              <MdEdit />
            </i>
            <i className='bi-trash' onClick={() => handleDelete(todo.id)}>
              <MdDelete />
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};
