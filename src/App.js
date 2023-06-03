import React, { useState } from 'react';
import data from './data';
import List from './list';

function App() {
  //Here i used Destructuring
  const [people,setpeople]=useState(data);
  return(
  <main> 
   
  <section className='container'>
  <h3>{people.length} Birthdays Today</h3>
  <List people={people}/>
  <button onClick={ ()=>{ setpeople([])   } }>Clear All</button>
  
  </section>
  </main>
  );
}

export default App;
