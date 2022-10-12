import { AiOutlineSearch } from "react-icons/ai";
export const InputBox = (props) => {
  return (
    <>
      <label className="all_page_my_label_new">{props.label}</label>
      <input
        type={props.type}
        className="form-control intput_box"
        placeholder={props.placeholder}
      />
    </>
  );
};
export const TextareaBox = (props) => {
  return (
    <>
      <label className="all_page_my_label_new ">{props.label}</label>
      <textarea
        className="form-control textareaBox_box"
        rows={props.rows}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};
export const SelectBox = (props) => {
  const App = (props) => {
    return (
      <>
        <option value={props.value}>{props.option}</option>
      </>
    );
  };
  return (
    <>
      <label className="all_page_my_label_new ">{props.label}</label>
      <select className="form-select SelectBox_box">
        {props.SelectBoxData.map((val, i) => {
          return (
            <App key={i} optionValue={val.optionValue} option={val.option} />
          );
        })}
      </select>
    </>
  );
};
export const CheckBox = (props) => {
  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={props.id} />
        <label className="form-check-label checkbox_label" htmlFor={props.id}>
          {props.text}
        </label>
      </div>
    </>
  );
};

export const SearchBox = (props) => {
  return (
    <>
      <div className="Filters_Search_div">
        <span>
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
