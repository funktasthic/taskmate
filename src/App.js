import './App.css';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';

function App() {
  return (
    <div className='container'>
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;
