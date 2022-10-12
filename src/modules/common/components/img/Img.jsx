const Img = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
        onClick={props.onClick}
      ></div>
    </>
  );
};
export default Img;
