import { NavLink } from "react-router-dom";

// export const FullBtn = (props) => {
//   return (
//     <>
//       <NavLink className="manager_btn_full" to={props.link}>
//         {props.name}
//       </NavLink>
//     </>
//   );
// };
export const FullBtn = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="manager_btn_full">
        {props.name}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="manager_btn_full2">
        {props.name}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
export const OutlineBtn = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="manager_btn_outline">
        {props.name}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="manager_btn_outline">
        {props.name}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
export const OutlineBtnWithIcon = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="manager_btn_outline_with_icon">
        {props.name} {props.icon}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="manager_btn_outline_with_icon">
        {props.name} {props.icon}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
