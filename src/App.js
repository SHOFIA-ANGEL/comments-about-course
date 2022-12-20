import './App.css';
import FormView from './components/Form';
//import React, { useState } from 'react';
const Form= () =>{

return (
  <div>
    <div className='top'>
     <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Comments about Course</div>
        </div>
   <FormView/>
    </div>
  );
}

export default Form;