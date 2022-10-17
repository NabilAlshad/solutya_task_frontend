import React from 'react';

import EditorNav from './EditorNav';
const EditorDashboard = ({children}) => {
    return (
      <div className='col-md-12 d-flex justifu-space-between'>
            <div className='col-md-2 p-2 text-center'>
                <EditorNav/>
            </div>

            <div className='col-md-10 p-2 '>
                {children}
            </div>
        </div>
        
    )
};

export default EditorDashboard;