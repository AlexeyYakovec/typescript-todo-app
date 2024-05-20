import { Typography, Paper, Box } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Todo } from "../../../App";

interface TodoItemProps {
   todo: Todo;
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
   todo,
   onDeleteTodo,
   onCheckedTodo,
}) => {
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
            opacity: todo.checked ? "0.6" : "1",
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: 1,
               textAlign: "left",
            }}
         >
            <Typography
               onClick={() => onCheckedTodo(todo.id)}
               variant="h5"
               component="h5"
               sx={{
                  cursor: "pointer",
                  textDecorationLine: todo.checked ? "line-through" : "none",
               }}
            >
               {todo.name}
            </Typography>
            <Typography variant="subtitle1" component="span">
               {todo.description}
            </Typography>
         </Box>
         <Box>
            <IconButton
               onClick={() => onDeleteTodo(todo.id)}
               aria-label="dd to shopping cart"
               color="error"
            >
               <DeleteIcon />
            </IconButton>
         </Box>
      </Paper>
   );
};
