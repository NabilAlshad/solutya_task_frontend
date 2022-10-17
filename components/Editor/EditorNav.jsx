import Link from 'next/link';
import React from 'react';

const EditorNav = () => {
    return (
       <>
            <ul class="list-group">
                <li className="list-group-item"><Link className='text-decoration-none' href="/editor/create">Create Product</Link></li>
                <li className="list-group-item"><Link className='text-decoration-none' href="/editor/allProduct">all Users</Link></li>
            </ul>
        </>
      
    );
};

export default EditorNav;