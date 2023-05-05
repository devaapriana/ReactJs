import { useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, sendRequest: sendTaksRequest} = useHttp();

  const addTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendTaksRequest({url: 'https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify({ text: taskText })}, addTask.bind(null, taskText));

  };
   

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
