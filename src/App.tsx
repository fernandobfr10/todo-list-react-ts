import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

const LOCAL_STORAGE_KEY = 'savedTasks'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  function addTask(taskTitle: string) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }
    setTasksAndSave([...tasks, newTask])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasksAndSave(newTasks)
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}
