import Link from 'next/link';
import React from 'react';

const SideNav = () => {
    return (
       <>
            <ul class="list-group">
                <li className="list-group-item"  ><Link href="/admin/create">Create User</Link></li>
                <li className="list-group-item"  ><Link href="/admin/allUsers">all Users</Link></li>
            </ul>
        </>
      
    );
};

export default SideNav;