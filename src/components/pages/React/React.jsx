import { Button, Grid } from "@mui/material";
import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";
// const socket = io.connect("http://localhost:5001");
function React() {
  // const [room, setRoom] = useState("");

  // const sendMsg = () => {
  //   socket.emit("send_message", { msg: "hi", room });
  // };
  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };
  // useEffect(() => {
  //   socket.on("recive_msg", (data) => {
  //     alert(data.msg);
  //   });
  // }, [socket]);

  return (
    <>
      <CustBreadcrumb pageName="React" />
      {/* <input value={room} onChange={(e) => setRoom(e.target.value)} />
      <Button onClick={sendMsg}>click</Button>
      <Button onClick={joinRoom}>joinRoom</Button> */}
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="jsx"
        />
      </Grid>
    </>
  );
}

export default React;
