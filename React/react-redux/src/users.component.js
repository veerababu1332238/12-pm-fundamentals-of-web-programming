import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from "./slices/users.slice";
import './loading.css';

function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    console.log(users);
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="text-center">Users List</h2>
                    {users.isLoading ? (
                        <div className='loader-container'>
                            <span class="loader"></span>
                        </div>
                    ) : (
                        <div className='row'>
                            {users.data.map(user => (
                                <div className='col-sm-4'>
                                    <div style={{height: '250px'}} className='border border-success m-2 p-3'>
                                        <p>Name: {user.name}</p>
                                        <p>Username: {user.username}</p>
                                        <p>Email: {user.email}</p>
                                        <p>Address: {user.address?.city}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>  
            </div>
        </div>
    )
}

export default Users;