import { FaRegTrashAlt } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import styles from './task.module.css'

import { ITask } from '../../App'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkButton}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <FaRegTrashAlt size={16} />
      </button>
    </div>
  )
}
