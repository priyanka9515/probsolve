import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSpring, animated } from "react-spring/web.cjs";
import { Button, Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    height: 300,
    width: 200,
    display: "column"
    // padding: theme.spacing(2, 4, 3)
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          width: 200,
          backgroundColor: "black",
          color: "white",
          height: 60,
          marginLeft: 1000
        }}
      >
        Price Filter
      </button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <Checkbox />
              5000-10,000
            </div>
            <div>
              <Checkbox />
              10,000-15,000
            </div>
            <div>
              <Checkbox />
              15,000-20,000
            </div>
            <div>
              <Checkbox />
              20,000-30,000
            </div>
            <div>
              <Checkbox />
              30,000-50,000
            </div>
            <div>
              <Link to="/LawyerList">
                <Button
                  style={{
                    backgroundColor: "Black",
                    color: "white",
                    marginTop: 30,
                    marginLeft: 90
                  }}
                >
                  Apply
                </Button>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
