import { PageAllTopTitle } from "../../../../../common/ManagerComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../../common/ManagerComponents/Btn/Btn";
import Img from "../../../../../common/components/img/Img";
import { ProfileImg } from "../../../../../common/ManagerComponents/ProfileImg";
import NotesImg from "../../../../../../pics/Manager/notes.png";
import { GrAttachment } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import PdfIcon from "../../../../../../pics/Manager/pdf.png";
import { useState } from "react";
// mui
import { CircularStatic } from "./CircularStatic";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// img link
let Photo = "https://source.unsplash.com/random/500x500/?girl";
export const ProjectDetails = () => {
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="Project" />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-12">
            <ProjectDetailsCard />
          </div>
          <div className="col-12">
            <MyTab />
          </div>
        </div>
      </div>
    </>
  );
};
const ProjectDetailsCard = () => {
  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card_new">
        <div className="row">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 img_dashbaord_white_card_new">
            <ProfileImg className="ProjectDetailsCard_img" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-12 col-12">
            <div className="project_details_card_name">
              <h3>sunny charkhwal</h3>
              <p>info@lunoelectrical.com.au</p>
            </div>

            <div className="project_details_card_box_main_div">
              <div className="project_details_card_box">
                <p>27 Dec 2022</p>
                <span>Due Date</span>
              </div>
              <div className="project_details_card_box project_details_card_box_inner">
                <p>124/200</p>
                <span>Open Tasks</span>
              </div>
              <div className="project_details_card_box project_details_card_box_inner">
                <p>124/200</p>
                <span>Open Tasks</span>
              </div>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src={Photo} />
                <Avatar alt="Travis Howard" src={Photo} />
                <Avatar alt="Agnes Walker" src={Photo} />
                <Avatar alt="Trevor Henderson" src={Photo} />
              </AvatarGroup>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="circular_static_div_main_div">
              <div className="circular_static_div">
                <CircularStatic />
              </div>
              <div className="circular_static_div_text">
                <h3>Project Completion</h3>
                <p>Project is running on track as per stated due date.</p>
                <FullBtn name="View My Tasks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MyTab = () => {
  return (
    <>
      <div className="project_list_tabs_main_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className=" mb-4">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Project Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Team">Team & Work Progress</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Chats">Chats</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Meetings">Meetings & Notes</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">1</Tab.Pane>
            <Tab.Pane eventKey="Overview">
              <Overview />
            </Tab.Pane>
            <Tab.Pane eventKey="Team">
              <TeamWorkProgress />
            </Tab.Pane>
            <Tab.Pane eventKey="Chats">Chats</Tab.Pane>
            <Tab.Pane eventKey="Meetings">
              <Meetings />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
// Meetings & Notes
const Meetings = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-12">
          <div className="row d-flex align-items-baseline">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-6 col-6">
              <PageAllTopTitle title="Scheduled Meetings" />
            </div>
            <div className="ol-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
              <OutlineBtn link="/" name="View All Tasks" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <MeetingsTabeltList />
        </div>
        <div className="col-12">
          <div className="row d-flex align-items-baseline">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-6 col-6">
              <PageAllTopTitle title="Recent Notes" />
            </div>
            <div className="ol-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
              <OutlineBtn link="/" name="View All Notes" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <Notes />
        </div>
      </div>
    </>
  );
};
const MeetingsTabeltList = () => {
  const ProjectListData = [
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      Participants: "6 Participants",
      Organiser: "Organiser",
      ProgressBar: "50",
      date: "29-10-2022",
      link: "/",
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
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      Participants: "6 Participants",
      Organiser: "Organiser",
      ProgressBar: "50",
      date: "29-10-2022",
      link: "/",
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
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      Participants: "6 Participants",
      Organiser: "Organiser",
      ProgressBar: "50",
      date: "29-10-2022",
      link: "/",
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
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      Participants: "6 Participants",
      Organiser: "Organiser",
      ProgressBar: "50",
      date: "29-10-2022",
      link: "/",
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
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td>
            <div className="Participants_main_div_tr">
              <input className="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.MeetingTitle}</div>
          </td>
          <td className="project_list_name">
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
              <span> {props.Participants}</span>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Organiser}</div>
          </td>

          <td>
            <div className="Participants_main_div_tr">{props.date}</div>
          </td>
          <td>
            <div className=" Participants_main_div_tr_btn ">
              <OutlineBtn link={props.link} name="Join" />
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
                <th scope="col">Meeting Title</th>
                <th scope="col">Project Name</th>
                <th scope="col">Participants</th>
                <th scope="col">Organiser</th>

                <th scope="col">Scheduled date</th>
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

const Notes = () => {
  const NotesListData = [
    {
      name: "Akhilesh Soni",
      date: "31/10/2022",
      time: "9:11 AM",
      img: NotesImg,
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/",
    },
    {
      name: "sunny charkhwal",
      date: "31/10/2022",
      time: "9:11 AM",
      img: NotesImg,
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/",
    },
    {
      name: "kamal",
      date: "31/10/2022",
      time: "9:11 AM",
      img: NotesImg,
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/",
    },
    {
      name: "hacking hunter",
      date: "31/10/2022",
      time: "9:11 AM",
      img: NotesImg,
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/",
    },
  ];
  const NotesListApp = (props) => {
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
        { link: "/", name: "Demo" },
        { link: "/", name: "Demo" },
        { link: "/", name: "Demo" },
        { link: "/", name: "Demo" },
        { link: "/", name: "Demo" },
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
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="notes_card_top_div">
          <div className="notes_card_top_opsiton">
            <ProjectListDropDown />
          </div>
          <NavLink to="/">
            <h3>
              {props.name} <span>Created this</span>
            </h3>
            <p>
              {props.date} at {props.time}
            </p>
            <div className="notes_card_img_div">
              <Img className="notes_card_img" backgroundImage={props.img} />
            </div>
            <h5>{props.title}</h5>

            <ul>
              <li className=" ms-1">
                <span>
                  <GrAttachment />
                </span>
                {props.fileNumber}
              </li>
              <li>
                <span>
                  <IoChatbubblesOutline />
                </span>
                {props.comments}
              </li>
              <li>
                <span>
                  <ImHeadphones />
                </span>
                {props.audioClips}
              </li>
            </ul>
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        {NotesListData.map((val, i) => {
          return <NotesListApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
// Meetings & Notes end
// Team & Work Progress
const TeamWorkProgress = () => {
  const ProjectListData = [
    {
      TeamMember: "Shived Bansal",
      Role: "Project Manager",
      Tasks: "44/100",
      Progress: "50",
      Status: "Delayed",

      link: "/",
      img: "https://source.unsplash.com/random/500x500/?girl",
    },
    {
      TeamMember: "Shived Bansal",
      Role: "Project Manager",
      Tasks: "44/100",
      Progress: "70",
      Status: "Delayed",

      link: "/",
      img: "https://source.unsplash.com/random/500x500/?girl",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td className="Participants_main_div">
            <div className="Participants_main_div_inner">
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src={props.img}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span> {props.TeamMember}</span>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Role}</div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Tasks}</div>
          </td>
          <td className="project_list_name project_details_bar_div">
            <div className="Participants_main_div_tr">
              <div className="row align-items-center">
                <div className="col-2">
                  <span>{props.Progress}%</span>
                </div>
                <div className="col-10">
                  <div className="d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                    <div className="progress ">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: props.Progress + "%",
                        }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>

          <td>
            <div className="Participants_main_div_tr">
              <span className="project_details_status_text">
                {props.Status}
              </span>
            </div>
          </td>
          <td>
            <div className=" Participants_main_div_tr_btn ">
              <OutlineBtn link={props.link} name="View" />
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card ">
        <PageAllTopTitle title="Team & Work Progress" />
        <div>
          <table className="table table-hover text-capitalize team_work_progress">
            <thead>
              <tr className="progress_all_tabel_tr">
                <th scope="col">Team Member</th>
                <th scope="col">Role</th>
                <th scope="col">Tasks</th>
                <th scope="col">Progress</th>
                <th scope="col">Status</th>
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
// Team & Work Progress end
// Overview

const Overview = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="dashbaord_white_card">
            <PageAllTopTitle title="Details" />
            <BasicOverviewDetails />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="dashbaord_white_card">
            <PageAllTopTitle title="Service Overview" />
            <ServiceOverview />
          </div>
        </div>
      </div>
    </>
  );
};
const BasicOverviewDetails = () => {
  const handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
  };
  const BasicOverviewDetailsData = [
    {
      title: "Project Name",
      data: "Luno Electrical Website & Marketing",
    },
    {
      title: "Lead Source",
      data: "Website",
    },
    {
      title: "Onboarding Date",
      data: "29/10/2022",
    },
    {
      title: "Start Date",
      data: "29/10/2022",
    },
    {
      title: "Due Date",
      data: "01/01/2023",
    },
    {
      title: "Benchmark",
      data: "Standard",
    },
  ];
  const BasicOverviewDetailsApp = (props) => {
    return (
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="overview_basic_details_div">
          <ul>
            <li className="overview_basic_details_inner_div position-relative">
              {props.title}
              <label>:</label>
            </li>
            <li>
              <p>{props.data}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  const DocumentsAppData = [
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
  ];
  const DocumentsApp = (props) => {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
    return (
      <>
        {visible && (
          <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
            <div className="doc_img_main_div_inner">
              <AiOutlineClose onClick={removeElement} />
              <Img className="doc_img" backgroundImage={props.DocumentImg} />
              <p>{props.name}</p>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <div className="row g-2 all_edit_icon">
        {BasicOverviewDetailsData.map((val, i) => {
          return <BasicOverviewDetailsApp key={i} {...val} />;
        })}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="overview_basic_details_div ">
            <ul>
              <li className="overview_basic_details_inner_div position-relative">
                Priority
                <label>:</label>
              </li>
              <li>
                <p
                  className="project_list_priority_div"
                  style={{ background: "#FF3E48", color: "white" }}
                >
                  <span>High</span>
                </p>
              </li>
            </ul>
            <div className="all_edit_icon_inner">
              <BiEdit />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="overview_basic_details_div">
            <ul>
              <li className="overview_basic_details_inner_div position-relative">
                Amount
                <label>:</label>
              </li>
              <li>
                <p style={{ color: "#3786EE" }}>₹ 20,438</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Brief:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
            <div className="all_edit_icon_inner">
              <BiEdit />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Objective:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
            <div className="all_edit_icon_inner">
              <BiEdit />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Scope:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
            <div className="all_edit_icon_inner">
              <BiEdit />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
              <div className="brief_summery_div ">
                <h3>Attachments:</h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
              <div className="documents_app_btn">
                <input
                  onChange={handleFileUpload}
                  type="file"
                  style={{ display: "none" }}
                  id="dd"
                  hidden
                />
                <label className="manager_btn_full2" htmlFor="dd">
                  <span> Upload Document</span>
                  <BsUpload />
                </label>
              </div>
            </div>
          </div>
          <div className="doc_img_main_div">
            <div className="row g-1">
              {DocumentsAppData.map((val, i) => {
                return <DocumentsApp key={i} {...val} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceOverview = () => {
  const ServiceOverviewData = [
    {
      name: "Design",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "50",
    },
    {
      name: "Development",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "40",
    },
    {
      name: "Design",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "50",
    },
    {
      name: "Development",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "70",
    },
  ];
  const ServiceOverviewApp = (props) => {
    return (
      <>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-12 col-12">
          <div className="service_overview_details_div">
            <div className="service_overview_details">
              <h3>{props.name}</h3>
              <div className="row">
                <div className="col-9">
                  <h4>{props.Department}</h4>
                </div>
                <div className="col-3 text-end">
                  <h5>{props.status}</h5>
                </div>
              </div>
              <div className="text-center">
                <p>{props.progress}%</p>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: props.progress + "%",
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-3">
        {ServiceOverviewData.map((val, i) => {
          return <ServiceOverviewApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
// Overview end
