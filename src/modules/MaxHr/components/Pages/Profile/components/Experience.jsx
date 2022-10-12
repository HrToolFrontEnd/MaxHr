import EX from "../../../../../../pics/ex.png";
import EX2 from "../../../../../../pics/ex2.png";
import Edit from "../../../../../../pics/edit.png";
import { Modal } from "react-bootstrap";
import React from "react";
import ProfileIcon from "../../../../../common/components/img/Img";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AboutProfileInput } from "../components/AboutProfile";
import { MdOutlineClose } from "react-icons/md";
export const Experience = () => {
  const [NewExperiencesModal, setNewExperiencesModal] = React.useState(false);
  const [addSkillsModal, setAddSkillsModal] = React.useState(false);

  const ExperienceApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-2">
                  <ProfileIcon
                    className="Experience_timline_img"
                    backgroundImage={props.img}
                  />
                </div>
                <div className="col-10">
                  <div className="Experience_timline_title">
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
                <ProfileIcon
                  className="Experience_timline_edit_img"
                  backgroundImage={Edit}
                  onClick={() => setEditModalShow(true)}
                />
                <RiDeleteBin6Line
                  onClick={() => setModalShow(true)}
                  className="Experience_timline_edit_img2"
                />
                <UploadDocumentModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <ExperienceEditModal
                  show={editModalShow}
                  onHide={() => setEditModalShow(false)}
                />
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const ExperienceData = [
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="profile_iner_cont">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12 order-md-1 order-2 ">
                <div className="EmployeesDocument_top_title">
                  <h3>Experience with Maxlence Consulting</h3>
                  <p>4 years 0 month 3 days</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-md-2 order-1">
                <div className="Experience_top_btn_div">
                  <button
                    onClick={() => setNewExperiencesModal(true)}
                    className="Experience_top_btn"
                  >
                    Add New Experience
                  </button>
                  <AddNewExperiencesModal
                    show={NewExperiencesModal}
                    onHide={() => setNewExperiencesModal(false)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <ul className="Experience_timline_top_div">
                    {ExperienceData.map((val, i) => {
                      return (
                        <ExperienceApp
                          key={i}
                          img={val.img}
                          name={val.name}
                          date={val.date}
                          role={val.role}
                          text={val.text}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <div className="profile_iner_cont">
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="skills_title">Skills</p>
                  </div>
                  <div className="col-6 skills_title2">
                    <p onClick={() => setAddSkillsModal(true)}>
                      Add
                      <span>
                        <AiOutlinePlus />
                      </span>
                    </p>
                    <AddSkillsModal
                      show={addSkillsModal}
                      onHide={() => setAddSkillsModal(false)}
                    />
                  </div>
                </div>
                <div className="skills_main_div ">
                  <div className="skills_main_inner_div">
                    <span>Photoshop</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Illustrator</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>HTML</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>CSS</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Javascript</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Reserach</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Php</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Python</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <div className="profile_iner_cont">
                <div className="row mb-2">
                  <div className="col-12">
                    <p className="skills_title">Project Completed</p>
                  </div>
                </div>
                <div className="skills_main_div ">
                  <div className="skills_main_inner_div">
                    <span>Aftercare</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence PM</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence HR</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence CRM</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence</span>
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
export const PreviousExperiences = () => {
  const [PreviousExperiencesModal, setPreviousExperiencesModal] =
    React.useState(false);
  const PreviousExperiencesApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="Experience_timline_title2">
                    <h3>
                      {props.name} <span>{props.subName}</span>
                    </h3>
                    <p>
                      {props.date} to {props.subDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
                <ProfileIcon
                  className="Experience_timline_edit_img"
                  backgroundImage={Edit}
                  onClick={() => setEditModalShow(true)}
                />
                <RiDeleteBin6Line
                  onClick={() => setModalShow(true)}
                  className="Experience_timline_edit_img2"
                />
                <UploadDocumentModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <ExperienceEditModal
                  show={editModalShow}
                  onHide={() => setEditModalShow(false)}
                />
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const PreviousExperiencesData = [
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 order-md-1 order-2 ">
            <div className="EmployeesDocument_top_title">
              <h3>Previous Experiences</h3>
              <p>4 years 0 month 3 days</p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 order-md-2 order-1">
            <div className="Experience_top_btn_div">
              <button
                onClick={() => setPreviousExperiencesModal(true)}
                className="Experience_top_btn"
              >
                Add Experience
              </button>
              <AddPreviousExperiencesModal
                show={PreviousExperiencesModal}
                onHide={() => setPreviousExperiencesModal(false)}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ul className="Experience_timline_top_div">
                {PreviousExperiencesData.map((val, i) => {
                  return (
                    <PreviousExperiencesApp
                      key={i}
                      name={val.name}
                      subName={val.subName}
                      date={val.date}
                      subDate={val.subDate}
                      role={val.role}
                      text={val.text}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ExperienceEditModal = (props) => {
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
              <ProfileIcon
                className="Experience_timline_img"
                backgroundImage={EX}
              />
            </div>
            <div>
              <div className="Experience_timline_title2">
                <h3>Design Head</h3>
                <p>27 sep, 2020</p>
              </div>
            </div>
          </div>
          <div className="ExperienceEditModal_text">
            <div className="row">
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div">
                  <label className="form-label">Role</label>
                </div>
              </div>
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div2">
                  <label className="form-label">0/100</label>
                </div>
              </div>
            </div>
            <textarea
              className="form-control "
              rows="5"
              placeholder="lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
            ></textarea>
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
const UploadDocumentModal = (props) => {
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
const AddPreviousExperiencesModal = (props) => {
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
                <h3>Add Previous Experiences</h3>
              </div>
            </div>
          </div>
          <div className="ExperienceEditModal_text">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="job title"
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="company name"
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="start date"
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="end date"
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div">
                  <label className="form-label">Role</label>
                </div>
              </div>
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div2">
                  <label className="form-label">0/100</label>
                </div>
              </div>
            </div>
            <textarea
              className="form-control "
              rows="5"
              placeholder="lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
            ></textarea>
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
const AddNewExperiencesModal = (props) => {
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
                <h3>Add New Experiences</h3>
              </div>
            </div>
          </div>
          <div className="ExperienceEditModal_text">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="job title"
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="Select Date (when you got this post)"
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div">
                  <label className="form-label">Role</label>
                </div>
              </div>
              <div className="col-6">
                <div className="ExperienceEditModal_text_label_div2">
                  <label className="form-label">0/100</label>
                </div>
              </div>
            </div>
            <textarea
              className="form-control "
              rows="5"
              placeholder="lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
            ></textarea>
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
                <h3>Add Skills</h3>
              </div>
            </div>
          </div>
          <div className="ExperienceEditModal_text">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-12">
                <div className="row align-items-end">
                  <div className="col-9">
                    <AboutProfileInput
                      label=" title"
                      type="text"
                      className="form-control"
                      placeholder=" Title"
                    />
                  </div>
                  <div className="col-3">
                    <button className="UploadDocumentModal_body_btn2 m-0 w-100 text-center px-0">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
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
