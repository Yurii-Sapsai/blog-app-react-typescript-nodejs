import React from 'react';
import './AdminPage.sass';
import AddPost from '../../components/AddPost/AddPost';

/* import { UserAuth } from '../../context/AuthContext'; */


const AdminPage = () => {

  /* const { user } = UserAuth(); */

  return (
    <div className='adminPage'>

      <div style={{ textAlign: 'center' }}>
        Welcome, {/* {user && user.email} */} <br />
        Create your post!
      </div>
      <div>
        <AddPost />
      </div>

    </div>
  )
}

export default AdminPage;