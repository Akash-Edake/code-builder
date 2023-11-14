import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DescriptionIcon from "@mui/icons-material/Description";
import Snippets from "../Code snippets/Snippets";
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import DocCard from "../docCard/DocCard";

function CardButton({ titles, componentType }) {
  const [show, setShow] = useState(titles[0]);

  const icon = {
    code: <CodeIcon sx={{ mr: 1 }} />,
    videos: <OndemandVideoIcon sx={{ mr: 1 }} />,
    documents: <DescriptionIcon sx={{ mr: 1 }} />,
  };

  const tab = {
    code: (
      <>
        <Snippets fileType={componentType} />
      </>
    ),
    videos: <VideoCard fileType={componentType} />,
    documents: <DocCard fileType={componentType} />,
  };

  const handelClick = (title) => {
    setShow(title);
  };

  return (
    <>
      {titles?.map((title) => {
        return (
          <Grid item xs={6} sm={6} md={3} lg={1.5}>
            <Card
              onClick={() => handelClick(title)}
              variant="outlined"
              sx={{
                boxShadow: 2,
                borderRadius: 2,
              }}
              className="onhover"
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {icon[title.toLowerCase()]} {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
      {tab[show]}
    </>
  );
}

export default CardButton;
