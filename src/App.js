import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// Change Name
// Change Age
// Change Count
// Theme dark & light
// css toggle switch (alvarotrigo website)

function App() {

  let [change , setChange]=useState('Essam')
  let [chnageAge , setChangeAge] = useState('26')
  let [count , setCount] = useState(0)
  let [theme , setTheme] = useState('light')
    

  return <>

  <div className={`btn-light text-center  app ${theme}`}>

  <div className="wrapper mb-2" onChange={()=>{setTheme(theme === 'light'? 'dark' : 'light')}}>
  <input type="checkbox" id="hide-checkbox" />
  <label htmlFor="hide-checkbox" className="toggle">
    <span className="toggle-button">
      <span className="crater crater-1" />
      <span className="crater crater-2" />
      <span className="crater crater-3" />
      <span className="crater crater-4" />
      <span className="crater crater-5" />
      <span className="crater crater-6" />
      <span className="crater crater-7" />
    </span>
    <span className="star star-1" />
    <span className="star star-2" />
    <span className="star star-3" />
    <span className="star star-4" />
    <span className="star star-5" />
    <span className="star star-6" />
    <span className="star star-7" />
    <span className="star star-8" />
  </label>
</div>




  <button onClick={()=>{setTheme(theme === 'light'? 'dark' : 'light')}} className='btn btn-light me-2 mb-1'>Toggle Mode</button>
    <div>
      <button onClick={()=>{setTheme('')}} className='btn btn-light me-2'>Light</button>
      <button onClick={()=>{setTheme('dark')}} className='btn btn-light me-2'>Dark</button>
      <button onClick={()=>{setTheme('grey')}} className='btn btn-light me-2 '>Grey</button>
      <button onClick={()=>{setTheme('pink')}} className='btn btn-light '>Pink</button>
    </div>
    <br/>

  <button className='btn btn-light mt-5' onClick={()=>{setChange('Awny')}}>Change Name</button>
  <h2 className=''>My Name is {change}</h2>

  <br/>

  <button   className='btn btn-light' onClick={()=>{setChangeAge('30')}}>Change Age</button>
  <h2 className=''>My Age is {chnageAge}</h2>

  <br/>

  <button onClick={()=>{setCount(count+1)}} className='btn btn-light '>Count is {count}</button>

  </div>
 

  
  
  
  
  </>
  
  ;
}

export default App;
