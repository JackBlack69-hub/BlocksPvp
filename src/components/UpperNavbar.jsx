import React from "react";
import { Box, Button } from "@mui/material";

export default function UpperNavbar() {
  return (
    <Box
      style={{
        backgroundColor: "#0D0B1B",
        borderRadius: 20,
        paddingLeft: "0",
      }}
      sx={{ width: "100%", height: "25%", alignSelf: "baseline" }}
    >
      <Button sx={{ p: 1 }}> 1K Raffel</Button>
    </Box>
  );
}
