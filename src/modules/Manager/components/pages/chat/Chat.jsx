import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { MobileNav } from "./MobileNav";
import { BiSearchAlt } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import { BiMicrophone } from "react-icons/bi";
// mui
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { SpeedDial } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";
import CameraAltSharpIcon from "@mui/icons-material/CameraAltSharp";
import HeadsetSharpIcon from "@mui/icons-material/HeadsetSharp";
import CollectionsSharpIcon from "@mui/icons-material/CollectionsSharp";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { LongMenuLeft, LongMenuRight } from "./ChatMenu";
// rsuite ui
import Badge from "@mui/material/Badge";
// mui

import { styled } from "@mui/material/styles";

// api
let userImg = "https://source.unsplash.com/random/500x500/?girl";
let userImg2 = "https://source.unsplash.com/random/500x500/?women";
let userImg3 = "https://source.unsplash.com/random/500x500/?indian,girl";

let userName = "Alissa richards";
let userName2 = "Steven Jury";
let userLastTime = "02:32 am";

const NavLinkTab = () => {
  const NavLinkTabData = [
    {
      userName: userName,
      userImg: userImg,
      UserStatus: "typeing",
      userLastTime: userLastTime,
      userTotleMessage: "10",
      eventKey: "first",
    },
    {
      userName: userName2,
      userImg: userImg2,
      UserStatus: "typeing",
      userLastTime: userLastTime,
      userTotleMessage: "14",
      eventKey: "first2",
    },
  ];
  const NavLinkTabApp = (props) => {
    return (
      <>
        <Nav.Link eventKey={props.eventKey}>
          <ChatLitUi
            userName={props.userName}
            userImg={props.userImg}
            UserStatus={props.UserStatus}
            userLastTime={props.userLastTime}
            userTotleMessage={props.userTotleMessage}
          />
        </Nav.Link>
      </>
    );
  };
  return (
    <>
      {NavLinkTabData.map((val, i) => {
        return <NavLinkTabApp key={i} {...val} />;
      })}
    </>
  );
};
const TabPane = () => {
  const TabPaneData = [
    {
      eventKey: "first",
      userImg: userImg,
      userName: userName,
      UserStatus: "online",
      userLastTime: userLastTime,
    },
    {
      eventKey: "first2",
      userImg: userImg2,
      userName: userName2,
      UserStatus: "online",
      userLastTime: userLastTime,
    },
  ];
  const TabPaneApp = (props) => {
    return (
      <>
        <Tab.Pane eventKey={props.eventKey}>
          <MessigeChatUi
            userImg={props.userImg}
            userName={props.userName}
            UserStatus={props.UserStatus}
            userLastTime={props.userLastTime}
          />
        </Tab.Pane>
      </>
    );
  };
  return (
    <>
      {TabPaneData.map((val, i) => {
        return <TabPaneApp key={i} {...val} />;
      })}
    </>
  );
};

export const Chat = (props) => {
  return (
    <>
      <div className="chat_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row">
            <div className="p1 col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className=" d-none d-xxl-block d-xl-block d-lg-block ">
                <ChatUser
                  userName={props.userName}
                  userImg={props.userImg}
                  UserStatus={props.UserStatus}
                  userLastTime={props.userLastTime}
                  userTotleMessage={props.userTotleMessage}
                />
              </div>
              <div className=" d-block d-xxl-none d-xl-none d-lg-none">
                <MobileNav
                  data={
                    <ChatUser
                      userName={props.userName}
                      userImg={props.userImg}
                      UserStatus={props.UserStatus}
                      userLastTime={props.userLastTime}
                      userTotleMessage={props.userTotleMessage}
                    />
                  }
                />
              </div>
            </div>
            <div className="p2 col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <Tab.Content>
                <TabPane />
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </>
  );
};
const ChatUser = (props) => {
  return (
    <>
      <Nav variant="pills" className="flex-column">
        <div className="chat_list_top_div">
          <div className="chat_search_div">
            <span>
              <BiSearchAlt />
            </span>
            <input type="text" placeholder="search" />
          </div>
          <Nav.Item>
            <NavLinkTab
              userName={props.userName}
              userImg={props.userImg}
              UserStatus={props.UserStatus}
              userLastTime={props.userLastTime}
              userTotleMessage={props.userTotleMessage}
            />
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
};

const ChatLitUi = (props) => {
  return (
    <>
      <div className="chat_list_div">
        <ul>
          <li>
            <Stack direction="row" spacing={1}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={props.userImg}
                  sx={{ width: 30, height: 30 }}
                />
              </StyledBadge>
            </Stack>
          </li>
          <li className="chat_list_name_div">
            <p>{props.userName}</p>
          </li>
          <li className="chat_list_time">
            <div className="chat_list_mess_number">
              {props.userTotleMessage}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const MessigeChatUi = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="chat_label_div">
            <div className="row">
              <div className="col-6">
                <div className=" d-flex">
                  <div
                    className="chat_list_img"
                    style={{
                      backgroundImage: `url(${props.userImg})`,
                    }}
                  ></div>
                  <div className=" mx-2">
                    <h3 className="chat_label_text_div">{props.userName}</h3>
                    <p className="chat_label_status">
                      last seen today at<label>{props.userLastTime}</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="chat_mes_main_div">
            <div className="chating_div">
              <div className="row g-4 mb-5">
                {/* left chat */}
                <div className="col-12">
                  <div className="left_chat_div">
                    <ul>
                      <li>
                        <div className="left_chat_user">
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              sx={{ width: 26, height: 26 }}
                              alt={props.userName}
                              src={props.userImg}
                            />
                          </Stack>
                        </div>
                        <div>
                          <div className="row g-2">
                            <div className="col-12 ">
                              <div className="li_left_chat_div">
                                <div className="left_chat_div_inner">
                                  hello?
                                  <div className="option_chat">
                                    <div className="option_chat_inner_new">
                                      <div className=" position-relative option_chat_inner__nner">
                                        <LongMenuLeft />
                                        <div className="line"></div>
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128512;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128516;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128525;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128151;
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="li_left_chat_div">
                                <div className="left_chat_div_inner">
                                  Hey, I'm going to meet a friend of mine at the
                                  department store. I have to buy some presents
                                  for my parents 🎁.
                                  <div className="option_chat">
                                    <div className="option_chat_inner_new">
                                      <div className=" position-relative option_chat_inner__nner">
                                        <LongMenuLeft />
                                        <div className="line"></div>
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128512;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128516;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128525;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128151;
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="left_chat_time">2:00 am</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* left chat end */}
                {/* right chat  */}
                <div className="col-12">
                  <div className="right_chat_div">
                    <ul>
                      <li>
                        <div>
                          <div className="text-end">
                            <div className="row g-2">
                              <div className="col-12 col_div_inner">
                                <div className="right_chat_div">
                                  <div className="right_chat_div_inner">
                                    Wow that's great
                                  </div>
                                  <div className="option_chat">
                                    <div className="option_chat_inner_new">
                                      <div className="option_chat_inner__nner">
                                        &#128512;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128516;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128525;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128151;
                                      </div>
                                      <div className=" position-relative option_chat_inner__nner">
                                        <div className="line"></div>
                                        <LongMenuRight />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col_div_inner">
                                <div className="right_chat_div">
                                  <ul className=" p-0 m-0 d-flex">
                                    <li>
                                      <div
                                        className="chat_inner_img_shar"
                                        style={{
                                          backgroundImage: `url(${userImg3})`,
                                        }}
                                      ></div>
                                    </li>
                                    <li className="chat_inner_img_shar_right_li">
                                      <div
                                        className="chat_inner_img_shar"
                                        style={{
                                          backgroundImage: `url(${userImg2})`,
                                        }}
                                      ></div>
                                    </li>
                                  </ul>
                                  <div className="option_chat">
                                    <div className="option_chat_inner_new">
                                      <div className="option_chat_inner__nner">
                                        &#128512;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128516;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128525;
                                      </div>
                                      <div className="option_chat_inner__nner">
                                        &#128151;
                                      </div>
                                      <div className=" position-relative option_chat_inner__nner">
                                        <div className="line"></div>
                                        <LongMenuRight />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="left_chat_time">2:000 am</div>
                          </div>
                        </div>
                        <div className="right_chat_user">
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              sx={{ width: 26, height: 26 }}
                              alt={props.userName}
                              src={userImg3}
                            />
                          </Stack>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* right chat end */}
              </div>
            </div>
            <div className="chat_mes_main_div_input_box">
              <div className="chat_mes_input_div">
                <ChatPulsBtn />
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <div className="chat_Input_main_div">
                    <TextField
                      label=""
                      placeholder="Type your message..."
                      multiline
                      variant="filled"
                      fullWidth
                      id="fullWidth"
                    />
                  </div>
                </Box>
                <div className="chat_send_btn">
                  <Tooltip title="Recording Voice" placement="top">
                    <button>
                      <BiMicrophone />
                    </button>
                  </Tooltip>
                </div>
                <div className="chat_send_btn">
                  <Tooltip title="Send Message" placement="top">
                    <button>
                      <IoSendSharp />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ChatPulsBtn = () => {
  const actions = [
    { icon: <FileCopySharpIcon />, name: "File Attached" },
    { icon: <CameraAltSharpIcon />, name: "Camera" },
    { icon: <HeadsetSharpIcon />, name: "Audio" },
    { icon: <CollectionsSharpIcon />, name: "Gallery" },
  ];
  return (
    <>
      <div className="chat_pules_btn">
        <Box>
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{
              position: "absolute",
              bottom: 28,
              left: 16,
            }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
