import { AboutProfileInput } from "./AboutProfile";

import Select from "react-select";
import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

export const IssueAssets = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.IssueDate}</td>
          <td>{props.Remarks}</td>
        </tr>
      </>
    );
  };
  const IssueAssetsAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const options = [
    { value: " Laptop", label: " Laptop" },
    { value: "mouse", label: " mouse" },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-6">
            <div className="EmployeesDocument_top_title">
              <h3>Issued Assets</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="Issue_Assets_btn_div">
              <button>download</button>
            </div>
          </div>
        </div>
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
              <Select options={options} placeholder="Assets types" />
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
        <div>
          <table className="table text-center IssueAssets_top_div">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Remarks if any</th>
              </tr>
            </thead>
            <tbody>
              {IssueAssetsAppData.map((val, i) => {
                return (
                  <IssueAssetsApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    IssueDate={val.IssueDate}
                    Remarks={val.Remarks}
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
export const ReturnIssueAssets = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.IssueDate}</td>
          <td>{props.ReturnDate}</td>
          <td>{props.Remarks}</td>
        </tr>
      </>
    );
  };
  const IssueAssetsAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const options = [
    { value: " Laptop", label: " Laptop" },
    { value: "mouse", label: " mouse" },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-6">
            <div className="EmployeesDocument_top_title">
              <h3>Returned Assets</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="Issue_Assets_btn_div">
              <button>download</button>
            </div>
          </div>
        </div>
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
              <Select options={options} placeholder="Assets types" />
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
        <div>
          <table className="table text-center IssueAssets_top_div">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Remarks if any</th>
              </tr>
            </thead>
            <tbody>
              {IssueAssetsAppData.map((val, i) => {
                return (
                  <IssueAssetsApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    IssueDate={val.IssueDate}
                    Remarks={val.Remarks}
                    ReturnDate={val.ReturnDate}
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
export const IssueAssetsAppTop = () => {
  const IssueAssetApp = () => {
    return (
      <>
        <div className="IssueAssetsAppTop_main_div mt-0">
          <div className="EmployeesDocument_top_title">
            <h3>Issue Assets</h3>
          </div>
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <label className="all_page_my_label">
                        Search Available Assets
                      </label>
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
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <label className="all_page_my_label">Availability</label>
                  <div className="available_assets_number">2</div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Asset Name"
                    type="text"
                    className="form-control"
                    placeholder="What’s assets"
                  />
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Asset Number"
                    type="number"
                    className="form-control"
                    placeholder="What’s assets number"
                  />
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Issue date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <AboutProfileInput
                label="Remarks if any"
                type="text"
                className="form-control"
                placeholder="Add Remarks if any"
              />
            </div>
          </div>
        </div>
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Issue Assets</button>
        </div>
      </>
    );
  };
  const ReturnAssetList = (props) => {
    const App = (props) => {
      const [returnAssetListModal, setReturnAssetListModal] =
        React.useState(false);

      return (
        <>
          <tr>
            <td>{props.AssetsName}</td>
            <td>{props.AssetsNumber}</td>
            <td>{props.Remarks}</td>
            <td>{props.IssueDate}</td>
            <td>
              <button
                onClick={() => setReturnAssetListModal(true)}
                className="return_asset_list_btn"
              >
                {props.BtnName}
              </button>
            </td>
          </tr>
          <ReturnAssetListModal
            show={returnAssetListModal}
            onHide={() => setReturnAssetListModal(false)}
          />
        </>
      );
    };
    const Data = [
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        IssueDate: "09/23/2021",
        BtnName: "Return",
        Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];
    const options = [
      { value: " Laptop", label: " Laptop" },
      { value: "mouse", label: " mouse" },
    ];
    return (
      <>
        <div className="profile_iner_cont">
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
                <Select options={options} placeholder="Assets types" />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          <div>
            <table className="table text-center return_asset_list_top_div">
              <thead>
                <tr>
                  <th scope="col">Assets Name</th>
                  <th scope="col">Assets Number</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Issue Date</th>
                  <th scope="col">Return date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laptop</td>
                  <td>12339 cawcs13wr</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td>09/23/2021</td>
                  <td>09/23/2021</td>
                </tr>
                {Data.map((val, i) => {
                  return (
                    <App
                      key={i}
                      AssetsName={val.AssetsName}
                      AssetsNumber={val.AssetsNumber}
                      IssueDate={val.IssueDate}
                      BtnName={val.BtnName}
                      Remarks={val.Remarks}
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
  const ReturnAssetListModal = (props) => {
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
                  <h3>Return</h3>
                </div>
              </div>
            </div>
            <div className="ExperienceEditModal_text">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <AboutProfileInput
                    label=" select Return date "
                    type="date"
                    className="form-control"
                    placeholder=" Title"
                  />
                </div>
                <div className="col-12">
                  <div className="ApprovalDetailsPage_date_picker">
                    <label>comment if asset is not in order</label>
                    <textarea
                      className="form-control"
                      placeholder="placeholder Text"
                      rows="3"
                    ></textarea>
                  </div>
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
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="profile_iner_cont assets_tab_div">
            <div className="profile_tab_div">
              <IssueAssetApp />
            </div>
          </div>
        </div>
        <div className="col-12">
          <ReturnAssetList />
        </div>
      </div>
    </>
  );
};
export const EmployeesReturnAssets = () => {
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Return Assets</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Name"
                    type="text"
                    className="form-control"
                    placeholder="Computer"
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Number"
                    type="text"
                    className="form-control"
                    placeholder="CXRpo234cdfg"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Issue date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Expected Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Actual Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Remarks if any"
                type="text"
                className="form-control"
                placeholder="Add Remarks if any"
              />
            </div>
          </div>
        </div>
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Return Assets</button>
        </div>
      </div>
    </>
  );
};
