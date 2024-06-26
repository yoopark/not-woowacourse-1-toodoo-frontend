import TodoListItem from '@/features/root/todo-list-item';
import type { Todo } from '@/types/todo';

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
