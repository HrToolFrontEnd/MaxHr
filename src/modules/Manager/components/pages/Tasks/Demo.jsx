import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <Drawer anchor="right" open={state} onClick={() => setState(false)}>
        <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
      </Drawer>
      <div>
        <Button onClick={() => setState(true)}>right</Button>
      </div>
    </div>
  );
}
