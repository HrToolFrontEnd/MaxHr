import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

export const SalaryStracture = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.Salary}</td>
          <td>{props.Amount}</td>
          <td>{props.Fixed}</td>
          <td>{props.Taxable}</td>
        </tr>
      </>
    );
  };
  const IssueAssetsAppData = [
    {
      Salary: "Basic Salary",
      Amount: "112%",
      Fixed: "Percentage",
      Taxable: "Yes",
    },
    {
      Salary: "HRA",
      Amount: "112%",
      Fixed: "Percentage",
      Taxable: "Yes",
    },
    {
      Salary: "Special Allowance",
      Amount: "112%",
      Fixed: "Percentage",
      Taxable: "Fixed",
    },
    {
      Salary: "LTA",
      Amount: "112%",
      Fixed: "Percentage",
      Taxable: "Yes",
    },
  ];

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
              {IssueAssetsAppData.map((val, i) => {
                return (
                  <IssueAssetsApp
                    key={i}
                    Salary={val.Salary}
                    Amount={val.Amount}
                    Fixed={val.Fixed}
                    Taxable={val.Taxable}
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
