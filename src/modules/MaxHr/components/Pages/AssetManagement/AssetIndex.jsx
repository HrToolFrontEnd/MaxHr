import { NavLink } from "react-router-dom";
import { BsArrowRight, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Img from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/assitIcon.png";
import Icon3 from "../../../../../pics/assitIcon3.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import React from "react";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { FiChevronDown } from "react-icons/fi";

export const AssetIndex = () => {
  return (
    <>
      <Top />
      <AssetCard />
      <AssetList />
    </>
  );
};
const Top = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="Asset Mangement" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/hr/add_asset">
            <span>Add Asset</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
    </>
  );
};
const AssetList = (props) => {
  const AssetListData = [
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      Id: "MXC01",
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
  ];
  const AssetListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>
            <input className="form-check-input" type="checkbox" />
          </td>
          <td>{props.Id}</td>
          <td>{props.AssetName}</td>
          <td>{props.AssetNo}</td>
          <td>{props.date}</td>
          <td>{props.NoOfAsset}</td>
          <td>{props.Time}</td>
          <td>{props.Amount}</td>
          <td>
            <div className="contractor_management_list_btn">
              <ActionBtn />
            </div>
          </td>
        </tr>
      </>
    );
  };
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container_iner">
        <div>
          <div className="row g-3">
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
                <Select options={options} placeholder="Departments" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Sort by" />
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
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Asset ID
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Asset Name
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Asset No.
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Date
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    No. of Asset
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    ssued Time
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Amount
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
              {AssetListData.map((val, i) => {
                return (
                  <AssetListApp
                    key={i}
                    Id={val.Id}
                    AssetName={val.AssetName}
                    AssetNo={val.AssetNo}
                    date={val.date}
                    NoOfAsset={val.NoOfAsset}
                    Time={val.Time}
                    Amount={val.Amount}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const AssetCard = () => {
  const AssetCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="asset_card">
            <div>
              <Img className="asset_card_icon" backgroundImage={props.Icon} />
            </div>
            <div className="asset_card_text_div">
              <h3>{props.number}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const AssetCardData = [
    {
      Icon: Icon,
      number: "66",
      text: "Number of Asset",
    },
    {
      Icon: Icon,
      number: "66",
      text: "Issued to Employees",
    },
    {
      Icon: Icon3,
      number: "$108,000",
      text: "Value of Asset",
    },
    {
      Icon: Icon3,
      number: "$108,000",
      text: "Purchases in Fascal Year",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 mb-4">
        {AssetCardData.map((val, i) => {
          return (
            <AssetCardApp
              key={i}
              Icon={val.Icon}
              number={val.number}
              text={val.text}
            />
          );
        })}
      </div>
    </>
  );
};
export const ActionBtn = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [removeShow, setRemoveShow] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Action
          <span>
            <FiChevronDown />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/action_Asset")}>
              Edit Details
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setModalShow(true)}>close</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setRemoveShow(true)}>Delete</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <DisableLoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <RemoveModal show={removeShow} onHide={() => setRemoveShow(false)} />
    </>
  );
};
const DisableLoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Close Asset</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <label className="all_page_my_label">Close Asset</label>

              <div>
                <label className="switch">
                  <Input type="checkbox" className="switch_input" />
                  <span className="slider slider2 round"></span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Comment"
                type="text"
                className="form-control"
                placeholder="Add your comment"
              />
            </div>
            <div className="col-12">
              <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button
                  className="UploadDocumentModal_body_btn2"
                  onClick={props.onHide}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
const RemoveModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Delete Asset</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <label className="all_page_my_label">Delete Asset</label>

              <div>
                <label className="switch">
                  <Input type="checkbox" className="switch_input" />
                  <span className="slider slider2 round"></span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Comment"
                type="text"
                className="form-control"
                placeholder="Add your comment"
              />
            </div>
            <div className="col-12">
              <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button
                  className="UploadDocumentModal_body_btn2"
                  onClick={props.onHide}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
