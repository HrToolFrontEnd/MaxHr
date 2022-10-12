import { Nav, Tab } from "react-bootstrap";
import List from "../../../../pics/list.png";
import Gird from "../../../../pics/gird.png";
import Img from "../img/Img";
import Select from "react-select";
import Input from "../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const GirdAndListView = (props) => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="list_grid_top_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div>
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="  col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12   dep_all">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Departments" />
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12   dep_all">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Sort by" />
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12  ApprovalDetailsPage_search_input">
                <div className="ApprovalDetailsPage_date_picker">
                  <div className="ApprovalDetailsPage_search_input_iner_div">
                    <span>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
                <div className=" d-none d-xxl-block d-xl-block d-lg-block">
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
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12  ">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>From</label>
                  <Input type="date" className="form-control" />
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 ">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>to</label>
                  <Input type="date" className="form-control" />
                </div>
              </div>
              <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
                <div className=" d-block d-xxl-none d-xl-none d-lg-none">
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
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">{props.GirdView}</Tab.Pane>
            <Tab.Pane eventKey="second">{props.ListView}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
