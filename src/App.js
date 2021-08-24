import logo from './logo.svg';
//import './App.css';

import {Home} from './components/Home';
import {Department} from './components/Department';
import {Employee} from './components/Employee';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        React JS Tutorials
      </h3>

      <Navigation />

      <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/department' component={Department} />
          <Route path='/employee' component={Employee} />

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;


// import React, { Suspense, useEffect, useContext } from "react";
// import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import theme from "./theme";
// import GlobalStyles from "./GlobalStyles";
// import Router from "./routes";
// // import NavBar from "./components/NavBar";
// // import { BrowserRouter } from "react-router-dom";
// // import { connect } from "react-redux";
// // import * as actions from "./redux/actions";
// // import { AuthContext } from "./auth/AuthProvider";
// // import Toast from "./components/FormUI/Toast";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
// }));

// const App = ({
//   loadLookupLists,
//   loadLocations,
//   loadVehicleTypes,
//   loadUserProfile,
//   user,
// }) => {
//   const auth = useContext(AuthContext);

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const profile = auth.getProfile();
//   //     if (profile) {
//   //       await loadUserProfile(
//   //         { clientId: profile.clientId, userId: profile.userId },
//   //         auth.getToken()
//   //       );
//   //       // await loadLookupLists(profile.clientId, auth.getToken());
//   //       // await loadLocations(profile.clientId, auth.getToken());
//   //       // await loadVehicleTypes(profile.clientId, auth.getToken());
//   //     }
//   //   }
//   //   fetchData();
//   // }, 
//   // [auth, loadLocations]);

//   const classes = useStyles();

//   return (
//     <MuiThemeProvider theme={theme}>
//       <CssBaseline />
//       <GlobalStyles />
//       <BrowserRouter>
//         <Suspense fallback="loading...">
//           <div className={classes.root}>
//             {/* <NavBar user={user} /> */}
//             <Router />
//             {/* <Toast /> */}
//           </div>
//         </Suspense>
//       </BrowserRouter>
//     </MuiThemeProvider>
//   );
// };

// const mapDispatchToProps = {
//   loadLookupLists: actions.loadLookupLists,
//   loadUserProfile: actions.loadUserProfile,
//   loadLocations: actions.loadLocations,
//   loadVehicleTypes: actions.loadVehicleTypes,
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);