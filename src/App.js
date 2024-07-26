import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Componentes/Header';
import Body from './Componentes/Body';

function App() {

  const [ response, setResponse ] = useState([]);

  useEffect(() => {

    async function getChar(){

      try{

        const { data } = await axios.get('https://narutodb.xyz/api/character');
        setResponse( data.characters )

      }catch( error ){

        console.log( error );

      }

    }

    getChar()

  }, [])

  return (

    <div className="App">

      <Header />
      <Body characters={ response } />

    </div>

  );

}

export default App;