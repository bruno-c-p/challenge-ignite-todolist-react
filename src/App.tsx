import { CirclePlus } from "lucide-react";
import { FormEvent, useState } from "react";
import EmptyList from "./components/EmptyList";
import Todo, { ITodo } from "./components/Todo";
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      done: true,
    },
    {
      id: "2",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nisi non tempora facere voluptate? Quam vel inventore a est natus cum rerum similique adipisci dolorem possimus, aspernatur sit minus magni!",
      done: false,
    },
  ]);
  const createdTodos = todos.length;
  const isTodosEmpty = todos.length === 0;
  const isContentEmpty = inputValue === "";
  const finishedTodos = todos.reduce((prevValue, todo) => {
    if (todo.done) return prevValue + 1;
    return prevValue;
  }, 0);

  function handleCreateNewTodo(event: FormEvent) {
    if (!inputValue) {
      return;
    }
    event.preventDefault();
    const id = new Date().toISOString() + Math.random();
    const todo: ITodo = { id, content: inputValue, done: false };
    setTodos([...todos, todo]);
    setInputValue("");
  }

  function handleToggleDone(todoId: string) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todoId: string) {
    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }
    setTodos(todosWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <main className="">
        <section className="max-w-3xl mx-auto -mt-8">
          <form className="flex gap-2" onSubmit={handleCreateNewTodo}>
            <input
              className="border-zinc-900 bg-zinc-700 border rounded-lg flex-1 p-4 text-zinc-100 placeholder:text-zinc-400 focus:outline focus:border-violet-600"
              placeholder="Adicione uma nova tarefa"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              disabled={isContentEmpty}
              className="cursor-pointer flex items-center gap-2 p-4 bg-violet-500 rounded-lg text-white hover:bg-violet-400 transition-colors focus:outline-none ring-violet-700 focus:ring focus:border-violet-600"
              type="submit"
            >
              Criar
              <CirclePlus />
            </button>
          </form>
          <ListHeader
            createdTodos={createdTodos}
            finishedTodos={finishedTodos}
          />
          <article className="flex items-center justify-center flex-col gap-4 mt-6">
            {!isTodosEmpty &&
              todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onToggleDone={handleToggleDone}
                    onDeleteTodo={handleDeleteTodo}
                  />
                );
              })}
            {isTodosEmpty && <EmptyList />}
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
