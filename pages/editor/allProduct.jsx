/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import EditorDashboard from '../../components/Editor/EditorDashboard';
import axios from "axios";
const allProduct = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
      const fetchData= async()=>{
                await axios.get(`http://localhost:2900/editor/getAllProduct`)
                .then((response)=>{
               console.log(response.data.allDataProducts)
                setProducts(response.data.allDataProducts)})
      }
      fetchData()
    },[])
    return (
      <EditorDashboard>
      <div className='col-md-7 m-3 p-3'>
        <ul className='list-group'>
           {products.map((p)=><li className='mt-3' key={p._Id}>product name:{p.productName} quantity:{p.quantity} <span><button className='btn btn-warning ms-5'>update</button></span>
           <span><button className='btn btn-danger ms-5'>Delete</button></span>
           </li>)}
        </ul>
      </div>
      </EditorDashboard>
    );
};

export default allProduct;