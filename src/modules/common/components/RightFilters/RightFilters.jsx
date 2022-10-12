import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { GrFilter } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

export const RightFilters = (props) => {
  const [showFilters, setShowFilters] = React.useState(false);
  return (
    <>
      <div>
        <div className="Projects_btn_div" onClick={() => setShowFilters(true)}>
          <p>Filters</p>
          <span>
            <GrFilter />
          </span>
        </div>
        <Drawer
          className="projact_right_filter_div"
          anchor="right"
          open={showFilters}
        >
          <Box role="presentation">
            <div className="projact_right_filter_inner_div">
              <div className="row">
                <div className="col-6">
                  <p className="projact_right_filter_title">{props.title}</p>
                </div>
                <div className="col-6 projact_right_filter_title_close_btn">
                  <IoCloseSharp onClick={() => setShowFilters(false)} />
                </div>
                <div className="col-12">
                  <div className="projact_right_filter_data">{props.data}</div>
                </div>
              </div>
              <div className="row projact_right_filter_btn_div">
                <div className="col-12">
                  <div className="UploadDocumentModal_body_btn_div">
                    <button className="UploadDocumentModal_body_btn">
                      {props.btn1}
                    </button>
                    <button className="UploadDocumentModal_body_btn2">
                      {props.btn2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
