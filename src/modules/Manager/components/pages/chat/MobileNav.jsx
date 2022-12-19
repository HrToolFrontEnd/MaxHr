import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineMenu } from "react-icons/ai";

export const MobileNav = (props) => {
  const [showFilters, setShowFilters] = React.useState(false);
  return (
    <>
      <div>
        <div onClick={() => setShowFilters(true)}>
          <span>
            <AiOutlineMenu />
          </span>
        </div>
        <Drawer
          anchor="left"
          open={showFilters}
          onClick={() => setShowFilters(false)}
        >
          <Box role="presentation">
            <div>
              bdsfbjdfjkbjfbjnfjbnfjbjnbjnfg
              {props.data}
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
