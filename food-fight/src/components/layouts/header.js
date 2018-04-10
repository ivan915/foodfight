// import React from 'react';
// import { AppBar, Toolbar, Typography } from 'material-ui';
// import IconButton from 'material-ui/IconButton';
// //import MenuIcon from '@material-ui/icons/Menu';
// import Button from 'material-ui/Button';
//
// export default props =>
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton color="inherit" aria-label="Menu">
//
//       </IconButton>
//       <Typography variant="headline" color="inherit">
//         Food Fight
//       </Typography>
//       <Button color="inherit">Menu</Button>
//     </Toolbar>
//   </AppBar>
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">

          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Food Fight
          </Typography>
          <Button color="inherit">Austin, TX</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
