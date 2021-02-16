import logo from './logo.svg';
import './App.css';
import DisplayWiki from './DisplayWiki.js'
import {useState, useEffect} from 'react'

function App() {
const [wikidata, setWikidata]=useState({});

const getWiki= async ()=>{
  const response=await fetch(`https://api.github.com/users/wikiwi`);
    const data=await response.json();
    setWikidata(data)
}

useEffect(()=>{
getWiki();
},[]);

  return (
    <div className="App">
    <div className="container">

    {wikidata &&
      <DisplayWiki
      id={wikidata.id}
      node_id={wikidata.node_id}
      avatar_url={wikidata.avatar_url}
      url={wikidata.url}
      html_url={wikidata.html_url}
      followers_url={wikidata.followers_url}
      />
    }

    </div>
    </div>
  );
}

export default App;
