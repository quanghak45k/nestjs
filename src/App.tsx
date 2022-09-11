import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskApi } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import { Card } from 'react-bootstrap';
import Navbar from './components/Navbar';

function App() {

  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const addTask = (task: TaskDTO) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  useEffect(() => {
    async function fetchAll() {
      const resp = await TaskApi.getAll();

      setTasks(resp);
    }

    fetchAll();

  }, []);
  return (
    <div className="App">
      <Navbar 
        onTaskCreated={addTask}  
      />
      <Container >
        <Row className="mt-5">
          
        {tasks.map((task) => {
          return <Col xs={6} md={4} className="mt-3" key={task.id}>
              {/* call components Task render at here  */}
              <Task data={task} onTaskDelete={deleteTask}/>
          </Col>;
        })
        }
        </Row>
      </Container>
    </div>
  );
}

export default App;
