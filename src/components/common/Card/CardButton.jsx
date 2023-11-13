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

function CardButton({ title, onClick }) {
  const icon = {
    code: <CodeIcon />,
    videos: <OndemandVideoIcon />,
    documents: <DescriptionIcon />,
  };
  const handelClick = () => {
    onClick(title);
  };
  return (
    <Grid item xs={6} sm={6} md={3} lg={2} >
      <Card
        onClick={handelClick}
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
              style={{ display: "flex", alignItems: "center" }}
            >
              {icon[title.toLowerCase()]} &nbsp; {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardButton;
