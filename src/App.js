import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import Planet from './components/Planet';
import User from './components/User';

function App() {
  const people = useSelector((state) => state.people);
  const planets = useSelector((state) => state.planets);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {people.map((el, index) => {
            return <User key={index} name={el.name} />;
          })}
        </div>
        <p
          onClick={() => {
            dispatch({ type: 'LOAD_DATA' });
          }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div>
            {planets.map((el, index) => {
              return <Planet key={index} name={el.name} />;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
