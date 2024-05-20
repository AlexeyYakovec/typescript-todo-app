import React, { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Todo } from "../../App";

const DEFAULT_TODO = { name: "", description: "" };

interface PanelProps {
   onAddTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const Panel: React.FC<PanelProps> = ({ onAddTodo }) => {
   const [todo, setTodo] = useState(DEFAULT_TODO);

   const onClick = () => {
      onAddTodo(todo);
      setTodo(DEFAULT_TODO);
   };

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setTodo({ ...todo, [name]: value });
   };

   return (
      <Paper
         elevation={2}
         sx={{
            padding: "25px 30px",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            justifyContent: "space-evenly",
            width: "100%",
            gap: 12,
            marginBottom: 6,
         }}
      >
         <TextField
            value={todo.name}
            sx={{ background: "white", borderRadius: 2 }}
            label="name"
            name="name"
            variant="filled"
            onChange={onChange}
            fullWidth
         />
         <TextField
            value={todo.description}
            sx={{ background: "white", borderRadius: 2 }}
            label="description"
            name="description"
            variant="filled"
            onChange={onChange}
            fullWidth
         />
         <Button
            startIcon={<Add />}
            variant="contained"
            onClick={onClick}
            sx={{ padding: "12px 50px" }}
         >
            Add
         </Button>
      </Paper>
   );
};
