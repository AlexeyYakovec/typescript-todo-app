import { Typography, Box } from "@mui/material";

export const Header = () => {
   return (
      <Box sx={{ alignSelf: "flex-start" }}>
         <Typography
            sx={{ fontSize: 36 }}
            variant="h1"
            component="h1"
            gutterBottom
         >
            Todo List
         </Typography>
      </Box>
   );
};
