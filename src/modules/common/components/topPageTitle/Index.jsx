import { NavLink } from "react-router-dom";
// import { BsArrowLeft } from "react-icons/bs";
const Index = (props) => {
  const Link = () => {
    return (
      <NavLink
        to={props.TitleLink}
        className="profil_emp_inter_page_title finance_inter_page_title"
      >
        {props.TilelIcon}
        {props.Name}
      </NavLink>
    );
  };
  const Text = () => {
    return (
      <span className="profil_emp_inter_page_title">
        {props.TilelIcon}
        {props.Name}
      </span>
    );
  };
  return props.TitleLink ? <Link /> : <Text />;
};
export default Index;
