import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

function CustBreadcrumb({ pageName }) {
  const { userTheme } = useSelector((state) => state.counter);
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        style={userTheme=="light"?{ color: "#212121" }:{ color: "#fff" }}
        color="inherit"
        to="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        HOME
      </Link>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.primary"
      >
        {pageName}
      </Typography>
    </Breadcrumbs>
  );
}

export default CustBreadcrumb;
