import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import Admin from "../../pages/Admin/Admin";
import Registration from "../../pages/Registration";
import AdminRoute from "../components/AdminRoute";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>
      <Route path="/" element={
          <GuestRoute>
              <Home />
          </GuestRoute>

      } />
        <Route path="/registration" element={
            <GuestRoute>
                <Registration />
            </GuestRoute>

        } />
        <Route path="/admin" element={

            <AdminRoute>
                <Admin />
            </AdminRoute>

        } />


      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppRoutes;
