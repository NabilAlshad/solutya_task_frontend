/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import EditorDashboard from '../../components/Editor/EditorDashboard';
import axios from 'axios';
const create = () => {
    const [product, setProducts]=useState({
        productName:"",
        quantity:"",
    })

    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setProducts((values)=>({...values,[name]:value}))
    }
    

    const onClickHandler=async(e)=>{
        e.preventDefault();
        console.log(product)
        try{
            await axios.post(`http://localhost:2900/editor/addProduct`,product)
            .then((response)=>console.log(response.data))
        }
        catch(error){
            console.log(error);
        }
    
       

    }
    return (
       <EditorDashboard>
<form className='col-md-4' onClick={onClickHandler}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter product Name</label>
    <input type="text" value={product.productName} name="productName" onChange={e=>onChangeHandler(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
 
  </div>
  <div className="mb-3">
    <label className="form-label">Quantity</label>
    <input type="text" name="quantity" value={product.quantity} onChange={e=>onChangeHandler(e)}  className="form-control" ></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       </EditorDashboard>
    );
};

export default create;