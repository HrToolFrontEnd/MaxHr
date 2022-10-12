import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
export const DocumentSetup = () => {
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="dashboard_setup_top_main_div">
          <div className="dashboard_setup_top_main_div_inner">
            <div>
              <div>
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-12">
                    <label className="all_page_my_label">Document Setup</label>
                    <div className="setting_text">
                      Maxlence HR gives your employees and contractors the
                      option of uploading documents like IDs, contracts etc.
                    </div>
                  </div>
                  <div className="col-12">
                    <ReimbursementSetupList />
                  </div>
                  <div className="col-12  mb-4 company_setup_bottom_btn">
                    <div className=" text-capitalize text-center">
                      <button className=" ApprovalDetailsPage_btn">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ReimbursementSetupList = () => {
  const ReimbursementSetupListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td className=" p-3">{props.title}</td>
          <td className=" text-end p-3">
            <input className="form-check-input" type="checkbox" />
          </td>
          <td className=" text-end p-3">
            <input className="form-check-input" type="checkbox" />
          </td>
        </tr>
      </>
    );
  };
  const ReimbursementSetupListData = [
    {
      title: "Travel",
    },
    {
      title: "Hotel and Accomodation",
    },
    {
      title: "Food",
    },
    {
      title: "Medical",
    },
    {
      title: "Telephone",
    },
    {
      title: "Fuel",
    },
    {
      title: "Imprest",
    },
    {
      title: "Other",
    },
  ];
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover ReimbursementSetup_main_div  text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col" className=" p-3">
                  Reimbursement Type
                </th>
                <th scope="col" className=" text-end p-3">
                  Compulsary?
                </th>
                <th scope="col" className=" text-end p-3">
                  Enabled
                </th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              {ReimbursementSetupListData.map((val, i) => {
                return <ReimbursementSetupListApp key={i} title={val.title} />;
              })}
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="New Type"
                    />
                  </div>
                </td>
                <td colSpan="2">
                  <div className="reimbursement_setup_lisl">
                    <button>Add</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
