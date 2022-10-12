export const WelcomeNote = (props) => {
  return (
    <>
      <div className="row position-relative">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="welcome_note_div">
            <h3>Welcome Back, {props.name}!</h3>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 welcome_note_mobile">
          <div className=" d-flex justify-content-end">{props.data}</div>
        </div>
        <div className="col-12">
          <div className="welcome_note_hr_div">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
