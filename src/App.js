import axios from "axios";
import { useState, useRef, useEffect } from "react";
import './App.css';
import Results from './components/Results';

//api
//input centrado, semejante a google
//componentes pequeños, no todo junto
//puebas, al menos 3
//enviar a Ale
//debounce, investigar y aplicar

function App() {

  const [inputValue,setInputValue] = useState('');
  const [queryResponse,setQueryResponse] = useState(null);
  const [theresResponse,setTheresResponse] = useState(false);
  const inputTimeout = useRef();

  function issuesQuery(event){
    const query = event.target.value;
    setInputValue(query);
  }

  function queryCall(inputValue){
    const queryData = axios.get(
      `https://api.github.com/search/issues?q=repo:facebook/react+${inputValue}:in:title`
    ).then((res) => {
        setQueryResponse(res.data.items);
        setTheresResponse(true);
      }
    )
  }

  useEffect(() => {
    clearTimeout(inputTimeout.current);
    if(!inputValue.trim()){
      setInputValue('');
      setQueryResponse([]);
      setTheresResponse(false);
      return
    }
    inputTimeout.current = setTimeout(()=>{
      queryCall(inputValue)
    }, 1000 );
  },[inputValue]);

  return (
    <div className="App">
      <div className="container">
        <div className="inputArea">
          <input className="queryInput" ref={inputTimeout} onChange={(e) => issuesQuery(e)} value={inputValue}></input>
        </div>
        {theresResponse && <Results
          queryResponse={queryResponse}
        />}
      </div>
    </div>
  );
}

export default App;
