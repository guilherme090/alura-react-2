import { ChecklistsWrapper } from "./components/ChecklistsWrapper/index.tsx"
import { Container } from "./components/Container/index.tsx"
import { FabButton } from "./components/FabButton/index.tsx"
import { Footer } from "./components/Footer/index.tsx"
import { Header } from "./components/Header/index.tsx"
import { Heading } from "./components/Heading/index.tsx"
import { IconPlus, IconSchool } from "./components/icons/index.tsx"
import { Dialog } from "./components/Dialog/index.tsx"
import { use } from "react"
import { TodoForm } from "./components/TodoForm/index.tsx"
import TodoContext from "./components/TodoProvider/TodoContext.ts"
import { TodoGroup } from "./components/TodoGroup/index.tsx"

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
  const { todos, addTodo, selectedTodo, editTodo } = todoContext

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

