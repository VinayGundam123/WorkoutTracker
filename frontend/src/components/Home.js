import { useState,useEffect } from 'react';
import axios from 'axios';

import './Home.css';
import Group from './Group';
import TaskButton from "./TaskButton";
import dataGroup from '../data/dataGroup';

const Home =()=>{
  
  const [group,setGroup]=useState(null);
  const [exercise,setExercise]=useState(null);
  const [completedTasks, setCompletedTasks] = useState([
    new Array(4).fill(false),
    new Array(4).fill(false),
    new Array(3).fill(false),
  ]);
  const setfun = (number, type=null) => {
    if (number) {
      setGroup(number);
      setExercise(null);
      if (type === exercise && group===number) {
        setExercise(null);
      } else {
        setExercise(type !== undefined ? type : null);
      }
    }
  };

  useEffect(() => {
    const savedTasks = async () => {
      try {
        const user=JSON.parse(localStorage.getItem("user"));
        console.log(user._id,user.token);
        const response = await axios.get(`http://localhost:5000/user/${user._id}`,{
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }); 
        console.log(response.data.booleanMatrix);
        setCompletedTasks(response.data.booleanMatrix);
      } catch (error) {
        alert("Error fetching tasks. Please try again later.",error);
      }
    };
    savedTasks();
  },[]);

  
  const handleCompleteTask = (groupId, taskId, flag) => {
    const updatedTasks=async ()=>{
      const updated = [...completedTasks];
      updated[groupId - 1] = [...updated[groupId - 1]];
      updated[groupId - 1][taskId] = flag;
      try{
        const user=JSON.parse(localStorage.getItem("user"));
        console.log(user._id,user.token);
        const response=await axios.patch(`http://localhost:5000/user/${user._id}`,{booleanMatrix:updated},{
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        console.log("updated",response.data.booleanMatrix);
        setCompletedTasks(updated); // Update state with fetched data
        localStorage.setItem(`CompletedTasks`, JSON.stringify(updated)); // Save to local storage
      }catch(err){
        alert("Error updating tasks. Please try again later.",err);
      }
    }
    updatedTasks();
  };

  return (
    <>
      <div className='App'>
        <div className='card'>
          <Group type={dataGroup[0]} id={1} setfun={setfun} completedTasks={completedTasks}></Group>
          <Group type={dataGroup[1]} id={2} setfun={setfun} completedTasks={completedTasks}></Group>
          <Group type={dataGroup[2]} id={3} setfun={setfun} completedTasks={completedTasks}s></Group>
        </div>
        {
          group &&(
          <>
            
            <div className="group-progress">
              <h1>Group {group}</h1>
              <label>
                Completed: {`${completedTasks[group - 1].filter(status => status).length}/${dataGroup[group - 1].length}`}
              </label>
              <progress
                value={completedTasks[group - 1].filter(status => status).length}
                max={dataGroup[group - 1].length}
              ></progress>
            </div> 
            {exercise!==null &&
              dataGroup[group - 1].filter((gd) => gd.id === exercise).map((filteredGd) => (
                  <TaskButton key={filteredGd.id} gd={filteredGd} group={group} completedTasks={completedTasks} handleCompleteTask={handleCompleteTask} />
                ))}
          </> 
        )}
      </div> 
      
    </>
  )
}
export default Home;