import React, { useState } from 'react';
import axios from 'axios';

import Dashboard from '../../components/dashboard';

const CreateUser = () => {
 const [name, setName]=useState("");
 console.log(name);
const url=process.env.URL;

 const submitHandler=async(e)=>{
    e.preventDefault();
   const data={
    name:name
   }
   await axios.post(`http://localhost:2900/admin/addUser`, data)
   .then((response)=>console.log(response.data))
   if(data){
    console.log("successfully added");
    setName("");
   }
}
    return (
        <Dashboard>
          <form className='col-md-4'onSubmit={submitHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email  your name</label>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </Dashboard>
       
    );
};

export default CreateUser;