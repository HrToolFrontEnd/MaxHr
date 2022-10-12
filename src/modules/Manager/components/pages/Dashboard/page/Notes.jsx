import PageTop from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import {
  InputBox,
  TextareaBox,
  SearchBox,
} from "../../../../../common/ManagerComponents/form/Form";
import { RightFilters } from "../../../../../common/components/RightFilters/RightFilters";
import React from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Notes = () => {
  return (
    <>
      <div className="custom_container">
        <div>
          <PageTop TitleLink={-1} TilelIcon={<BsArrowLeft />} Name="Notes" />
        </div>
        <div className="mb-4">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-9 col-9">
              <SearchBox placeholder="Search here..." />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
              <RightFilters
                title="Filter"
                btn1="Reset"
                btn2="Show results"
                data={<RightFiltersData />}
              />
            </div>
          </div>
        </div>
        <MyNotes />
      </div>
    </>
  );
};
export const RightFiltersData = () => {
  const [FiltersAdd, setFiltersAdd] = useState(false);
  const FiltersAddOpen = () => {
    setFiltersAdd(!FiltersAdd);
  };
  const Data = [
    {
      toptile: "Sort By",
      cat1: [
        {
          label: "Most recent",
        },
        {
          label: "Most relevent",
        },
      ],
    },
    {
      toptile: "Priority",
      cat1: [
        {
          label: "High",
        },
        {
          label: "Medium",
        },
        {
          label: "Low",
        },
      ],
    },
    {
      toptile: "Department",
      cat1: [
        {
          label: "My role only",
        },
        {
          label: "Design",
        },
        {
          label: "Developement",
        },
        {
          label: "Marketing",
        },
        {
          label: "Others",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
  ];
  const App = (props) => {
    return (
      <>
        <div className="row Projects_Right_Filters_Data_main_div">
          <div className="col-12">
            <p>{props.toptile}</p>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div
                key={i}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={val.label} />
                </FormGroup>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const FiltersInnerBtn = () => {
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-6">
            <InputBox
              type="date"
              label="Start Dates"
              placeholder="Add Notes Title"
            />
          </div>
          <div className="col-6">
            <InputBox
              type="date"
              label="Start Dates"
              placeholder="Add Notes Title"
            />
          </div>
          <div className="col-12 text-center">
            <div className={`${FiltersAdd ? "d-block" : "d-none"}`}>
              <button
                className="UploadDocumentModal_body_btn2 w-75"
                onClick={FiltersAddOpen}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {Data.map((val, i) => {
        return <App key={i} toptile={val.toptile} arr={val} />;
      })}
      <div className={`${FiltersAdd ? "d-none" : "d-block"}`}>
        <button
          className="UploadDocumentModal_body_btn2"
          onClick={FiltersAddOpen}
        >
          Custom
        </button>
      </div>
      <div>{FiltersAdd ? <FiltersInnerBtn /> : null}</div>
    </>
  );
};
const MyNotes = () => {
  const [addSkillsModal, setAddSkillsModal] = React.useState(false);
  const App = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const DeletModal = (props) => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="UploadDocumentModal_body">
            <div className="UploadDocumentModal_body_close_btn">
              <span onClick={props.onHide}>
                <AiOutlineClose />
              </span>
            </div>
            <p className="UploadDocumentModal_body_title">Are you sure!</p>
            <p className="UploadDocumentModal_body_text">
              Once deleted it can not be reverted.
            </p>
            <div className="UploadDocumentModal_body_btn_div">
              <button
                className="UploadDocumentModal_body_btn"
                onClick={props.onHide}
              >
                Close
              </button>
              <button className="UploadDocumentModal_body_btn2">Delete</button>
            </div>
          </Modal.Body>
        </Modal>
      );
    };
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="my_notes_main_div">
            <p>{props.date}</p>
            <h3>{props.name}</h3>
            <h5 onClick={() => setAddSkillsModal(true)}>
              {props.text}
              <span>View more</span>
            </h5>
            <RiDeleteBin6Line onClick={() => setModalShow(true)} />
            <DeletModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
  ];
  const AddSkillsModal = (props) => {
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
                  <h3>My Notes</h3>
                </div>
              </div>
            </div>
            <div className="ExperienceEditModal_text">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div className="row align-items-end">
                    <div className="col-12">
                      <div>
                        <InputBox
                          type="text"
                          label="Add Title of Notes"
                          placeholder="Add Notes Title"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row mt-2">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                          <label className="all_page_my_label">
                            Last Modified
                          </label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
                          <label className="all_page_my_label">
                            19th April 2023, 20:39 PM
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <InputBox
                          type="text"
                          label="Add Tags"
                          placeholder="Add Tags"
                        />
                      </div>
                      <label className="all_page_my_label">
                        Add as many tags you want seperate with comma
                      </label>
                    </div>
                    <div className="col-12 mb-2">
                      <div className="skills_main_div ">
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <TextareaBox
                        label="Add Description"
                        placeholder="Add Description"
                        rows="5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="UploadDocumentModal_body_btn_div">
            <button
              className="UploadDocumentModal_body_btn"
              onClick={props.onHide}
            >
              Close
            </button>
            <button className="UploadDocumentModal_body_btn2">Save</button>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <div>
        <div className="">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {Data.map((val, i) => {
              return (
                <App key={i} date={val.date} name={val.name} text={val.text} />
              );
            })}
          </div>
        </div>

        <AddSkillsModal
          show={addSkillsModal}
          onHide={() => setAddSkillsModal(false)}
        />
      </div>
    </>
  );
};
