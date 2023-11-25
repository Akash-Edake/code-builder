import { Avatar, Badge } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { geolocationApi } from "../../../api/api";

function GeolocationCoordinates() {
  const [location, setLocation] = useState({
    weather_icons: "",
    temperature: "",
  });
  const initialRef = useRef(true);

  const successCallback = async (position) => {

    const { latitude, longitude } = position.coords;
    const weather = await geolocationApi(latitude, longitude);

    const { weather_icons, temperature } = weather.current;
    setLocation({ weather_icons, temperature });
  };

  const errorCallback = (error) => {
    console.log(error);
  };
  useEffect(() => {
    if (!initialRef.current) {
      return;
    }
    initialRef.current = false;

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  return (
    <Badge sx={{ mr: 3 }} badgeContent={location.temperature + "°c"} color="secondary">
      <Avatar
        alt="Travis Howard"
        src={location.weather_icons[0]}
        sx={{ width: 30, height: 30 }}
      />
    </Badge>
  );
}

export default GeolocationCoordinates;
