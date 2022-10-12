import { Nav, Tab } from "react-bootstrap";
import SwitchInput from "../../../../../common/components/input/Input";
import { AboutProfileInput } from "./AboutProfile";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import GIF from "../../../../../common/components/img/Img";
import GifPhoto from "../../../../../../pics/su.gif";
export const EmployeesOffBoard = () => {
  const CollectAssetList = () => {
    const [HandOverListShow, setHandOverListShow] = React.useState(false);
    const App = (props) => {
      return (
        <>
          <tr>
            <td>{props.AssestName}</td>
            <td>{props.AssestNumber}</td>
            <td>{props.Remarks}</td>
            <td>{props.IssueDate}</td>
            <td>{props.ReturnDate}</td>
            <td>{props.AcknowledgedBy}</td>
            <td>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
              </div>
            </td>
          </tr>
        </>
      );
    };
    const HandOverListShowModal = (props) => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="UploadDocumentModal_body ExperienceEditModal_body">
            <div className="UploadDocumentModal_body_close_btn">
              <span onClick={props.onHide}>
                <AiOutlineClose />
              </span>
            </div>
            <div>
              <div className=" d-flex">
                <div>
                  <div className="Experience_timline_title2">
                    <h3>Return Date</h3>
                  </div>
                </div>
              </div>
              <div className="ExperienceEditModal_text">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-12">
                    <AboutProfileInput
                      label=" select Return Date date "
                      type="date"
                      className="form-control"
                      placeholder=" Title"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="UploadDocumentModal_body_btn_div">
              <button
                onClick={props.onHide}
                className="UploadDocumentModal_body_btn2"
              >
                Return
              </button>
            </div>
          </Modal.Body>
        </Modal>
      );
    };
    const Data = [
      {
        AssestName: "Laptop",
        AssestNumber: "12339 cawcs13wr",
        Remarks: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
        IssueDate: "09/23/2021",
        ReturnDate: "09/23/2021",
        AcknowledgedBy: "Shived Bansal",
      },
    ];
    return (
      <>
        <div>
          <table className="table text-center HandOverList_top_div ">
            <thead>
              <tr>
                <th scope="col">Assest Name</th>
                <th scope="col">Asset Number</th>
                <th scope="col">Remarks</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Acknowledged By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maxlence HR APK</td>
                <td>12339 cawcs13wr</td>
                <td>ID: OAieowhfh9w, Password: kuae837r0jl@$</td>
                <td>09/23/2021</td>
                <td className="hand_over_list_date_icon">
                  <MdDateRange onClick={() => setHandOverListShow(true)} />
                  <HandOverListShowModal
                    show={HandOverListShow}
                    onHide={() => setHandOverListShow(false)}
                  />
                </td>
                <td>Shived Bansal</td>
                <td>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>
                </td>
              </tr>
              {Data.map((val, i) => {
                return (
                  <App
                    key={i}
                    AssestName={val.AssestName}
                    AssestNumber={val.AssestNumber}
                    Remarks={val.Remarks}
                    IssueDate={val.IssueDate}
                    ReturnDate={val.ReturnDate}
                    AcknowledgedBy={val.AcknowledgedBy}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  const Disable = () => {
    const [DisableDateShow, setDisableDateShow] = useState(false);

    const DisableDateShowOpen = () => {
      setDisableDateShow(!DisableDateShow);
    };
    const DisableTime = () => {
      return (
        <>
          <div className="disable_time_div">
            <label className="all_page_my_label"> Disable login</label>
            <p>
              26/12/2022
              <span className="all_page_my_label">by admin 1</span>
            </p>
          </div>
        </>
      );
    };
    return (
      <>
        <div className=" mb-5 mt-5">
          <div className="IssueAssetsAppTop_main_div">
            <div className="row">
              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-3">
                <div className=" mb-3">
                  <label className="switch">
                    <SwitchInput type="checkbox" className="switch_input" />
                    <span
                      onClick={DisableDateShowOpen}
                      className="slider slider2 round"
                    ></span>
                  </label>
                </div>
              </div>
              <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-9 col-9">
                <div>
                  <div>{DisableDateShow ? <DisableTime /> : null}</div>
                </div>
              </div>
            </div>

            <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-12 mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-4 mt-4">
                <AboutProfileInput
                  label="Remarks if any"
                  type="text"
                  className="form-control"
                  placeholder="Add Remarks if any"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const HandOver = () => {
    const RedirectPage = () => {
      window.open("https://www.linkedin.com/login", "_blank");
    };
    const HandOverList = () => {
      const [HandOverListShow, setHandOverListShow] = React.useState(false);
      const App = (props) => {
        const RedirectPage = () => {
          window.open("https://www.linkedin.com/login", "_blank");
        };
        return (
          <>
            <tr>
              <td>{props.NameType}</td>
              <td onClick={RedirectPage} className="hand_over_list_link">
                {props.Link}
              </td>
              <td>{props.Description}</td>
              <td>{props.HandoverDate}</td>
              <td>{props.AcknowledgedBy}</td>
              <td>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                </div>
              </td>
            </tr>
          </>
        );
      };
      const HandOverListShowModal = (props) => {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="UploadDocumentModal_body ExperienceEditModal_body">
              <div className="UploadDocumentModal_body_close_btn">
                <span onClick={props.onHide}>
                  <AiOutlineClose />
                </span>
              </div>
              <div>
                <div className=" d-flex">
                  <div>
                    <div className="Experience_timline_title2">
                      <h3>Hand Over</h3>
                    </div>
                  </div>
                </div>
                <div className="ExperienceEditModal_text">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-12">
                      <AboutProfileInput
                        label=" select Hand Over date "
                        type="date"
                        className="form-control"
                        placeholder=" Title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="UploadDocumentModal_body_btn_div">
                <button
                  onClick={props.onHide}
                  className="UploadDocumentModal_body_btn2"
                >
                  Return
                </button>
              </div>
            </Modal.Body>
          </Modal>
        );
      };
      const Data = [
        {
          NameType: "Laptop",
          Link: "12339 cawcs13wr",
          Description: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
          HandoverDate: "09/23/2021",
          AcknowledgedBy: "Shived Bansal",
        },
        {
          NameType: "Laptop",
          Link: "12339 cawcs13wr",
          Description: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
          HandoverDate: "09/23/2021",
          AcknowledgedBy: "Shived Bansal",
        },
        {
          NameType: "Laptop",
          Link: "12339 cawcs13wr",
          Description: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
          HandoverDate: "09/23/2021",
          AcknowledgedBy: "Shived Bansal",
        },
        {
          NameType: "Laptop",
          Link: "12339 cawcs13wr",
          Description: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
          HandoverDate: "09/23/2021",
          AcknowledgedBy: "Shived Bansal",
        },
        {
          NameType: "Laptop",
          Link: "12339 cawcs13wr",
          Description: "ID: OAieowhfh9w, Password: kuae837r0jl@$",
          HandoverDate: "09/23/2021",
          AcknowledgedBy: "Shived Bansal",
        },
      ];
      return (
        <>
          <div>
            <table className="table text-center HandOverList_top_div ">
              <thead>
                <tr>
                  <th scope="col">Name/Type</th>
                  <th scope="col">Link</th>
                  <th scope="col">Description</th>
                  <th scope="col">Handover Date</th>
                  <th scope="col">Acknowledged By</th>
                  <th scope="col">acknowledged by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maxlence HR APK</td>
                  <td onClick={RedirectPage} className="hand_over_list_link">
                    12339 cawcs13wr
                  </td>
                  <td>ID: OAieowhfh9w, Password: kuae837r0jl@$</td>
                  <td className="hand_over_list_date_icon">
                    <MdDateRange onClick={() => setHandOverListShow(true)} />
                    <HandOverListShowModal
                      show={HandOverListShow}
                      onHide={() => setHandOverListShow(false)}
                    />
                  </td>
                  <td>Shived Bansal</td>
                  <td>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                {Data.map((val, i) => {
                  return (
                    <App
                      key={i}
                      NameType={val.NameType}
                      Link={val.Link}
                      Description={val.Description}
                      HandoverDate={val.HandoverDate}
                      AcknowledgedBy={val.AcknowledgedBy}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      );
    };
    const HandOverForm = () => {
      const [modalShow, setModalShow] = React.useState(false);
      const HandOverFormModal = (props) => {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="UploadDocumentModal_body bg-white">
              <div className="UploadDocumentModal_body_close_btn">
                <span onClick={props.onHide}>
                  <AiOutlineClose />
                </span>
              </div>

              <div>
                <GIF className="success_gif" backgroundImage={GifPhoto} />
              </div>
              <p className="UploadDocumentModal_body_title text-center">
                Success
              </p>
              <div className="UploadDocumentModal_body_btn_div">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  ok
                </button>
              </div>
            </Modal.Body>
          </Modal>
        );
      };
      return (
        <>
          <div className="mb-5">
            <div className="EmployeesDocument_top_title mt-4 mb-4">
              <h3>Add new Handover</h3>
            </div>
            <div className="hand_over_form_top_div">
              <div className="hand_over_form_top_inner_div">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="Name/Type of Handover"
                      type="text"
                      className="form-control"
                      placeholder="Name of Handover"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="link"
                      type="text"
                      className="form-control"
                      placeholder="Link of handover Data"
                    />
                  </div>
                  <div className="col-12">
                    <div className="ApprovalDetailsPage_date_picker">
                      <label>Comments/Feedback</label>
                      <textarea
                        className="form-control"
                        placeholder="Placeholder text"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="Hand Over Date"
                      type="date"
                      className="form-control"
                      placeholder="Link of handover Data"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="Acknowledged by"
                      type="text"
                      className="form-control"
                      placeholder="Type your digital Signature"
                    />
                  </div>
                  <div className="col-12">
                    <div className="hand_over_form_btn_div">
                      <button
                        onClick={() => setModalShow(true)}
                        className="AboutProfile_pss_btn"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HandOverFormModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </>
      );
    };
    return (
      <>
        <HandOverList />
        <HandOverForm />
      </>
    );
  };
  const Action = () => {
    const [ActionShow, setActionShow] = useState(false);

    const ActionShowOpen = () => {
      setActionShow(!ActionShow);
    };
    const ActionForm = () => {
      return (
        <>
          <label className="all_page_my_label">
            If everything goes well, It will be offboarded on 27th of Jan 2023
          </label>
        </>
      );
    };
    const Approval = () => {
      const App = (props) => {
        return (
          <>
            <div className="col-12">
              <div className="approval_title_main_div">
                <div style={{ width: "8rem" }}>
                  <div className="approval_title">
                    <h3>{props.title}</h3>
                  </div>
                </div>
                <div>
                  <div className="approval_title2">
                    <h3>{props.status}</h3>
                  </div>
                </div>
                <div className=" w-100">
                  <div className="setting_text setting_text2">{props.text}</div>
                </div>
              </div>
            </div>
          </>
        );
      };
      const Data = [
        {
          title: "Admin 1",
          status: "Approved",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet ",
        },
        {
          title: "Admin 2",
          status: "Pending",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet ",
        },
      ];
      return (
        <>
          <div className="EmployeesDocument_top_title mt-4 mb-4">
            <h3>Approval</h3>
          </div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {Data.map((val, i) => {
              return (
                <App
                  key={i}
                  title={val.title}
                  status={val.status}
                  text={val.text}
                />
              );
            })}
            <div className="col-12">
              <div className="approval_title_main_div">
                <div style={{ width: "8rem" }}>
                  <div className="approval_title">
                    <h3>Admin 3</h3>
                  </div>
                </div>
                <div>
                  <div className="approval_title2">
                    <button className="approve_input_btn">Approve</button>
                  </div>
                </div>
                <div className="approve_input">
                  <AboutProfileInput
                    type="text"
                    className="form-control"
                    placeholder="Write your Feedback if any"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div>
              <div className="form-check">
                <input
                  onClick={ActionShowOpen}
                  className="form-check-input"
                  type="checkbox"
                  id="1"
                />
                <label className="form-check-label " htmlFor="1">
                  Activate Resignation Process
                </label>
              </div>
              {ActionShow ? <ActionForm /> : null}
            </div>
          </div>
          <div className="col-12">
            <label className="all_page_my_label">
              Explanation from user for this step.
            </label>
            <div className="setting_text setting_text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellu
            </div>
            <div className="action_doc_div">
              <div className="skills_main_div ">
                <div className="skills_main_inner_div">
                  <span>Screen shots</span>
                </div>
                <div className="skills_main_inner_div">
                  <span>Others</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Approval />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="profile_iner_cont assets_tab_div">
        <div className="profile_tab_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <div className="profile_tab_div2">
              <div className="row">
                <div className="col-12">
                  <Nav variant="pills" className="flex">
                    <Nav.Item>
                      <Nav.Link eventKey="0">Action</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1">Hand Over</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Collect Asset</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Disable Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Hold Salary</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="0">
                <div className="m_t"></div>
                <Action />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <div className="m_t"></div>
                <HandOver />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <div className="m_t"></div>
                <CollectAssetList />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <div className="m_t"></div>
                <Disable />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <div className="m_t"></div>
                <Disable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
