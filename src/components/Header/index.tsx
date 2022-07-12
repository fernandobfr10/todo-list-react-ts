import { ChangeEvent, FormEvent, useState } from 'react'

import Logo from '../../assets/logo.svg'
import PlusImg from '../../assets/plus.svg'

import styles from './header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)

    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    const title = event.target.value
    setTitle(title)
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo Todo App" />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.inputSearch}
            onChange={onChangeTitle}
            value={title}
          />
          <button className={styles.addButton}>
            Criar
            <img src={PlusImg} alt="Imagem do sinal de mais" />
          </button>
        </form>
      </header>
    </>
  )
}
