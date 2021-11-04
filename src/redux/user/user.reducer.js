import { makeVCard } from "../../vcard";
import { userTypes } from "./user.types";

const INITIAL_STATE = {
  userProfile: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
        userProfileQRData: makeVCard(action.payload),
      };

    case userTypes.SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
