import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Body from './Componentes/Body';

function App() {

  const [ response, setResponse ] = useState([]);

  useEffect(() => {

    async function getChar(){

      try{

        const { data } = await axios.get('https://narutodb.xyz/api/character?page=1&limit=1431');

        let characters = data.characters
        characters.sort(( a, b ) => {
          if( a.name < b.name ){

            return -1;

          }
          if( a.name > b.name ){

            return 1;

          }

          return 0;

        });

        console.log( characters );

        setResponse( characters );

      }catch( error ){

        console.log( error );

      }

    }

    getChar()

  }, [])

  return (

    <div className="App">

      <Body characters={ response } />

    </div>

  );

}

export default App;