
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
function App() {
  //run code based on a given condition
  const [token,setToken] =useState(null);
  useEffect(()=>{
    //code...

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token =hash.access_token;

    if(_token){
      setToken(_token)
    }
    console.log('I have a token: ',token);
  },[]);
  return (
    <div className="App">
      {
        token ?
        (<h1>I am Logged in</h1>)
        :
        (
          <Login/>
        )

      }
    </div>
  );
}

export default App;
