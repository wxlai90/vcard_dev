import { useEffect, useRef } from "react";
import QrCode from "qrcode";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlankAvatar from "../../assets/blank-avatar.jpg";
import "./display-profile.css";

const DisplayProfile = ({ userPhoto, userProfile, userProfileQRData }) => {
  const qrRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile) {
      navigate("/create");
      return;
    }

    const qrOpts = {
      color: {
        dark: "#333333",
      },
    };

    QrCode.toCanvas(qrRef.current, userProfileQRData, qrOpts, (err) => {
      if (err) {
        console.log("error:", err);
      }
    });
  }, []);

  return userProfile ? (
    <div className="user-profile-container">
      <div className="user-profile">
        <div className="user-profile__avatar">
          <img src={userPhoto || BlankAvatar} alt="" />
        </div>

        <div className="user-profile__text">
          <h3 className="user-profile__text--name">
            {userProfile["Display Name"]}
          </h3>
          <h3 className="user-profile__text--phone">
            {userProfile["Phone Number"]}
          </h3>
          <h3 className="user-profile__text--email">{userProfile["Email"]}</h3>
          <h3 className="user-profile__text--homepage">
            {userProfile["Homepage"]}
          </h3>
        </div>
      </div>
      <div className="qr-canvas-container">
        <canvas className="qr-canvas" ref={qrRef}></canvas>
      </div>

      <div className="qr-prompt">
        <h1>Scan to add</h1>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => ({
  userPhoto: state.user.userPhoto,
  userProfile: state.user.userProfile,
  userProfileQRData: state.user.userProfileQRData,
});

export default connect(mapStateToProps)(DisplayProfile);
