import { Paper, TextField, Button } from "@mui/material";

import { Todo } from "../../../App";
import { useState } from "react";

import CreateIcon from "@mui/icons-material/Create";

interface EditTodoItemProps {
   todo: Todo;
   onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({
   todo,
   onChangeTodo,
}) => {
   const [editTodo, setEditTodo] = useState({
      name: todo.name,
      description: todo.description,
   });

   const onClick = () => {
      onChangeTodo(editTodo);
   };

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setEditTodo({ ...todo, [name]: value });
   };

   return (
      <Paper
         elevation={3}
         sx={{
            marginBottom: "24px",
            width: "60%",
            padding: "18px 26px",
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
         }}
      >
         <TextField
            value={editTodo.name}
            sx={{ background: "white", borderRadius: 2 }}
            label="name"
            name="name"
            variant="filled"
            onChange={onChange}
            fullWidth
         />
         <TextField
            value={editTodo.description}
            sx={{ background: "white", borderRadius: 2 }}
            label="description"
            name="description"
            variant="filled"
            onChange={onChange}
            fullWidth
         />
         <Button
            startIcon={<CreateIcon />}
            variant="contained"
            onClick={onClick}
            sx={{ padding: "12px 50px" }}
         >
            EDIT
         </Button>
      </Paper>
   );
};
