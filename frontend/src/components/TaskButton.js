import { useState ,useEffect} from "react";
import dataExcercise from "../data/dataExcercise";
import axios from "axios";


const TaskButton = ({ group,gd, handleCompleteTask}) => {
  
  const [isCompleted, setIsCompleted] = useState(false);
  const [excercise,setExercise]=useState(null);

  useEffect(() => {
    const savedTasks = async () => {
      try{
        const user=JSON.parse(localStorage.getItem("user")); 
        const response = await axios.get(`http://localhost:5000/user/${user._id}`,{
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        console.log(response.data.booleanMatrix);
        setIsCompleted(response.data.booleanMatrix[group-1][gd.id]===true ? true : false); 
      }catch(err){
        alert("Error fetching tasks. Please try again later.",err);
      }
    }
    savedTasks();
  }, [group,gd.id]);


  const exerciseHandler = (e) => {
    e.stopPropagation();
    console.log(e.target.value);
    setExercise(e.target.value);
  }
  const doneButtonHandler=(e)=>{
    e.stopPropagation()
    console.log(group-1,gd.id,isCompleted)
    handleCompleteTask(group,gd.id,!isCompleted);
    setIsCompleted(!isCompleted);
  }

  return (
    <>
      <div className="group">
        <h1>{gd.type}</h1>
        <div className="group-warmup">
          {gd.data.map((t,index) => {
            return (
              <button
                className="group-buttton"
                key={t.id}
                value={t.type}
                onClick={exerciseHandler}
              >{t.type}</button>
            );
          })}
        </div>
        <button
          className={`group-done${isCompleted ? "-completed" : ""}`}  
          onClick={doneButtonHandler}
        >{isCompleted ? "Completed" : "Done"}</button>
      </div>
      {excercise && (
        <div className="exercise-container">
        {dataExcercise
          .filter((exe) => exe.name === excercise) // Corrected filtering
          .map((ex) => (
            <div key={ex.id} className="exercise-card">
              <img src={ex.imageUrl} alt={ex.name} className="exercise-image" />
              <div className="exercise-content">
                <h2 className="exercise-title">{ex.name}</h2>
                <p className="exercise-description">
                  <strong>Description:</strong> {ex.description}
                </p>
                <p className="exercise-duration">
                  <strong>Duration:</strong> {ex.duration}
                </p>
                <p className="exercise-level">
                  <strong>Level:</strong> {ex.level}
                </p>
                <p className="exercise-equipment">
                  <strong>Equipment:</strong> {ex.equipment}
                </p>
              </div>
            </div>
          ))}
      </div>
      
      )}
    </>
  );
};
export default TaskButton;
