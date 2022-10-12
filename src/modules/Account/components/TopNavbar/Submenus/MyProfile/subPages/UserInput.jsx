import Input from "../../../../../../common/components/input/Input";
const UserInput = (props) => {
  return (
    <>
      <div className="user_input">
        <label>{props.title}</label>
        <Input
          type={props.type}
          className={props.className}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
export default UserInput;
