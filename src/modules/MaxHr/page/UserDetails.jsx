import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ModalIcon1 from "../../../pics/modal1.png";
import ModalIcon2 from "../../../pics/modal2.png";
import ModalIcon3 from "../../../pics/modal3.png";
import PdfIcon from "../../../pics/docnew.png";
import { FaDownload } from "react-icons/fa";
import IconImg from "../../common/components/img/Img";
export const UserDetails = () => {
  const changNameUser = (CardIconImg) => {
    window.open(CardIconImg, "__blank");
  };
  const UserDetailsCard = (propss) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 g-4">
          <div className="UserDetails_modal_pic_main_div">
            <IconImg
              className="UserDetails_modal_pic"
              backgroundImage={propss.modalImg}
            ></IconImg>
            <div
              className="UserDetails_modal_pic_bottom_title_div UserDetails_modal_text_show_hide"
              onClick={() => changNameUser(PdfIcon)}
            >
              <div className="row UserDetails_modal_icon_row">
                <div className="col-2">
                  <IconImg
                    className="UserDetails_modal_icon"
                    backgroundImage={propss.modalImgIcon}
                  />
                </div>
                <div className="col-10 p-0">
                  <div className="UserDetails_modal_icon_name">
                    {propss.name}
                  </div>
                </div>
                <div className="col-12">
                  <span className="UserDetails_modal_icon_name_time">
                    {propss.time}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="UserDetails_modal_icon_btn_div">
                <NavLink className="UserDetails_modal_icon_btn" to="/">
                  <FaDownload />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const UserDetailsCardData = [
    {
      modalImg: PdfIcon,
      modalImgIcon: ModalIcon1,
      name: "name...",
      fileSize: "28kb",
      time: "You edited it yesterday",
    },
    {
      modalImg: PdfIcon,
      modalImgIcon: ModalIcon2,
      name: "name...",
      fileSize: "28kb",
      time: "You've opened frequently",
    },
    {
      modalImg: PdfIcon,
      modalImgIcon: ModalIcon3,
      name: "name...",
      fileSize: "28kb",
      time: "You edited in the past week",
    },
    {
      modalImg: PdfIcon,
      modalImgIcon: ModalIcon1,
      name: "name...",
      fileSize: "28kb",
      time: "You edited it today",
    },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="custom_container_iner">
          <div>
            <div className="row">
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to={-1}>
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>sunny charkhwal</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row m-0">
            {UserDetailsCardData.map((val, i) => {
              return (
                <UserDetailsCard
                  key={i}
                  modalImg={val.modalImg}
                  modalImgIcon={val.modalImgIcon}
                  name={val.name}
                  fileSize={val.fileSize}
                  time={val.time}
                />
              );
            })}
          </div>
          <UserDetailsList />
        </div>
      </div>
    </>
  );
};

export const UserDetailsList = () => {
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };
  const UserDetailsListData = [
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Roushan Kuma.doc",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Roushan Kuma.pdf",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Roushan Kuma.doc",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Roushan Kuma.pdf",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Roushan Kuma.doc",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Roushan Kuma.pdf",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Roushan Kuma.doc",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Roushan Kuma.pdf",
      Owner: "sunny charkhwal",
      modified: "29 Apr 2022",
    },
  ];
  const UserDetailsListCard = (props) => {
    return (
      <>
        <tr>
          <td className="UserDetailsList_icon_top_div">
            <div className=" d-flex align-items-center">
              <IconImg
                className="UserDetailsList_icon"
                backgroundImage={props.ListIcon}
              />
              <span onClick={() => changNameUser(PdfIcon)}>
                {props.ListName}
              </span>
            </div>
          </td>
          <td>{props.Owner}</td>
          <td>{props.modified}</td>
          <td>
            <NavLink to="/">download</NavLink>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" px-3">
        <table className="table text-capitalize mt-4 table_top_div">
          <thead>
            <tr className="UserDetails_list_th">
              <th scope="col">name</th>
              <th scope="col">Owner</th>
              <th scope="col">Last modified</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {UserDetailsListData.map((val, i) => {
              return (
                <UserDetailsListCard
                  key={i}
                  ListIcon={val.ListIcon}
                  ListName={val.ListName}
                  Owner={val.Owner}
                  modified={val.modified}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
