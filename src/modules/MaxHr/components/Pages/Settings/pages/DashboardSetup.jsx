import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import Select from "react-select";
import IconApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/drag.png";
import Icon2 from "../../../../../../pics/color.png";
import { useState } from "react";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { SketchPicker } from "react-color";

export const DashboardSetup = () => {
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
              <div className="dashboard_setup_title">
                <h3>Show data on Dashboard by</h3>
              </div>
              <div className="dashboard_setup_text_div">
                <WeekSelect />
              </div>
            </div>
            <DashboardSetupData />
          </div>
        </div>
      </div>
    </>
  );
};
const DashboardSetupData = () => {
  const DashboardSetupDataApp = (props) => {
    const SettingOptions = ({ val }) => {
      const [ColorPicker, setColorPicker] = useState(false);
      const ColorPickerOpen = () => {
        setColorPicker(!ColorPicker);
      };
      let domNode = useClickOutside(() => {
        setColorPicker(false);
      });
      return (
        <>
          <div className="dashboard_setup_text_div">
            <div className="row dashboard_setup_icon_div">
              <div className="col-8">
                <div className="automation_checkbox_div">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={val.id}
                    />
                    <label
                      className="form-check-label automation_checkbox_label"
                      htmlFor={val.id}
                    >
                      {val.label}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className=" d-flex">
                  <IconApp
                    className="dashboard_setup_icon"
                    backgroundImage={val.dragIcon}
                  />
                  <IconApp
                    className="dashboard_setup_icon"
                    backgroundImage={val.colorIcon}
                  />
                  <div
                    onClick={ColorPickerOpen}
                    className="dashboard_setup_color"
                    style={{ backgroundColor: val.color }}
                  ></div>
                  <div ref={domNode}>
                    {ColorPicker ? (
                      <SketchPicker className="color_picker2" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    return (
      <>
        <div>
          <div className="dashboard_setup_title">
            <h3 className="dashboard_setup_title_inner">
              {props.toptitle}
              <span>
                <IconApp
                  className="dashboard_setup_icon"
                  backgroundImage={props.toptitleIcon}
                />
              </span>
            </h3>
          </div>
          {props.arr.cat1.map((val, i) => (
            <SettingOptions val={val} key={i} />
          ))}
          <div className="dashboard_setup_label_div">
            <label className="dashboard_setup_label">{props.SelectTitle}</label>
            {props.Select}
          </div>
        </div>
      </>
    );
  };
  const DashboardSetupDataData = [
    {
      toptitle: "Company Setup",
      toptitleIcon: Icon,
      cat1: [
        {
          label: "Company Setup",
          color: "#0043CE",
          id: "1",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Onboarding new Employee",
          color: "#F1C21B",
          id: "2",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Interview",
          color: "#900F9B",
          id: "3",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Releaving",
          color: "#DA1E28",
          id: "4",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
      ],
    },
    {
      toptitle: "Attendence",
      toptitleIcon: Icon,
      cat1: [
        {
          label: "Total Working Employee",
          color: "#24A419",
          id: "5",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Total Employee on leave",
          color: "#DA1E28",
          id: "6",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Both",
          id: "7",
        },
      ],
    },
    {
      toptitle: "Working formats",
      toptitleIcon: Icon,
      cat1: [
        {
          label: "Employee working from office",
          color: "#24A419",
          id: "8",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Employee working from home",
          color: "#85E57D",
          id: "9",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
      ],
    },
    {
      toptitle: "Events",
      toptitleIcon: Icon,
      cat1: [
        {
          label: "Celeberation",
          color: "#FFFFFF",
          id: "10",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Holiday",
          color: "#FFFFFF",
          id: "11",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Calendar",
          color: "#FFFFFF",
          id: "12",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
      ],
    },
    {
      toptitle: "Events",
      toptitleIcon: Icon,
      SelectTitle: "Default data by",
      Select: <WeekSelect />,
      cat1: [
        {
          label: "Show only working time",
          color: "#24A419",
          id: "11",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Show only overtime",
          color: "#DA1E28",
          id: "12",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Show both working and overtime",
          id: "13",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Show report",
          color: "#FFFFFF",
          id: "14",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
      ],
    },
    {
      toptitle: "Request for approvals/acknowledgeable data",
      toptitleIcon: Icon,
      cat1: [
        {
          label: "Reimbursement",
          color: "#FFFFFF",
          id: "15",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Leave",
          color: "#FFFFFF",
          id: "16",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Timesheet",
          color: "#FFFFFF",
          id: "17",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Notice Period",
          color: "#FFFFFF",
          id: "18",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
        {
          label: "Resignation",
          color: "#FFFFFF",
          id: "19",
          dragIcon: Icon,
          colorIcon: Icon2,
        },
      ],
    },
  ];
  return (
    <>
      {DashboardSetupDataData.map((val, i) => {
        return (
          <DashboardSetupDataApp
            key={i}
            toptitle={val.toptitle}
            toptitleIcon={val.toptitleIcon}
            Select={val.Select}
            SelectTitle={val.SelectTitle}
            arr={val}
          />
        );
      })}
      <div className="mt-4 mb-4 company_setup_bottom_btn">
        <div className=" text-capitalize text-center">
          <button className=" ApprovalDetailsPage_btn">Save Changes</button>
        </div>
      </div>
    </>
  );
};
const WeekSelect = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="dashboard_setup_select_div">
        <div className="dashboard_top_week_Select">
          <Select options={options} placeholder="This week" />
        </div>
      </div>
    </>
  );
};
