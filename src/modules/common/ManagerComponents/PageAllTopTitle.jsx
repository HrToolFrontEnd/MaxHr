import { NavLink } from "react-router-dom";

export const PageAllTopTitle = (props) => {
  const Title = () => {
    return (
      <div className="page_All_top_title">
        <h3>{props.title}</h3>
      </div>
    );
  };
  const TitleWithIcon = () => {
    return (
      <div className="page_All_top_title">
        <h3>
          <NavLink to={props.link}>
            <span>{props.icon}</span> {props.title}
          </NavLink>
        </h3>
      </div>
    );
  };
  return props.icon ? <TitleWithIcon /> : <Title />;
};
