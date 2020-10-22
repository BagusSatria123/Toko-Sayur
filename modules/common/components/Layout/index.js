import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Mobileheader from "../../../mobile/components/Header";

const useStyles = makeStyles({
  content: {
    marginTop: 74,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Mobileheader />
      <div className={classes.content}>{children}</div>
    </React.Fragment>
  );
};

Layout.PropTypes = {
  children: PropTypes.OneOfTypes([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
