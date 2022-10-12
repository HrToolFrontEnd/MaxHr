import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <>
      <div className="top_nav_man_input_div d-none d-xxl-block d-xl-block d-md-block">
        <div className="top_nav_iner_div_input">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <Input
            type="text"
            className="form-control"
            placeholder="What are you looking for today?"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
