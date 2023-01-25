import { lazy, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Login } from 'src/content/applications/Auth';

import { useNavigate } from 'react-router-dom';

// const Login = Loader(lazy(() => import("src/components/Auth")));

// const checksession = async (UserName) => {
//   if (UserName) {
//     //setSession(accessToken);
//     const url = "/api/logincheck/";
//     let data = {
//       username: UserName,
//       mode: "loginCheck",
//     };
//     const requestOptions = {
//       method: "POST",
//       // Adding body or contents to send
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json",
//       },
//       mode: "cors",
//     };

//     let response = await fetch(url, requestOptions);
//     let userresult = await response.json();
//     //console.log(userresult);
//     if (userresult.status == 1) {
//     } else {
//       sessionStorage.clear();
//       window.location.reload();
//     }
//   }
// };

const Authenticated = (props) => {
  //   checksession(sessionStorage.getItem("UserName"));
  //   const allowedRoles = props.allowedRoles;
  const { children } = props;

  const navigate = useNavigate();

  //   const auth = useAuth();
  //   const location = useLocation();
  //   const [requestedLocation, setRequestedLocation] = useState(null);
  //   const UserName = sessionStorage.getItem('UserName');
  const token = localStorage.getItem('token');
  //   const PK_Oem = sessionStorage.getItem('PK_Oem');

  if (token === null) {
    navigate('/auth/login');
    return <Navigate to="/auth/login" replace />
  }
  //    else if (!auth.isAuthenticated && auth.isInitialized) {
  //     if (location.pathname !== requestedLocation) {
  //       setRequestedLocation(location.pathname);
  //     }
  //     return <Login />;
  //   }
  //   else if (requestedLocation && location.pathname !== requestedLocation) {
  //     setRequestedLocation(null);
  //     return <Navigate to={requestedLocation} />;
  //   }
  //    else if (PK_Oem == 1 && location.pathname == '/' && auth.isInitialized) {
  //     return <Navigate to="manage-users" />;
  //   }
  else return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
