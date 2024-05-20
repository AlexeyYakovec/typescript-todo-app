import { Typography, Paper, Box } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import IconButton from "@mui/material/IconButton";
import { Todo } from "../../../App";

interface TodoItemProps {
   todo: Todo;
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
   onEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
   todo,
   onDeleteTodo,
   onCheckedTodo,
   onEdit,
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
               width: "85%",
               wordBreak: "break-all",
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
            <Typography
               sx={{ textWrap: "wrap" }}
               variant="subtitle1"
               component="div"
            >
               {todo.description}
            </Typography>
         </Box>
         <Box
            sx={{
               width: "15%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <IconButton
               onClick={() => onDeleteTodo(todo.id)}
               aria-label="error"
               color="error"
            >
               <DeleteIcon />
            </IconButton>
            <IconButton
               aria-label="edit"
               color="primary"
               onClick={() => onEdit(todo.id)}
            >
               <CreateIcon />
            </IconButton>
         </Box>
      </Paper>
   );
};
