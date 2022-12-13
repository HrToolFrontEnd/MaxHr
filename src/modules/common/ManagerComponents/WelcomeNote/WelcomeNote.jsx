export const WelcomeNote = (props) => {
  return (
    <>
      <div className="row position-relative">
        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
          <div className="welcome_note_div">
            <h3>Welcome Back, {props.name}!</h3>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 welcome_note_mobile">
          <div className=" d-flex justify-content-end welcome_note_btn_div">
            {props.data}
          </div>
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
