import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexDirection: "row",
  },

  box1: {
    display: "flex",
    flexDirection: "row",
    marginRight: "30vw",
    // flexGrow: "1",
    marginTop: "25px",
    "&>h6": {
      margin: "0 14px",
      fontSize: "16px",
    },
    "&>img": {
      width: "120px",
      height: "55px",
    },
  },

  box2: {
    display: "flex",
    flexDirection: "row",
    // flexGrow: "1",
    marginTop: "25px",
    "&>div": {
      margin: "0 14px",
      fontSize: "16px",
    },
    "&>h6": {
      margin: "0 16px",
      fontSize: "16px",
    },
  },

  navbar: {
    position: "fixed",
    color: "black",
    backgroundColor: "white",
    height: "60px",
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
    marginTop: "100px",
    margin: "auto",
    padding: "2rem",
    width: "360px",
    height: "500px",
  },

  //SignIn Modal
  SignInBox1: {
    display: "flex",
    flexDirection: "row",
    marginTop: "-30px",
    marginLeft: "-30px",
    boxShadow: "0 1px 15px 0 cyan",
    width: "420px",
    height: "50px",

    "&>h6": {
      marginTop: "8px",
      marginLeft: "25px",
    },

    "&>svg": {
      marginTop: "14px",
      marginLeft: "17vw",
      cursor: "pointer",
    },
  },
  SignInBox2: {
    marginTop: "25px",
    width: "380px",
    "&>button": {
      width: "155px",
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
    marginBottom: "20px",
    "&>div": {
      width: "360px",
      margin: "10px 0",
    },
  },

  SignInBox4: {
    display: "flex",
    marginTop: "-10px",
  },

  SignInBox5: {
    marginTop: "-10px",
    textAlign: "center",
    lineHeight: "0px",
    "&>button": {
      width: "360px",
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
      width: "100px",
      height: "40px",
      marginTop: "10px",
      fontSize: "10px",
      marginLeft: "80px",
    },
  },

  //Modal For Sign Up

  modal1: {
    background: "white",
    marginTop: "75px",
    margin: "auto",
    padding: "2rem",
    width: "360px",
    height: "580px",
  },

  SignUpBox1: {
    display: "flex",
    flexDirection: "row",
    margin: "-30px 0 10px -30px",
    boxShadow: "0 1px 15px 0 cyan",
    width: "420px",
    height: "50px",
    "&>h6": {
      marginTop: "8px",
      marginLeft: "25px",
    },

    "&>svg": {
      marginTop: "14px",
      marginLeft: "10vw",
      cursor: "pointer",
    },
  },

  SignUpBox2: {
    margin: "0px",
    height: "400px",
    width: "400px",
    marginBottom: "20px",
    marginLeft: "-15px",
    // border: "2px solid black",
    overflowY: "scroll",
  },

  SignUpBox3: {
    fontSize: "14px",
    lineHeight: "0px",
  },

  SignUpBox4: {
    fontSize: "12px",
    lineHeight: "14px",
  },
});
