import './App.css'
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import { useState } from 'react';



const App = () =>{
  const links =[
    {
    href:'/',
    text:'Home',
    id: 0
  },
    {
    href:'/Contacts',
    text:'Contacts',
    id: 1
  },
    {
    href:'/About',
    text:'About us',
    id: 2
  },
] 
const [ mode, setMode] = useState('light');

return (
  <div className={mode}>
    <button onClick={() =>{
      setMode(mode === 'light' ? 'dark' : 'light');
    }}>change mood</button>
<Navbar
links={links}
/>
<MainSection/>
  </div>
)

}


export default App;
