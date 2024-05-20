import { useState } from "react";
import "./App.css";
import { Header, Panel, TodoList } from "./components";

import Box from "@mui/material/Box";

export type Todo = {
   id: number;
   name: string;
   description: string;
   checked: boolean;
};

function App() {
   const [editTodoId, setEditTodoId] = useState<number | null>(null);
   const [todoList, setTodoList] = useState([
      {
         id: 1,
         name: "task 1",
         description: "test1",
         checked: false,
      },
      {
         id: 2,
         name: "task 2",
         description: "test1",
         checked: false,
      },
      {
         id: 3,
         name: "task 3",
         description:
            "teewqeqw;lekqw;leq;wkeqwke;lqwk;ekqweqst1 teewqeqw;lekqw;leq;wkeqwke;lqwk;ekqweqst1eqweqw",
         checked: true,
      },
   ]);

   const onDeleteTodo = (id: Todo["id"]) => {
      setTodoList(todoList.filter((todo) => todo.id !== id));
   };

   const onEdit = (id: Todo["id"]) => {
      setEditTodoId(id);
   };

   const onAddTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
      setTodoList([
         ...todoList,
         {
            id: todoList[todoList.length - 1].id + 1,
            description,
            name,
            checked: false,
         },
      ]);
   };

   const onCheckedTodo = (id: Todo["id"]) => {
      setTodoList(
         todoList.map((todo) => {
            if (todo.id === id) {
               return { ...todo, checked: !todo.checked };
            }
            return todo;
         })
      );
   };

   const onChangeTodo = ({
      name,
      description,
   }: Omit<Todo, "id" | "checked">) => {
      setTodoList(
         todoList.map((todo) => {
            if (todo.id === editTodoId) {
               return { ...todo, name, description };
            }
            return todo;
         })
      );
      setEditTodoId(null);
   };

   return (
      <div className="App">
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
            }}
         >
            <Header />
            <Panel onAddTodo={onAddTodo} />
            <TodoList
               todoList={todoList}
               editTodoId={editTodoId}
               onDeleteTodo={onDeleteTodo}
               onCheckedTodo={onCheckedTodo}
               onEdit={onEdit}
               onChangeTodo={onChangeTodo}
            />
         </Box>
      </div>
   );
}

export default App;
