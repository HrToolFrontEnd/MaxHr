import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { useState } from "react";
import { UploadDocumentIner } from "../Profile/components/EmployeesDocument";
import { NavLink } from "react-router-dom";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Logo from "../../../../common/components/img/Img";
import GifPhoto from "../../../../../pics/su.gif";
import React from "react";

export const AddAsset = () => {
  const [AssetAddRemove, setAssetAddRemove] = useState(true);
  const AssetAddRemoveOpen = () => {
    setAssetAddRemove(!AssetAddRemove);
  };
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
            {AssetAddRemove ? (
              <PageTop
                title="Add Asset"
                TilelIcon={<BsArrowLeft />}
                TitleLink={-1}
              />
            ) : (
              <PageTop
                title="Add or Remove Asset"
                TilelIcon={<BsArrowLeft />}
                TitleLink={-1}
              />
            )}
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="add_asset_right_btn" onClick={AssetAddRemoveOpen}>
              {AssetAddRemove ? (
                <TopRightBtn
                  text="Add or Remove Asset "
                  right={<BsArrowRight />}
                />
              ) : (
                <TopRightBtn
                  text="Add or Remove Asset "
                  left={<BsArrowLeft />}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12 ">
            <div className="profile_iner_cont mt-4">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  {AssetAddRemove ? <AddAssetForm /> : <AddOrRemoveAsset />}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  ">
            {AssetAddRemove ? <AddAssetList /> : <AddedAssetList />}
          </div>
        </div>
      </div>
    </>
  );
};
const TopRightBtn = (props) => {
  return (
    <>
      <span className="left_awro">{props.left}</span>
      {props.text}
      <span className="right_awro">{props.right}</span>
    </>
  );
};
const PageTop = (props) => {
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div mb-4">
          <div className="col-12">
            <TopPageTitle
              TitleLink={props.TitleLink}
              TilelIcon={props.TilelIcon}
              Name={props.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const AddAssetForm = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const options = [
    { value: "degital", label: "degital" },
    { value: "flowers", label: "flowers" },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="dashboard_top_week_Select">
            <label className="all_page_my_label">Type of Asset</label>
            <Select options={options} placeholder="Please pick a type" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset Name"
            type="text"
            className="form-control"
            placeholder="What’s assets"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset Number"
            type="text"
            className="form-control"
            placeholder="What’s assets number"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="No of Asset"
            type="number"
            className="form-control"
            placeholder="0"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="In date"
            type="date"
            className="form-control"
            placeholder="0"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Purchased From"
            type="text"
            className="form-control"
            placeholder=" Purchased From"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Model"
            type="text"
            className="form-control"
            placeholder=" Model"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Supplier"
            type="text"
            className="form-control"
            placeholder="Supplier number"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Condition"
            type="text"
            className="form-control"
            placeholder="Condition"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Value"
            type="text"
            className="form-control"
            placeholder="Value"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Waranty in months"
            type="text"
            className="form-control"
            placeholder="Waranty in months"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Status"
            type="text"
            className="form-control"
            placeholder="Status"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset User"
            type="text"
            className="form-control"
            placeholder="Who all can use it"
          />
        </div>
        <div className="col-12">
          <div className="DocumentCompanySetup_upload">
            <UploadDocumentIner />
          </div>
        </div>
        <div className="col-12">
          <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 mt-0">
            <div>
              <div>
                <NavLink to={-1}>
                  <button className="IssueAssets_btn3 mx-1">Cancel</button>
                </NavLink>
              </div>
            </div>
            <div>
              <button
                className="IssueAssets_btn2 mx-1"
                onClick={() => setModalShow1(true)}
              >
                Add Asset
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Success show={modalShow1} onHide={() => setModalShow1(false)} />
        </div>
      </div>
    </>
  );
};
const AddOrRemoveAsset = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <AboutProfileInput
            label="Add An Asset Type"
            type="text"
            className="form-control"
            placeholder="Add Asset Name"
          />
        </div>
        <div className="col-12">
          <div className="document_verification_app_btn_div text-center">
            <button
              onClick={() => setModalShow1(true)}
              className=" w-auto px-4"
            >
              Add
            </button>
          </div>
          <Success show={modalShow1} onHide={() => setModalShow1(false)} />
        </div>
      </div>
    </>
  );
};
const AddAssetList = (props) => {
  const AddAssetListData = [
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
  ];
  const AddAssetListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.AssetName}</td>
          <td>{props.AssetNo}</td>
          <td>{props.date}</td>
          <td>{props.NoOfAsset}</td>
          <td>{props.Time}</td>
          <td>{props.Amount}</td>
          <td>
            <span className="reimbursement_view_btn">
              <NavLink to="/hr/action_Asset">Action</NavLink>
            </span>
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
      <PageTop title="Recently Added Assets" />
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
          <table className="table table-hover Asset_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Asset Name</th>
                <th scope="col">Asset No.</th>
                <th scope="col">Date</th>
                <th scope="col">No. of Asset</th>
                <th scope="col">Issued Time</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {AddAssetListData.map((val, i) => {
                return (
                  <AddAssetListApp
                    key={i}
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
const AddedAssetList = (props) => {
  const AddedAssetListData = [
    {
      AssetName: "Digital",
      DateAdded: "05/25/2021",
    },
    {
      AssetName: "Stationery",
      DateAdded: "05/25/2021",
    },
  ];
  const AddedAssetListApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.AssetName}</td>
          <td>{props.DateAdded}</td>
          <td>
            <span
              className="reimbursement_view_btn"
              onClick={() => setModalShow(true)}
            >
              Rename
            </span>
            <AddedAssetModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </td>
          <td>
            <span className="reimbursement_view_btn">
              <span>Delete</span>
            </span>
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
      <PageTop title="Added Asset" />
      <div className="custom_container_iner ">
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
          <table className="table table-hover Asset_main_div2 text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Asset Name</th>
                <th scope="col">Asset No.</th>
                <th scope="col">Rename</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {AddedAssetListData.map((val, i) => {
                return (
                  <AddedAssetListApp
                    key={i}
                    AssetName={val.AssetName}
                    DateAdded={val.DateAdded}
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
const AddedAssetModal = (props) => {
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
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <AboutProfileInput
              label="Rename Name Asset Name"
              type="text"
              className="form-control"
              placeholder="Add Asset Name"
            />
          </div>
        </div>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            save
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Success = (props) => {
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
          <Logo className="success_gif" backgroundImage={GifPhoto} />
        </div>
        <p className="UploadDocumentModal_body_title text-center">Success</p>
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
