import { Check, Trash2 } from "lucide-react";
import { cn } from "../lib/utils";

export interface ITodo {
  id: string;
  content: string;
  done: boolean;
}

interface TodoProps {
  todo: ITodo;
  onToggleDone: (todoId: string) => void;
  onDeleteTodo: (todoId: string) => void;
}

const Todo = ({ todo, onToggleDone, onDeleteTodo }: TodoProps) => {
  return (
    <div
      className={cn(
        "bg-zinc-700 border border-zinc-600 w-full p-4 rounded-lg flex items-center justify-between",
        { "border-zinc-700": todo.done }
      )}
    >
      <div className="flex gap-3 items-center">
        <label className="flex items-center cursor-pointer relative max-w-6">
          <input
            type="checkbox"
            name="done"
            className={cn(
              "peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full border-2 border-violet-300 hover:bg-violet-300/50 checked:bg-violet-500 checked:border-none",
              { "hover:bg-violet-400": todo.done }
            )}
            checked={todo.done}
            onChange={() => onToggleDone(todo.id)}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Check size={16} />
          </span>
        </label>
        <p
          className={cn("text-sm text-zinc-100", {
            "line-through text-zinc-500": todo.done,
          })}
        >
          {todo.content}
        </p>
      </div>
      <button
        className="text-zinc-500 hover:bg-zinc-600 rounded-md hover:text-red-400 p-2 transition-all self-start"
        onClick={() => onDeleteTodo(todo.id)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default Todo;
