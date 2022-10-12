import Select from "react-select";
import React from "react";
import Input from "../../../../../common/components/input/Input";
import { IoSearchOutline } from "react-icons/io5";
import { PagesTopTitle } from "../../../../components/Pages/Dashboard/index";
export const EmployeesTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <PagesTopTitle title="Employees Profile" />
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 position-relative">
          <div className="profile_top_title2">
            <div className="profile_top_title_iner_div">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Department" />
              </div>
              <div className="profile_input_div">
                <span>
                  <IoSearchOutline />
                </span>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search by name, email or department"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
