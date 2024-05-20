import Box from "@mui/material/Box";
import { TodoItem } from "./TodoItem/TodoItem";

import { Todo } from "../../App";

interface TodoListProps {
   todoList: Todo[];
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
   todoList,
   onDeleteTodo,
   onCheckedTodo,
}) => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
         }}
      >
         {todoList.map((todo) => {
            return (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDeleteTodo={onDeleteTodo}
                  onCheckedTodo={onCheckedTodo}
               />
            );
         })}
      </Box>
   );
};
