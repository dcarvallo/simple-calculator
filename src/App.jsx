import {useState, useEffect} from 'react'
function App() {
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('')

  useEffect(() => {
    function handleKeyDown(e) {
    if(!validate(e.key)) return;
    var regex = /^\d|[+*-\/\.]/.test(e.key);
      if(regex){
        setOperation(operation + e.key)
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [operation]);

  const validate = (character) => {
    
    const regex = /[-+*\/\.]/
    let last = operation.charAt(operation.length - 1)
    console.log((character))
    if(regex.test(character) && regex.test(last))
    return false
    return true
  }

  const register = (el) => {
    if(!validate(el)) return;
    setOperation(operation + el)
  }

  const check = () => {
    let res
    try {
      res = eval(operation);
    } catch (error) {
      res = 'syntax error'
    }
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
