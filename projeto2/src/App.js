import {useState, useEffect, useCallback} from 'react'
import logo from './logo.svg';
import './App.css';

const eventFn = ()=>{
  console.log('H1 Clicked');
}

const

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidMount - executa 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, [])

  //componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  })

  //Com Dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2', counter2);
  }, [counter, counter2])

  //limpa memoria
  useEffect(() => {

    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      console.log('componentWillUmount')
      document.querySelector('h1').removeEventListener('click', eventFn);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          C1: {counter} - C2 {counter2}
        </h1>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter2(counter2 + 1)}>+ 2</button>
        </div>

      </header>
    </div>
  );
}

0001
010552020-0

11 47

export default App;
