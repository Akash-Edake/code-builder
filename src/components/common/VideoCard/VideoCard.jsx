import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Draggable from 'react-draggable';
function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
function VideoCard() {
    const [fullSize,setFullSize]=useState(false)
    const [open, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = useState('xl');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleMaxWidthChange = (event) => {
        setMaxWidth(
          // @ts-expect-error autofill of arbitrary value is not handled.
          event.target.value,
        );
      };
  return (
    <>
    <Card sx={{ display: "flex" }}>
      {fullSize?<iframe
      onClick={()=>setFullSize(true)}
        width="300"
        height="300"
        src="https://www.youtube.com/embed/QxEW1NzE0mM"
        title="हिंदी Oggy and the Cockroaches 🥓🍗 FOOD ONLY 🥓🍗 Hindi Cartoons for Kids"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>:<iframe
      onClick={()=>setFullSize(true)}
        width="150"
        height="150"
        src="https://www.youtube.com/embed/QxEW1NzE0mM"
        title="हिंदी Oggy and the Cockroaches 🥓🍗 FOOD ONLY 🥓🍗 Hindi Cartoons for Kids"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">pre</IconButton>
          <IconButton aria-label="play/pause" onClick={()=>setFullSize(true)}>play</IconButton>
          <IconButton aria-label="next">next</IconButton>
        </Box>
      </Box>
      
    </Card>


    <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        // fullWidth={true}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
        </DialogTitle>
        <DialogContent>
        <iframe width="930" height="523" src="https://www.youtube.com/embed/QxEW1NzE0mM" title="हिंदी Oggy and the Cockroaches 🥓🍗 FOOD ONLY 🥓🍗 Hindi Cartoons for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default VideoCard;
