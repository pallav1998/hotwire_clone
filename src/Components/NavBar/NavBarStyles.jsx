import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  flex: {
    // border: "2px solid blue",
  },
  navbar: {
    color: "black",
    backgroundColor: "white",
    minHeight: "60px",
    marginBottom: "100px",
  },

  box1: {
    display: "flex",
    // justifyContent: "flex-start",
    // border: "1px solid black",
    marginRight: "23vw",
    "&>h6": {
      margin: "5px 14px",
      fontSize: "16px",
    },
    "&>img": {
      width: "120px",
      height: "30px",
    },
  },

  box2: {
    display: "flex",
    justifyContent: "flex-end",
    // border: "1px solid black",
    "&>div": {
      margin: "0 14px",
      fontSize: "15px",
    },
    "&>h6": {
      fontSize: "15px",
      width: "105px",
    },
  },

  icon: {
    marginTop: "6px",
    display: "flex",
    flexDirection: "row",
  },
  button1: {
    backgroundColor: "white",
    color: "#db3939",
    borderRadius: "20px",
    border: "1px solid #db3939",
    width: "77px",
    height: "32px",
    fontSize: "10px",
    "&:hover": {
      border: "3px solid #db3939",
      backgroundColor: "white",
    },
  },

  button2: {
    backgroundColor: "#db3939",
    color: "white",
    borderRadius: "20px",
    border: "2px solid #db3939",
    width: "80px",
    height: "32px",
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "#942929",
      border: "2px solid #942929",
    },
  },

  //modal
  modal: {
    background: "white",
    marginTop: "12vh",
    margin: "auto",
    padding: "2rem",
    width: "23vw",
    height: "550px",
  },

  //SignIn Modal
  SignInBox1: {
    display: "flex",
    marginTop: "-30px",
    marginLeft: "-30px",
    boxShadow: "0 1px 15px 0 cyan",
    width: "26.8vw",
    height: "50px",

    "&>h6": {
      marginTop: "8px",
      marginLeft: "24px",
    },

    "&>svg": {
      marginTop: "14px",
      marginLeft: "18vw",
      cursor: "pointer",
    },
  },
  SignInBox2: {
    marginTop: "25px",
    width: "26.8vw",
    "&>button": {
      width: "9.5vw",
      height: "45px",
      margin: "0 16px",
    },

    "&>button:nth-child(1)": {
      backgroundColor: "#247aec",
      color: "white",
    },
    "&>button:nth-child(2)": {
      backgroundColor: "white",
      color: "#545b6c",
      border: "1px solid #545b6c",
    },
  },
  svg: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },

  SignInBox3: {
    marginBottom: "15px",
    "&>div": {
      width: "23vw",
      margin: "10px 0",
    },
  },

  SignInBox4: {
    display: "flex",
    marginTop: "-25px",
    marginBottom: "30px",
  },

  SignInBox5: {
    marginTop: "-10px",
    textAlign: "center",
    lineHeight: "0px",
    "&>button": {
      width: "22vw",
      height: "50px",
      marginTop: "20px",
      fontSize: "20px",
      backgroundColor: "#db3939",
      color: "white",
    },
    "&>button:hover": {
      color: "#db3939",
    },
  },

  SignInBox6: {
    display: "flex",
    // lineHeight: "0px",
    "&>button": {
      width: "7vw",
      height: "40px",
      marginTop: "10px",
      fontSize: "10px",
      marginLeft: "80px",
    },
  },

  //Modal For Sign Up

  modal1: {
    background: "white",
    marginTop: "50px",
    margin: "auto",
    padding: "2rem",
    width: "23vw",
    height: "610px",
  },

  SignUpBox1: {
    display: "flex",
    flexDirection: "row",
    margin: "-30px 0 10px -30px",
    boxShadow: "0 1px 15px 0 cyan",
    width: "26.8vw",
    height: "50px",
    "&>h6": {
      marginTop: "8px",
      marginLeft: "25px",
    },

    "&>svg": {
      marginTop: "14px",
      marginLeft: "12vw",
      cursor: "pointer",
    },
  },

  SignUpBox2: {
    margin: "0px",
    height: "400px",
    width: "25vw",
    marginBottom: "20px",
    marginLeft: "-15px",
    // border: "2px solid black",
    overflowY: "scroll",
  },

  SignUpBox3: {
    fontSize: "14px",
    "&>p": {
      lineHeight: "0px",
      marginBottom: "-5px",
    },
  },

  SignUpBox4: {
    fontSize: "12px",
    lineHeight: "14px",
    "&>p": {
      lineHeight: "15px",
    },
  },
});
