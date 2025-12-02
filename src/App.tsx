import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { Dialog } from "./components/Dialog"
import { use, useState } from "react"
import { TodoForm } from "./components/TodoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { TodoGroup } from "./components/TodoGroup"

export type itemType = {
  id: number,
  description: string,
  completed: boolean,
  createdAt: string
}

function App() {
  const todoContext = use (TodoContext);
 
  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }
  const { todos, addTodo, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo } = todoContext

  const handleFormSubmit = (formData: FormData) => {
    if(selectedTodo){
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    todoContext.closeFormTodoDialog();
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading='Para estudar'
            items={todos.filter(todo => !todo.completed)}
          />
          <TodoGroup
            heading='Concluído'
            items={todos.filter(todo => todo.completed)}
          />
          <Footer>
            <Dialog isOpen={todoContext.showDialog} onClose={todoContext.closeFormTodoDialog}>
              <TodoForm onSubmit={handleFormSubmit} defaultValue={selectedTodo?.description}></TodoForm>
            </Dialog>
            <FabButton onClick={() => todoContext.openFormTodoDialog(null)}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
function editTodo(formData: FormData) {
  throw new Error("Function not implemented.")
}

