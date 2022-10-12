import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import Select from "react-select";
import { AboutProfileInput } from "./AboutProfile";
import React from "react";
import GIF from "../../../../../common/components/img/Img";
import GifPhoto from "../../../../../../pics/su.gif";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
export const EmployeesSalaryStracture = () => {
  const EmployeesSalaryStractureList = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const options = [
      { value: " precentage", label: " precentage" },
      { value: "Fixed", label: "Fixed" },
    ];
    const options2 = [
      { value: "Flexi", label: "Flexi" },
      { value: " Yes", label: " Yes" },
      { value: "No", label: "No" },
    ];
    const App = (props) => {
      return (
        <>
          <tr>
            <td className="employees_salary_stracture_list_name employees_salary_stracture_list_input_div">
              {props.Salary}
            </td>
            <td className="employees_salary_stracture_list_input_div">
              <AboutProfileInput
                type="number"
                className="form-control"
                placeholder={props.Amount}
              />
            </td>
            <td className=" employees_salary_stracture_list_tr">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="precentage" />
              </div>
            </td>
            <td className="employees_salary_stracture_list_tr">
              <div className="dashboard_top_week_Select">
                <Select options={options2} placeholder="NA" />
              </div>
            </td>
          </tr>
        </>
      );
    };
    const Data = [
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
      {
        Salary: "Basic Salary",
        Amount: "112",
        Fixed: "Percentage",
        Taxable: "Yes",
      },
    ];

    const ModalList = (props) => {
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
        <div>
          <div>
            <table className="table text-center IssueAssets_top_div">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Salary Component
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      %age of CTC or Amount
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Percentage or Fixed
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Taxable
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Data.map((val, i) => {
                  return (
                    <App
                      key={i}
                      Salary={val.Salary}
                      Amount={val.Amount}
                      Fixed={val.Fixed}
                      Taxable={val.Taxable}
                    />
                  );
                })}
                <tr>
                  <td className="employees_salary_stracture_list_name employees_salary_stracture_list_input_div">
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Custome Allowence"
                    />
                  </td>
                  <td className="employees_salary_stracture_list_input_div">
                    <AboutProfileInput
                      type="number"
                      className="form-control"
                      placeholder="50"
                    />
                  </td>
                  <td className=" employees_salary_stracture_list_tr">
                    <div className="dashboard_top_week_Select">
                      <Select options={options} placeholder="precentage" />
                    </div>
                  </td>
                  <td className="employees_salary_stracture_list_tr">
                    <div className="dashboard_top_week_Select">
                      <Select options={options2} placeholder="NA" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="document_verification_app_btn_div">
                  <button>Add More Coloum</button>
                </div>
              </div>
              <div className="col-12">
                <div className=" text-center mt-3 mb-3">
                  <button
                    onClick={() => setModalShow(true)}
                    className="IssueAssets_btn2"
                  >
                    Save Changes
                  </button>
                </div>
                <ModalList
                  show={modalShow}
                  onHide={() => setModalShow(false)}
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
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Customize salary Stracture</h3>
        </div>
        <EmployeesSalaryStractureList />
      </div>
    </>
  );
};
