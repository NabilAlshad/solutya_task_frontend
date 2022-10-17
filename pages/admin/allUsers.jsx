import React,{useState,useEffect} from 'react';
import SideNav from '../../components/Admin/SideNav';
import axios from 'axios';
import Dashboard from '../../components/dashboard';

const allUsers = () => {
    
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[user,setUser]=useState([]);
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
      
       const fetchData=async()=>{
         await axios.get(`http://localhost:2900/admin/getAllUser`)
         .then((response)=>{console.log(response.data.data)
         setUser(response.data.data);
        })
       }
   fetchData()
   }, [])
   

    return (
        <Dashboard>
     <div className='col-md-6  ms-5'>
        <h2 className='text-center'>All users</h2>
        <ul className='list-group'>
            {user.map(u=><li className='list-group-item' key={u._id}>Ediorname: {u.name}
            <span className='ms-3'><button className='btn btn-warning'>update</button></span>
            <span className='ms-3'><button className='btn btn-danger'>Delete</button></span>
            </li>)}

        </ul>
     </div>
        </Dashboard>
    );
};

export default allUsers;