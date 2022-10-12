import NotificationImg from "../../../../../common/components/img/Img";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <NavLink to="/hr/notification">
        <div className="notification_top_div">
          <div className=" row m-0">
            <div className="notification_img_col col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
              <div className="notification_img_div">
                <NotificationImg
                  className="notification_img"
                  backgroundImage={props.img}
                />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6 col-6">
              <div>
                <div className="notification_text">
                  <p className="notification_name">{props.name}</p>
                  <p className="notification_mess">{props.text}</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <div className="notification_time_div">
                <p>{props.time}</p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default Card;
