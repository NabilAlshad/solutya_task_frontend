import React from 'react';
import SideNav from './Admin/SideNav';

const Dashboard = ({children}) => {
    return (
      <div className='col-md-12 d-flex justify-space-between'>
            <div className='col-md-2 p-5 text-center'>
                <SideNav/>
            </div>

            <div className='col-md-10 p-5'>
                {children}
            </div>
        </div>
        
    )
};

export default Dashboard;