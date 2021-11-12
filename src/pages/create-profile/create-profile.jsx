import InputText from "../../components/input-text/input-text";

import "./create-profile.css";
import { vCardFields } from "../../constants/vcard-fields";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserProfile, setUserPhoto } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const CreateProfile = ({ userProfile, setUserProfile, setUserPhoto }) => {
  const [state, setState] = useState(userProfile || {});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    const blob = new Blob([file]);

    const url = URL.createObjectURL(blob, { type: blob.type });

    setUserPhoto(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile(state);
    navigate("/");
  };

  return (
    <section className="create-profile">
      <h1>Create a profile</h1>
      <form className="create-profile__form" onSubmit={handleSubmit}>
        {vCardFields.map((field, idx) => (
          <InputText
            label={field.name}
            key={idx}
            name={field.name}
            onChange={handleChange}
            value={state[field.name] || ""}
          />
        ))}

        <input type="file" onChange={handleFileUpload} />

        <div>
          <button className="btn">Save</button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.user.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  setUserPhoto: (userPhoto) => dispatch(setUserPhoto(userPhoto)),
  setUserProfile: (userProfile) => dispatch(setUserProfile(userProfile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
