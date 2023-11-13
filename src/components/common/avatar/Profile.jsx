import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { profilePicApi } from "../../../api/api";

function Profile() {
  const loginUser = JSON.parse(sessionStorage.getItem("userData")) || null;
  const [profileImage, setProfileImage] = React.useState(loginUser?.profilePic);

  useEffect(() => {
    profilePicApi(loginUser._id, "").then((data) => {
      setProfileImage(data);
      loginUser.profilePic = data;
      sessionStorage.setItem("userData", JSON.stringify(loginUser));
    });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result will be a base64 encoded image string
        // const base64Image = reader.result;
        // setProfileImage(base64Image);
        resizeFile(reader.result, file, (resizedImage) => {
          setProfileImage(resizedImage);
          loginUser.profilePic = resizedImage;
          sessionStorage.setItem("userData", JSON.stringify(loginUser));
          profilePicApi(loginUser._id, resizedImage);
          // You can upload the base64-encoded image using your API function here
          // createImage(resizedImage);
        });
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const resizeFile = (base64, file, callback) => {
    const MAX_FILE_SIZE_BYTES = 50000; // 50KB

    const img = new Image();
    img.src = base64;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 800;

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const resizedBase64 = canvas.toDataURL("image/jpeg"); // Adjust format as needed

      if (resizedBase64.length <= MAX_FILE_SIZE_BYTES) {
        callback(resizedBase64);
      } else {
        Resizer.imageFileResizer(
          file,
          300, // Width
          300, // Height
          "JPEG", // Format
          70, // Quality (0-100)
          0, // Rotation
          (uri) => {
            callback(uri);
          },
          "base64" // Output type
        );
        // console.error("Image size exceeds 50KB");
        // alert("Image size exceeds 50KB");
        // Handle error or inform the user
      }
    };
  };

  return (
    <>
      <label for="file-upload">
        <Avatar alt="" src={profileImage} />
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        name="upload profile pic"
        id="file-upload"
        onChange={handleImageChange}
      />
    </>
  );
}

export default Profile;
