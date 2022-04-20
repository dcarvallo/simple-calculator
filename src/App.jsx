import {useState} from 'react'
function App() {
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('')

  const register = (el) => {
    console.log(el)
    setOperation(operation + el)
  }

  const check = () => {
    let res = eval(operation);
    setResult(res);
  }

  const acFunction = () => {
    setOperation('');
    setResult(0);
  }
  return (
    <div className='App'>
    <div className='grid'>
      <div id="results">
        {operation}<br></br>
         {result}
      </div>
      <button onClick={acFunction} id="ac">AC</button>
      <button onClick={() => register('/')} id="button">/</button>
      <button onClick={() => register('*')} id="mul">x</button>
      <button onClick={() => register('7')} id="seven">7</button>
      <button onClick={() => register('8')} id="eight">8</button>
      <button onClick={() => register('9')} id="nine">9</button>
      <button onClick={() => register('-')} id="minus">-</button>
      <button onClick={() => register('4')} id="four">4</button>
      <button onClick={() => register('5')} id="five">5</button>
      <button onClick={() => register('6')} id="six">6</button>
      <button onClick={() => register('+')} id="plus">+</button>
      <button onClick={() => register('1')} id="one">1</button>
      <button onClick={() => register('2')} id="dos">2</button>
      <button onClick={() => register('3')} id="three">3</button>
      <button onClick={check} id="equal"> =</button>
      <button onClick={() => register('0')} id="zero">0</button>
      <button onClick={() => register('.')} id="dot">.</button>
    </div>
    </div>
  );
}

export default App;
