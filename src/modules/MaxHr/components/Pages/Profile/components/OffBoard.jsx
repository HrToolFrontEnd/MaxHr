import { useState } from "react";
import { AboutProfileInput } from "./AboutProfile";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { UploadDocumentIner } from "./EmployeesDocument";
export const OffBoard = () => {
  const [showOffBoardForm, setShowOffBoardForm] = useState(true);
  const [showOffBoardForm2, setShowOffBoardForm2] = useState(false);
  const [showOffBoardRegForm, setShowOffBoardRegForm] = useState(false);

  const OffBoardForm = () => {
    const Button = () => (
      <button
        onClick={() => {
          setShowOffBoardForm(false);
          setShowOffBoardForm2(true);
        }}
        className="IssueAssets_btn"
      >
        Proceed
      </button>
    );
    return (
      <>
        <div className="EmployeesDocument_top_title">
          <h3> Off Board</h3>
        </div>
        <div className="off_board_text_div">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <div className="row">
            <div className="col-12">
              <div className="automation_checkbox_div">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="2" />
                  <label
                    className="form-check-label automation_checkbox_label"
                    htmlFor="2"
                  >
                    Automatically run payroll on selected date
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="IssueAssets_btn_bottom_div">
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  };
  const OffBoardResignation = () => {
    const Button = () => (
      <button
        onClick={() => {
          setShowOffBoardForm2(false);
          setShowOffBoardRegForm(true);
        }}
        className="IssueAssets_btn"
      >
        Apply
      </button>
    );
    const EditorCustomToolbarOption = () => (
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
      />
    );
    return (
      <>
        <div className="EmployeesDocument_top_title">
          <h3>Resignation</h3>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="Resignation_form_div">
              <AboutProfileInput
                label="Enter your email ID where you want to receive your resignation"
                type="email"
                className="form-control"
                placeholder="Personal email ID"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="Resignation_editor">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <div className="Resignation_upload">
              <UploadDocumentIner />
            </div>
          </div>
          <div className="col-12">
            <div className="IssueAssets_btn_bottom_div">
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  };
  const OffBoardResignationStatus = () => {
    const App = (props) => {
      return (
        <>
          <p style={{ color: props.color }}>{props.status}</p>
        </>
      );
    };
    const Data = [
      {
        status: "Approved by Admin 1",
        color: "green",
      },
      {
        status: "Pending at Admin 2",
        color: "#da1e28",
      },
      {
        status: "Pending at Admin 3",
        color: "#da1e28",
      },
    ];
    return (
      <>
        <div className="EmployeesDocument_top_title">
          <h3>Resignation</h3>
        </div>
        <div className="status_top_div">
          <div className="status_top_div_inner">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <h3>status :</h3>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 status_top_div_inner_data">
                <div>
                  {Data.map((val, i) => {
                    return (
                      <App key={i} status={val.status} color={val.color} />
                    );
                  })}
                </div>
              </div>
              <div className="col-12">
                <div>
                  <label className="all_page_my_label">
                    Complete the Hand over process. Contact your Reporting
                    manager
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="profile_iner_cont">
      {showOffBoardForm && <OffBoardForm />}
      {showOffBoardForm2 && <OffBoardResignation />}
      {showOffBoardRegForm && <OffBoardResignationStatus />}
    </div>
  );
};
