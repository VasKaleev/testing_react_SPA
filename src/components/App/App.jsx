import List from '../List';
import { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search';
const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScriptL',
  'React',
  'Vue',
  'Angular',
  'NodeJS',
];
function App() {
  const [search,setSearch]=useState('');
  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e)=>setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
