import React from 'react'
import { Box, Stack } from "@mui/material";
import { Videos } from './';

const Recommended = ({videos}) => {
  return (
    <Stack direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
        <Box sx={{ height: { sx: "auto", md: "100vh" }, px: { sx: 0, md: 2 } }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
    </Stack>
    
  )
}

export default Recommended;