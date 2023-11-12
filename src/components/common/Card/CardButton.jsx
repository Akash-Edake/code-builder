import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";

function CardButton({ title, onClick }) {
  const handelClick = () => {
    onClick(title);
  };
  return (
    <>
      <Grid item xs={12} md={2} sm={12}>
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
              <Typography variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Click</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default CardButton;
