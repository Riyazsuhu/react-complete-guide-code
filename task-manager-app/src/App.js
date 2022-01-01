import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTask } = useHttp()

  useEffect(() => {
    const dataTransform = (data) => {
      const loadedTasks = [];
  
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }
    const requestCredentials = {
      url: 'https://task-manager-app-f3793-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
    fetchTask(requestCredentials, dataTransform);
  }, [fetchTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTask}
      />
    </React.Fragment>
  );
}

export default App;
