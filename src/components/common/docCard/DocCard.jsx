import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
function DocCard() {
    return ( 
        <Card   variant="outlined"
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 75,
          maxWidth: 150,
        }}
        className="onhover1">
            <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div" textAlign={'center'}>
            <FileCopyRoundedIcon  fontSize="large"/>
          </Typography>
        </CardContent>
        <CardActions  >
        <a href="../../../assets/react/js&react.pdf" target="_self" ><Button size="small"><VisibilityIcon/> </Button> </a>
          <Button size="small"><DownloadIcon/> </Button>
        </CardActions>
        </CardActionArea>
      </Card>
     );
}

export default DocCard;