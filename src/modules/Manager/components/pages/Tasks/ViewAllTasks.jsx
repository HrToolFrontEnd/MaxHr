import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Accordion from "react-bootstrap/Accordion";
import Select from "react-select";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import { useState } from "react";
import { FullBtn } from "../../../../common/ManagerComponents/Btn/Btn";
// mui
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PageAllTopTitle } from "../../../../common/ManagerComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
// index
export const ViewAllTasks = () => {
  const [viewType, setViewType] = useState("plain");
  const ViewChangeLabel = (props) => {
    return (
      <div className="view_change_label">
        {props.icon} <span>{props.title}</span>
      </div>
    );
  };
  const ViewChange = [
    {
      value: "plain",
      label: (
        <ViewChangeLabel title="Plain" icon={<AiOutlineUnorderedList />} />
      ),
    },
    {
      value: "classic",
      label: <ViewChangeLabel title="classic" icon={<VscListSelection />} />,
    },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="back_btn_mb">
          <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="Back" />
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3  align-items-center">
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="view_all_tasks_title_div">
              <p>Luno Electrical Website & Marketing</p>
              <NavLink to="/">Project Details</NavLink>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-end">
            <div className="view_all_tasks_btn">
              <div className="project_list_tabs_main_div">
                <div className="view_change_main_div">
                  <Select
                    options={ViewChange}
                    defaultValue={ViewChange[0]}
                    isSearchable={false}
                    onChange={({ value }) => {
                      setViewType(value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-end">
            <div>
              <FullBtn link="/manager/create_task" name="Create New Task" />
            </div>
          </div>

          <div className="col-12">
            {
              {
                classic: <ClassicView />,
                plain: <AllTasksList />,
              }[viewType]
            }
          </div>
        </div>
      </div>
    </>
  );
};
// index end
// All Tasks list
const AllTasksList = () => {
  const ProjectListData = [
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
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
        { link: "/", name: "Edit" },
        { link: "/", name: "delete" },
        { link: "/", name: "demo" },
        { link: "/", name: "demo" },
        { link: "/", name: "demo" },
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
              {options.map((option, i) => (
                <div key={i} onClick={() => navigate(option.link)}>
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
            <div className="Participants_main_div_tr">
              <input className="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.TaskTitle}</div>
          </td>
          <td className="project_list_name">
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </td>
          <td>
            <div
              className="Participants_main_div_tr"
              style={{ color: props.PrioritybackgroundColor }}
            >
              {props.Status}
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.ProjectName}</div>
          </td>
          <td className="Participants_main_div">
            <div className="Participants_main_div_inner">
              <AvatarGroup max={4}>
                {props.arr.cat1.map((val, i) => {
                  return (
                    <Avatar
                      key={i}
                      alt="Remy Sharp"
                      src={val.img}
                      sx={{ width: 24, height: 24 }}
                    />
                  );
                })}
              </AvatarGroup>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.date}</div>
          </td>
          <td>
            <div className="mt-1">
              <div className="progress_all_option_icon">
                <ProjectListDropDown />
              </div>
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
                <th scope="col">Task Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Project Name</th>
                <th scope="col">Assignee</th>
                <th scope="col">Due Date</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} arr={val} />;
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
// All Tasks list end
// Classic view

export const ClassicView = () => {
  const ClassicViewData = [
    {
      projectName: "max mover",
      projectKey: "0",
      DepartmentCategory: [
        {
          departmentName: "react js Development",
          departmentKey: "0",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departmentName: "Backend",
          departmentKey: "1",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      projectName: "max hr",
      projectKey: "1",
      DepartmentCategory: [
        {
          departmentName: "react js Development",
          departmentKey: "0",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departmentName: "Backend",
          departmentKey: "1",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const ClassicViewApp = (props) => {
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
        { link: "/", name: "edite" },
        { link: "/", name: "delete" },
        { link: "/", name: "demo" },
        { link: "/", name: "demo" },
        { link: "/", name: "demo" },
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
    const TaskLabel = ({ labelRowData }) => {
      return (
        <div>
          <div className="dashbaord_white_card pt-3 px-2 ">
            <div>
              <table className="table table-hover text-capitalize progress_all_tabel_tabel">
                <thead>
                  <tr className="progress_all_tabel_tr">
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">RefID</th>
                    <th scope="col">tasks Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {labelRowData.map((labelRowData, i) => {
                    return (
                      <tr key={i} className="progress_all_tabel_tr_mor">
                        <td>
                          <input className="form-check-input" type="checkbox" />
                        </td>
                        <td>{labelRowData.RefID}</td>
                        <td className="project_list_name">
                          {labelRowData.tasksName}
                        </td>
                        <td>
                          <div
                            className="project_list_priority_div"
                            style={{
                              backgroundColor:
                                labelRowData.PrioritybackgroundColor,
                            }}
                          >
                            <span className="project_list_priority">
                              {labelRowData.PriorityName}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{
                              color: labelRowData.PrioritybackgroundColor,
                            }}
                          >
                            {labelRowData.Status}
                          </span>
                        </td>
                        <td className="progress_all_tabel_td">
                          <div className="progress_all_tabel">
                            <div className="row align-items-center">
                              <div className="col-2">
                                <span>{labelRowData.ProgressBar}%</span>
                              </div>
                              <div className="col-10">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: labelRowData.ProgressBar + "20%",
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
                        <td>
                          <div
                            className="Participants_main_div_inner"
                            style={{ marginTop: "-3px" }}
                          >
                            <AvatarGroup max={4}>
                              {labelRowData.labelRowImgData.map((val, i) => {
                                return (
                                  <Avatar
                                    key={i}
                                    alt="logo"
                                    src={val.img}
                                    sx={{ width: 24, height: 24 }}
                                  />
                                );
                              })}
                            </AvatarGroup>
                          </div>
                        </td>
                        <td>{labelRowData.date}</td>
                        <td>
                          <div className="progress_all_option_icon">
                            <ProjectListDropDown />
                          </div>
                        </td>
                      </tr>
                    );
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
        </div>
      );
    };
    const TasksCategory = (TasksCategoryData) => {
      return (
        <Accordion.Item eventKey={TasksCategoryData.tasksKey}>
          <Accordion.Header className="classic_view_tabel_heder">
            <span>{TasksCategoryData.tasksName}</span>
          </Accordion.Header>
          <Accordion.Body className="classic_view_tabel_body">
            <TaskLabel labelRowData={TasksCategoryData.TasksTabel} />
          </Accordion.Body>
        </Accordion.Item>
      );
    };
    const DepartmentCategory = ({ DepartmentCategoryData }) => {
      return (
        <Accordion.Item eventKey={DepartmentCategoryData.departmentKey}>
          <Accordion.Header className="classic_view_inner_header">
            <span>{DepartmentCategoryData.departmentName}</span>
          </Accordion.Header>
          <Accordion.Body className="classic_view_inner_body">
            <Accordion>
              {DepartmentCategoryData.TasksCategory.map(
                (DepartmentCategoryData, w) => {
                  return <TasksCategory key={w} {...DepartmentCategoryData} />;
                }
              )}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      );
    };

    return (
      <>
        <Accordion.Item className=" mb-2" eventKey={props.projectKey}>
          <Accordion.Header>{props.projectName}</Accordion.Header>
          <Accordion.Body className="classic_view_outer_body pt-0">
            <Accordion>
              {props.DepartmentCategory.map((val, e) => {
                return (
                  <DepartmentCategory key={e} DepartmentCategoryData={val} />
                );
              })}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  };
  return (
    <>
      <div className="classic_view_outer">
        <Accordion>
          {ClassicViewData.map((val, i) => {
            return <ClassicViewApp key={i} {...val} />;
          })}
        </Accordion>
      </div>
      <div className="projec_tabelt_list_pagination_div mt-4">
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </div>
    </>
  );
};
// Classic view end
