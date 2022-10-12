const Logo = (props) => {
  return (
    <>
      <div className={props.className}>
        <img src={props.img} alt={props.alt} />
      </div>
    </>
  );
};

export default Logo;
