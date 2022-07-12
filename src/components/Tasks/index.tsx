import { TbClipboardText } from 'react-icons/tb'

import { Task } from '../Task'
import styles from './tasks.module.css'
import { ITask } from '../../App'

interface Props {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <main className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.purpleText}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.tasksList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.noTasks}>
            <TbClipboardText size={56} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas de organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
