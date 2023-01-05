import { Nav, Tab } from "react-bootstrap";
import { OutlineBtnWithIcon } from "../../../../../common/ManagerComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PageAllTopTitle } from "../../../../../common/ManagerComponents/PageAllTopTitle";
// mui
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ExistingClientModal } from "../ExistingClientModal";
export const ProjectList = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-1 col-sm-12 col-12 order-md-1 order-2">
            <PageAllTopTitle title="Project" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 order-md-2 order-1">
            <div className="header_input_div">
              <IoSearchOutline />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 header_btn order-md-3 order-3">
            <div>
              <ExistingClientModal />
            </div>
          </div>
        </div>
        <div className="project_list_tabs_main_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="project_list_tabs_inner_div">
              <div className=" mb-4">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Assigned">To Be Assigned</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Completed">Completed</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Progress">In Progress</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Hold">On Hold</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Drafts">drafts</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="project_list_tabs_inner_btn">
                <OutlineBtnWithIcon name="All Filters" icon={<FaFilter />} />
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Assigned">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Completed">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Progress">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Hold">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Drafts">
                <ProjecTabeltList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const ProjecTabeltList = () => {
  const ProjectListData = [
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      Status: "TBA",
      ProgressBar: "50",
      date: "29-10-2022",
    },
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#31C971",
      PriorityName: "low",
      Status: "On Track",
      ProgressBar: "80",
      date: "29-10-2022",
    },
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#F3D32C",
      PriorityName: "Medium",
      Status: "On Track",
      ProgressBar: "70",
      date: "29-10-2022",
    },
  ];
  const ProjectListApp = (props) => {
    const ProjectListDropDown = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const navigate = useNavigate();
      const options = [
        { link: "/manager/project_details", name: "View Project Details" },
        { link: "/manager/assign_project", name: "Assign Project" },
        { link: "/manager/create_task", name: "Create Task" },
        { link: "/", name: "Chat" },
        { link: "/", name: "View Notes" },
      ];

      const ITEM_HEIGHT = 30;
      return (
        <>
          <div className="chat_option">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className=" m-0 p-0"
            >
              <BiDotsHorizontalRounded />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "15ch",
                },
              }}
            >
              {options.map((option) => (
                <div key={option.name} onClick={() => navigate(option.link)}>
                  <MenuItem selected={option === "Pyxis"} onClick={handleClose}>
                    <div className="chat_option_name_div">{option.name}</div>
                  </MenuItem>
                </div>
              ))}
            </Menu>
          </div>
        </>
      );
    };
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td>
            <input className="form-check-input" type="checkbox" />
          </td>
          <td>{props.RefID}</td>
          <td className="project_list_name">{props.ProjectName}</td>
          <td>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">
                {props.PriorityName}
              </span>
            </div>
          </td>
          <td>
            <span style={{ color: props.PrioritybackgroundColor }}>
              {props.Status}
            </span>
          </td>
          <td className="progress_all_tabel_td">
            <div className="progress_all_tabel">
              <div className="row align-items-center">
                <div className="col-2">
                  <span>{props.ProgressBar}%</span>
                </div>
                <div className="col-10">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: props.ProgressBar + "%",
                      }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>{props.date}</td>
          <td>
            <div className="progress_all_option_icon">
              <ProjectListDropDown />
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card ">
        <div>
          <table className="table table-hover text-capitalize progress_all_tabel_tabel">
            <thead>
              <tr className="progress_all_tabel_tr">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">RefID</th>
                <th scope="col">Project Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>

                <th scope="col">Progress</th>
                <th scope="col">Due Date</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="projec_tabelt_list_pagination_div">
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </>
  );
};
