import { userTypes } from "./user.types";

export const setUserProfile = (userProfile) => ({
  type: userTypes.SET_USER_PROFILE,
  payload: userProfile,
});

export const setUserPhoto = (userPhotoUrl) => ({
  type: userTypes.SET_USER_PHOTO,
  payload: userPhotoUrl,
});
