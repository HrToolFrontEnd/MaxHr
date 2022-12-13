import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../common/ManagerComponents/Btn/Btn";
import Select from "react-select";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  paddingTop: "15px",
};

export const ExistingClientModal = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  //
  const [ExistingClient, setExistingClient] = useState(false);
  const ExistingClientOpen = () => {
    setExistingClient(!ExistingClient);
  };
  //
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const SelectClient = [
    { value: "Website Design", label: "Website Design" },
    { value: "Application Design", label: "Application Design" },
    { value: "Facebook Post Design", label: "Facebook Post Design" },
    { value: "Flyer Design", label: "Flyer Design" },
  ];
  return (
    <>
      <div>
        <FullBtn
          className="manager_btn_full"
          onClick={handleOpen}
          name="Add Project"
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="add_project_modal_title">
              <h3>Add a project for</h3>
            </div>
            <div className="add_project_modal_tadio_btn_div">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="New Client"
                    control={<Radio />}
                    label="New Client"
                    onChange={removeElement}
                  />
                  <FormControlLabel
                    value="Existing Client"
                    control={<Radio />}
                    label="Existing Client"
                    onChange={ExistingClientOpen}
                  />
                </RadioGroup>
              </FormControl>

              {visible && (
                <div
                  className={`${
                    ExistingClient ? "ExistingClientShow" : "ExistingClientHide"
                  }`}
                >
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                      <div className="dashboard_top_week_Select select_client">
                        <Select
                          // isMulti
                          // menuIsOpen={true}
                          options={SelectClient}
                          placeholder="Select Client"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className=" mt-4 d-flex justify-content-center align-items-center">
                <div className="add_project_modal_btn_one">
                  <OutlineBtn onClick={handleClose} name="Close" />
                </div>
                <div>
                  <FullBtn link="/manager/client_Profile" name="Continue" />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};
