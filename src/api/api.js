import axios from "axios";

const BASE_URL = "https://code-builder-api.vercel.app";

const profilePicApi = async (id, picBase64) => {
  try {
    const getProfilePicApi = await axios({
      method: "post",
      url: `${BASE_URL}/user/profilePic`,
      headers: {},
      data: {
        id: id,
        profilePic: picBase64,
      },
    });
    return getProfilePicApi.data.profilePic;
  } catch (error) {
    console.log("Error in getting the user's profile picture");
    throw error;
  }
};

const ThemeApi = async (id, value) => {
  try {
    const getThemeApi = await axios({
      method: "post",
      url: `${BASE_URL}/user/theme`,
      headers: {},
      data: {
        id: id,
        theme: value,
      },
    });
    return getThemeApi.data.theme;
  } catch (error) {
    console.log("Error in setting up the user's theme");
    throw error;
  }
};

const signInApi = async (email, password) => {
  try {
    const user = await axios({
      method: "post",
      url: `${BASE_URL}/user/login`,
      headers: {},
      data: {
        email: email,
        password: password,
      },
    });
    return user.data;
  } catch (error) {
    console.log("Error in login");
    throw error;
  }
};

const signUpApi = async (userName, userEmail, userPassword, userBirthDate) => {
  try {
    await axios({
      method: "post",
      url: `${BASE_URL}/user/singup`,
      headers: {},
      data: {
        name: userName,
        birthDate: {
          month: userBirthDate["$M"] + 1,
          day: userBirthDate["$D"],
          year: userBirthDate["$y"],
        },
        email: userEmail,
        password: userPassword,
      },
    });
  } catch (error) {
    console.log("Error in login");
    throw error;
  }
};

export { profilePicApi, ThemeApi, signInApi, signUpApi };