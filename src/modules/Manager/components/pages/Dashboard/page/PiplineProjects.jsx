import PageTop from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import {
  SearchBox,
  InputBox,
} from "../../../../../common/ManagerComponents/form/Form";
import { OutlineBtn } from "../../../../../common/ManagerComponents/Btn/Btn";
import { RightFilters } from "../../../../../common/components/RightFilters/RightFilters";
import { Nav, Tab } from "react-bootstrap";
import List from "../../../../../../pics/list.png";
import Gird from "../../../../../../pics/gird.png";
import Img from "../../../../../common/components/img/Img";
import { Modal } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PiplineProjects = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row align-items-center">
          <div className="col-xxl-11 col-xl-11 col-lg-10 col-md-9 col-sm-8 col-8">
            <div className="top_title_pipline_projects_div">
              <PageTop
                TitleLink={-1}
                TilelIcon={<BsArrowLeft />}
                Name="Projects in pipline (24)"
              />
            </div>
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-2 col-md-3 col-sm-4 col-4">
            <div>
              <OutlineBtn link="/" name="Draft" />
            </div>
          </div>
        </div>
        <GirdAndListViewApp />
      </div>
    </>
  );
};

export const GirdAndListViewApp = () => {
  return (
    <>
      <div className="list_grid_top_div mt-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className=" mb-4">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-2">
                <div className="pipline_projects_filter_input_div">
                  <InputBox type="date" label="from" placeholder="from" />
                </div>
              </div>
              <div className="col-2">
                <div className="pipline_projects_filter_input_div">
                  <InputBox type="date" label="to" placeholder="from" />
                </div>
              </div>
              <div className="col-3">
                <div>
                  <label className="all_page_my_label">Search</label>
                  <SearchBox placeholder="Search here..." />
                </div>
              </div>
              <div className=" col-3 pipline_projects_gird_and_list_view_div ">
                <div>
                  <Nav variant="pills" className="flex">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <Img className="list_view_img" backgroundImage={Gird} />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <Img className="list_view_img" backgroundImage={List} />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3  ">
                <div>
                  <label className="all_page_my_label d-none d-xxl-b d-xl-block d-lg-block d-md-block ">
                    Filters
                  </label>
                  <RightFilters title="filter" data="demo" btn1="1" btn2="2" />
                </div>
              </div>
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <GirdView />
            </Tab.Pane>
            <Tab.Pane eventKey="second">2</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

const GirdView = () => {
  const GirdViewAppData = [
    {
      clientName: "Shived Bansal",
      projectName: "Aftercare",
      Priority: "High",
      servicesNumber: "10",
      date: "Yesterday",
      link: "/",
      cat1: [
        {
          services: "Social Media Marketing",
        },
        {
          services: "SEO",
        },
        {
          services: "Social Media Marketing",
        },
      ],
    },
    {
      clientName: "Shived Bansal",
      projectName: "Aftercare",
      Priority: "High",
      servicesNumber: "10",
      date: "Yesterday",
      link: "/",
      cat1: [
        {
          services: "Social Media Marketing",
        },
      ],
    },
    {
      clientName: "Shived Bansal",
      projectName: "Aftercare",
      Priority: "High",
      servicesNumber: "10",
      date: "Yesterday",
      link: "/",
      cat1: [
        {
          services: "Social Media Marketing",
        },
        {
          services: "SEO",
        },
      ],
    },
    {
      clientName: "Shived Bansal",
      projectName: "Aftercare",
      Priority: "High",
      servicesNumber: "10",
      date: "Yesterday",
      link: "/",
      cat1: [
        {
          services: "SEO",
        },
      ],
    },
  ];
  const GirdViewApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();
    const EditeModal = (props) => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="ApplicationInfo_main_div"
        >
          <Modal.Body>Pending from design end</Modal.Body>
        </Modal>
      );
    };
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="gird_view_card ">
            <div
              onClick={() => navigate(props.link)}
              className="gird_view_user_details"
            >
              <p>
                Client Name: <span>{props.clientName}</span>
              </p>
              <p>
                Project Name:<span>{props.projectName}</span>
              </p>
              <p>
                Priority: <span>{props.Priority}</span>
              </p>
            </div>

            <div className="gird_view_user_Services">
              <label>Services:</label>
              <div className="skills_main_div ">
                {props.arr.cat1.map((val, i) => {
                  return (
                    <div key={i} className="skills_main_inner_div">
                      <span>{val.services}</span>
                    </div>
                  );
                })}

                <div
                  onClick={() => setModalShow(true)}
                  className="skills_main_inner_div"
                >
                  <span>+ {props.servicesNumber}</span>
                </div>
              </div>
            </div>
            <div className="gird_view_user_details_date_divider"></div>
            <div
              onClick={() => navigate(props.link)}
              className="gird_view_user_details gird_view_user_details_date"
            >
              <p>
                date: <span>{props.date}</span>
              </p>
            </div>
          </div>
        </div>
        <EditeModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  };
  return (
    <>
      <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        {GirdViewAppData.map((val, i) => {
          return (
            <GirdViewApp
              key={i}
              clientName={val.clientName}
              projectName={val.projectName}
              Priority={val.Priority}
              servicesNumber={val.servicesNumber}
              date={val.date}
              link={val.link}
              arr={val}
            />
          );
        })}
      </div>
    </>
  );
};
