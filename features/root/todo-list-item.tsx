import TodoListItemDescription from '@/features/root/todo-list-item-description';
import TodoListItemDoneAction from '@/features/root/todo-list-item-done-action';
import TodoListItemPriority from '@/features/root/todo-list-item-priority';
import TodoListItemTitle from '@/features/root/todo-list-item-title';
import { cn } from '@/lib/utils';
import { Todo } from '@/types/todo';

type TodoListItemProps = {
  todo: Todo;
};

const TodoListItem = ({
  todo: { id, title, description, priority, isDone },
}: TodoListItemProps) => {
  return (
    <li
      className={cn(
        'py-4 px-6 bg-neutral-50/50 border-2 rounded-lg transition-colors',
        'hover:border-neutral-300',
      )}
    >
      <div className="flex gap-4">
        <TodoListItemDoneAction todoId={id} />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {priority !== null && <TodoListItemPriority priority={priority} />}
            <TodoListItemTitle title={title} />
          </div>
          {description !== null && (
            <TodoListItemDescription description={description} />
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;