import { useEffect, useRef } from "react";
import QrCode from "qrcode";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./display-profile.css";

const DisplayProfile = ({ userPhoto, userProfile, userProfileQRData }) => {
  const qrRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfileQRData) {
      navigate("/create");
      return;
    }

    const qrOpts = {
      color: {
        light: "#000000",
        dark: "#ffffff",
      },
    };

    QrCode.toCanvas(qrRef.current, userProfileQRData, qrOpts, (err) => {
      if (err) {
        console.log("error:", err);
      }
    });
  }, []);

  return (
    <section className="user-profile-container">
      <canvas ref={qrRef}></canvas>

      <div className="user-profile">
        <div className="user-profile__avatar">
          <img src={userPhoto} alt="" />
        </div>

        <div className="user-profile__text">
          <h3>{userProfile["Display Name"]}</h3>
          <h3>{userProfile["Phone Number"]}</h3>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userPhoto: state.user.userPhoto,
  userProfile: state.user.userProfile,
  userProfileQRData: state.user.userProfileQRData,
});

export default connect(mapStateToProps)(DisplayProfile);
