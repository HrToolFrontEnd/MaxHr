import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import React, { useState } from "react";
import Img from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/profile.jpeg";
import { Modal } from "react-bootstrap";

export const TicketHistory = () => {
  const [activeTicketType, setActiveTicketType] = useState("open");
  const [openModalShow, setOpenModalShow] = useState(false);
  const [closeModalShow, setCloseModalShow] = useState(false);
  const [openModalData, setOpenModalData] = useState({});
  const [closeModalData, setCloseModalData] = useState({});
  const OpenTicketData = [
    {
      serialNumber: "1",
      TicketID: "12339 cawcs13wr",
      TicketSubject: "Laptop Issue",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progressopen",
      Department: "IT",
      ImgIcon: Icon,
      description: [{ DescriptionText: "Close text" }],
    },
    {
      serialNumber: "1",
      TicketID: "12339 cawcs13wr",
      TicketSubject: "Laptop Issue",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progressopen",
      Department: "IT",
      ImgIcon: Icon,
      description: [{ DescriptionText: "Close text" }],
    },
    {
      serialNumber: "1",
      TicketID: "12339 cawcs13wr",
      TicketSubject: "Laptop Issue",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progressopen",
      Department: "IT",
      ImgIcon: Icon,
      description: [{ DescriptionText: "Close text" }],
    },
  ];
  const CloseTicketData = [
    {
      serialNumber: "1",
      TicketID: "123",
      TicketSubject: "Phone",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progress",
      Department: "IT",
      ImgIcon: Icon,
      description: [
        {
          DescriptionTextTop:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
        },
        {
          DescriptionTextIcon:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
          name: "Sunny charkhwal",
          image: Icon,
        },
      ],
    },
    {
      serialNumber: "1",
      TicketID: "123",
      TicketSubject: "Phone",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progress",
      Department: "IT",
      ImgIcon: Icon,
      description: [
        {
          DescriptionTextTop:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
        },
        {
          DescriptionTextIcon:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
          name: "Sunny charkhwal",
          image: Icon,
        },
      ],
    },
  ];
  const TicketRow = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.serialNumber}</td>
          <td>{props.TicketID}</td>
          <td>{props.TicketSubject}</td>
          <td>
            <div className="ticket_history_list_img_div">
              <Img
                className="ticket_history_list_img"
                backgroundImage={props.ImgIcon}
              />
              {props.AssignedPerson}
            </div>
          </td>
          <td>{props.CreatedDate}</td>
          <td>
            <span className="ticket_history_list_Priority">
              {props.Priority}
            </span>
          </td>
          <td>
            <span className="ticket_history_list_status">{props.Status}</span>
          </td>
          <td>
            <span
              onClick={() => {
                if (activeTicketType === "open") {
                  setOpenModalData(props);
                  setOpenModalShow(true);
                } else {
                  setCloseModalData(props);
                  setCloseModalShow(true);
                }
              }}
              className="ticket_history_list_btn"
            >
              View Details
            </span>
          </td>
        </tr>
      </>
    );
  };
  const OpenTicketModal = () => {
    const closeModal = () => setOpenModalShow(false);
    return (
      <Modal
        show={openModalShow}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contractor_management_Modsal_title "
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>
              Status:
              <span className="ticket_history_list_status_modal mx-2">
                {openModalData.Status}
              </span>
            </h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-0">
          <div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Ticket no:<label>{openModalData.TicketID}</label>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Ticket Date:<span>{openModalData.CreatedDate}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Subject: <span>{openModalData.TicketSubject}</span>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Department:<span>{openModalData.Department}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Priority:<span>{openModalData.Priority}</span>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Attachment:<label>Downalod</label>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {openModalData?.description?.map((val, i) => {
              const UserAvatarView = () => (
                <>
                  {val.image && <span>{val.image} </span>}
                  {val.name && <span>{val.name}</span>}
                </>
              );
              return (
                <div
                  key={i}
                  className="ticket_history_list_modal_data_Description_top_div"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="ticket_history_list_modal_data_Description">
                        {val.name || val.image ? (
                          <UserAvatarView />
                        ) : (
                          <h3>Description:</h3>
                        )}

                        <p>{val.DescriptionText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-12 mb-4">
                <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                  <button
                    className="UploadDocumentModal_body_btn"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="UploadDocumentModal_body_btn2"
                    onClick={closeModal}
                  >
                    Downlaod
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  const CloseTicketModal = () => {
    const [CloseTicketModaInput, setCloseTicketModaInput] = useState(false);
    const CloseTicketModaInputOpen = () => {
      setCloseTicketModaInput(!CloseTicketModaInput);
    };
    const SketchPicker = () => {
      return (
        <>
          <div className=" mt-2 pt-0 p-3">
            <div className="ApprovalDetailsPage_date_picker">
              <textarea
                className="form-control"
                placeholder="Text"
                rows="6"
              ></textarea>
            </div>
          </div>
        </>
      );
    };
    const closeModal = () => setCloseModalShow(false);
    return (
      <Modal
        show={closeModalShow}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contractor_management_Modsal_title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>
              Status:
              <span className="ticket_history_list_status_modal mx-2">
                {closeModalData.Status}
              </span>
            </h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-0">
          <div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Ticket no:<label>{closeModalData.TicketID}</label>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Ticket Date:<span>{closeModalData.CreatedDate}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Subject: <span>{closeModalData.TicketSubject}</span>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Department:<span>{closeModalData.Department}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket_history_list_modal_data_top_div">
              <div className="row">
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div">
                    <h3>
                      Priority:<span>{closeModalData.Priority}</span>
                    </h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ticket_history_list_modal_data_title_div2">
                    <h3>
                      Attachment:<label>Downalod</label>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {closeModalData?.description?.map((val, i) => {
              const UserAvatarView = () => (
                <>
                  {val.image && (
                    <div className="row">
                      <div className="col-12">
                        <div className="close_ticket_modal_img_tex">
                          <Img
                            className="ticket_history_list_img"
                            backgroundImage={val.image}
                          />
                          <span>{val.name}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className=" mx-0">{val.DescriptionTextIcon}</p>
                      </div>
                    </div>
                  )}
                </>
              );
              return (
                <div
                  key={i}
                  className="ticket_history_list_modal_data_Description_top_div"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="ticket_history_list_modal_data_Description">
                        <div className="row">
                          <div className="col-12">
                            {val.name || val.image ? (
                              <UserAvatarView />
                            ) : (
                              <h3>Description:</h3>
                            )}
                          </div>
                          <div className="col-12">
                            <p className=" mx-0"> {val.DescriptionTextTop}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {CloseTicketModaInput ? <SketchPicker /> : null}

            <div className="row">
              <div className="col-12 mb-4">
                <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                  <button
                    className="UploadDocumentModal_body_btn"
                    onClick={CloseTicketModaInputOpen}
                  >
                    reopen
                  </button>
                  <button
                    className="UploadDocumentModal_body_btn2"
                    onClick={closeModal}
                  >
                    Downlaod
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  const dropdownOptions = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="ticket_history_top_tile">
          <TopPageTitle
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Ticket History"
          />
        </div>
        <div className="profile_tab_div_Ticket">
          <button
            className={`mybutton ${
              activeTicketType === "open" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTicketType("open");
            }}
          >
            Open
          </button>
          <button
            className={`mybutton ${
              activeTicketType === "close" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTicketType("close");
            }}
          >
            Close
          </button>
        </div>
        <div className="tableBody">
          <div className="custom_container_iner">
            <div>
              <div className="row g-3 ticket_history_list_filter_div">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="ApprovalDetailsPage_date_picker">
                    <label>From</label>
                    <Input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="ApprovalDetailsPage_date_picker">
                    <label>to</label>
                    <Input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                  <div className="dashboard_top_week_Select">
                    <label className="all_page_my_label">Status</label>
                    <Select options={dropdownOptions} placeholder="All" />
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                  <div className="dashboard_top_week_Select">
                    <label className="all_page_my_label">Priority</label>
                    <Select options={dropdownOptions} placeholder="All" />
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
              </div>
            </div>
            <div className="ApprovalDetailsPage_top_div">
              <table className="table table-hover Contractor_Management_main_div text-center text-capitalize">
                <thead>
                  <tr className="ApprovalDetailsPage_thead_tr">
                    <th scope="col">#</th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Ticket ID
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Ticket Subject
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Assigned Person
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Created date
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Priority
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">
                      <span className="new_application_table_filter_div">
                        Status
                        <span className="new_application_table_filter">
                          <BsCaretUpFill />
                          <BsCaretDownFill />
                        </span>
                      </span>
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTicketType === "open" &&
                    OpenTicketData.map((val, i) => (
                      <TicketRow key={i} {...val} />
                    ))}
                  {activeTicketType === "close" &&
                    CloseTicketData.map((val, i) => (
                      <TicketRow key={i} {...val} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <OpenTicketModal
        ticketData={openModalData}
        show={openModalShow}
        onHide={() => setOpenModalData(false)}
      />
      <CloseTicketModal
        ticketData={closeModalData}
        show={closeModalShow}
        onHide={() => setCloseModalData(false)}
      />
    </>
  );
};
