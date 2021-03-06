import axios from "axios";
import { useState, useRef, useEffect } from "react";
import './App.css';
import Results from './components/Results';
import octo from './octo.png';

function App() {

  const [inputValue,setInputValue] = useState('');
  const [queryResponse,setQueryResponse] = useState(null);
  const [responseNumber,setResponseNumber] = useState(null);
  const inputTimeout = useRef();

  function issuesQuery(event){
    const query = event.target.value;
    setInputValue(query);
  }

  function setValues(response,number){
    setQueryResponse(response);
    setResponseNumber(number);
  }

  function queryCall(inputValue){
    axios.get(
      `https://api.github.com/search/issues?q=repo:facebook/react+${inputValue}:in:title`
    ).then((res) => {        
        setValues(res.data.items,res.data.total_count);
      }
    )
  }

  useEffect(() => {
    clearTimeout(inputTimeout.current);
    if(!inputValue.trim()){
      setInputValue('');
      setValues(null,null);
      return
    }
    inputTimeout.current = setTimeout(()=>{
      queryCall(inputValue)
    }, 1000 );
  },[inputValue]);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <img src={octo} alt="Github's Octocat"></img>
          <h1>Let's get some issues!</h1>
        </div>
        <div className="inputArea">
          <input className="queryInput" placeholder="Search for issues on React's GitHub repo" ref={inputTimeout} onChange={(e) => issuesQuery(e)} value={inputValue}></input>
        </div>
        {queryResponse && <Results queryResponse={queryResponse} responseNumber={responseNumber} />}
      </div>
    </div>
  );
}

export default App;
