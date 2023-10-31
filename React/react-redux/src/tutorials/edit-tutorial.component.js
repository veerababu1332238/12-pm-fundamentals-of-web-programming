import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditTutorial() {
    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);
    const [selectedTutorial, setSelectedTutorial] = useState({});

    const params = useParams();
    useEffect(() => {
        const filteredTutorial = tutorialsInfo.tutorials.find(tutorial => tutorial._id === params.id);
        if (filteredTutorial) {
            setSelectedTutorial(filteredTutorial);
            console.log(filteredTutorial);
        }
    }, [params]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>Edit Tutorial</h2>
                </div>
            </div>
        </div>
    )
}

export default EditTutorial;