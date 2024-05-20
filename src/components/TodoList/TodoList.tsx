import Box from "@mui/material/Box";
import { TodoItem } from "./TodoItem/TodoItem";

import { Todo } from "../../App";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

interface TodoListProps {
   editTodoId: Todo["id"] | null;
   todoList: Todo[];
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
   onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
   onEdit: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
   todoList,
   onDeleteTodo,
   onCheckedTodo,
   onChangeTodo,
   onEdit,
   editTodoId,
}) => {
   return (
      <Box>
         {todoList.map((todo) => {
            if (todo.id === editTodoId) {
               return (
                  <EditTodoItem
                     key={todo.id}
                     todo={todo}
                     onChangeTodo={onChangeTodo}
                  />
               );
            }
            return (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  onCheckedTodo={onCheckedTodo}
                  onDeleteTodo={onDeleteTodo}
                  onEdit={onEdit}
               />
            );
         })}
      </Box>
   );
};
