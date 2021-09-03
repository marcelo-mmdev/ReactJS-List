import { useState } from "react";
import { FiCheckSquare, FiTrash } from "react-icons/fi"


import { Container, Header, Content, Task } from "./styles";

interface TaskItem {
  id: number;
  title: string;
  isComplete: boolean;
}

 export function TaskList(){
  const[tasks, setTasks] = useState<TaskItem[]>(() => {
    const storagedTasks = localStorage.getItem('@todo:task');
    if(storagedTasks){
      const tasksList = JSON.parse(storagedTasks);
      return tasksList;
    }
    return[];
  });
  const[newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewItem(){
    if(!newTaskTitle){
      return;
    }
    const task = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    }
    setNewTaskTitle('');
    setTasks([...tasks, task]);

    localStorage.setItem('@todo:task', JSON.stringify([...tasks, task]))
  }

  function handleToggleTaskCompletion(id: number){
    const updatedTasks = tasks.map(tasks => {
      const updatedTasks = tasks;

      if(updatedTasks.id == id){
        updatedTasks.isComplete = !updatedTasks.isComplete;
        return updatedTasks
      }
      return tasks;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number){
    const updatedTask = tasks.filter(tasks => tasks.id != id);
    setTasks(updatedTask);
  }

   return(
     <Container>
       <Header>
         <h2>My List</h2>

         <div>
            <input 
              type="text"
              placeholder="Adicionar novo item"
              value={newTaskTitle}
              onChange={event => setNewTaskTitle(event.target.value)}
            />
            <button type="submit" onClick={handleCreateNewItem}>
              <FiCheckSquare size={16} color="#FFF" />
            </button>
         </div>
       </Header>
       <Content>
         <ul>
           {tasks.map(tasks =>(
             <li key={tasks.id}>
             <Task isComplete={tasks.isComplete}>
                <input 
                  type="checkbox"
                  checked={tasks.isComplete} 
                  onClick={() => handleToggleTaskCompletion(tasks.id)}
                />
                <p>{tasks.title}</p>
             </Task>
             <button type="button" onClick={() => handleRemoveTask(tasks.id)}>
               <FiTrash size="16" />
             </button>
           </li>
           ))}
         </ul>
       </Content>
     </Container>
   );
 }