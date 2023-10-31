import { useSelector, useDispatch } from 'react-redux';
import { fetchAllTutorials } from '../slices/tutorials.slice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TutorialsList() {
    const [selectedTutorial, setSelectedTutorial] = useState({});
    const dispatch = useDispatch();
    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);
    console.log(tutorialsInfo);
    useEffect(() => {
        dispatch(fetchAllTutorials({name: 123}));
    }, []);
    const selectTutorial = (tutorial) => {
        setSelectedTutorial(tutorial);
    };
    const formatCreatedDate = (date) => {
        if (date) {
            const dateObj = new Date(date);
            return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
        }
        return null;
    }
    return (
        <div className="container my-4">
            <h2 className='text-center'>Tutorials List</h2>
            <div className='row'>
                <div className='col-sm'>
                    <button className='btn btn-primary float-end'><Link to={`/add-tutorial`} style={{color: 'white', textDecoration: 'none'}}>Add Tutorial</Link></button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-sm">
                
                    {tutorialsInfo.isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className="list-group">
                            {tutorialsInfo.tutorials.map(tutorial => (
                                <li className={`list-group-item ${selectedTutorial.title === tutorial.title ? 'active' : ''}`} style={{'cursor': 'pointer'}} onClick={() => selectTutorial(tutorial)}>{tutorial.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='col-sm'>
                    <p>Title: <span className='text-success'><b>{selectedTutorial.title}</b></span></p>
                    <p>Description: <span className='text-success'><b>{selectedTutorial.description}</b></span></p>
                    <p>Status: <span className='text-success'><b>{selectedTutorial.status}</b></span></p>
                    <p>Created At: <span className='text-success'><b>{formatCreatedDate(selectedTutorial.createdAt)}</b></span></p>

                    <button className='btn btn-primary'><Link to={`/edit-tutorial/${selectedTutorial._id}`} style={{color: 'white', textDecoration: 'none'}}>Edit</Link></button>
                </div>
            </div>
        </div>
    )
}