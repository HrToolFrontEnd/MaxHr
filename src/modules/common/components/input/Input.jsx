const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};
export default Input;
