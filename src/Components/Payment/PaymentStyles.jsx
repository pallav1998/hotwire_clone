import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  Mainpage: {
    padding: "0px",
    margin: "0px",
    width: "100vw",
    backgroundColor: "#f8f8f8d8",
  },

  page: {
    display: "flex",
    width: "75%",
    margin: "auto",
    marginTop: "80px",
    padding: "50px 15px",
    // border: "2px solid blue",
    // height: "1000px",
  },
  box1: {
    width: "70%",
    marginRight: "2%",
    // border: "1px solid black",
    // height: "1000px",
  },
  travelerInfo: {
    "&>button": {
      width: "45%",
      height: "42px",
      margin: "10px 0",
      backgroundColor: "white",
      color: "#e64142",
      border: "1px solid #e64142",
      fontSize: "18px",
      fontWeight: "700",
    },
    "&>button:hover": {
      color: "#901111ea",
      border: "1px solid #901111ea",
      cursor: "pointer",
    },

    "&>p": {
      fontSize: "20px",
    },
    "&>div": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    "&>div>div": {
      margin: "20px 15px",
      height: "44px",
    },
  },

  SecurePayment: {
    "&>img": {
      width: "25%",
      height: "20px",
      marginLeft: "70%",
    },
    "&>p:nth-child(1)": {
      fontSize: "20px",
    },
    "&>p:nth-child(3)": {
      width: "95%",
      backgroundColor: "#e9e9e9",
      padding: "10px",
      fontSize: "13px",
    },
    "&>div": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    "&>div>div": {
      margin: "20px 15px",
      height: "44px",
    },
  },

  ReviewPolicies: {
    // border: "1px solid black",

    "&>div:nth-child(3)": {
      // border: "1px solid black",
      display: "flex",
    },
    "&>div>div": {
      width: "45%",
      lineHeight: "0",
      margin: "auto",
    },
    "&>div>div>p": {
      lineHeight: "20px",
      fontSize: "13px",
    },
    "&>div>div>button": {
      fontSize: "22px",
      backgroundColor: "#e64142",
      color: "white",
      marginBottom: "30px",
      width: "100%",
      height: "45px",
      alignItems: "center",
      fontWeight: "600",
    },
    "&>div>div>div": {
      display: "flex",
      textAlign: "center",
    },
    "&>div>div>div>div": {
      textAlign: "left",
      // border: "1px solid black",
      margin: "auto",
      backgroundColor: "#f0f0f0",
      width: "35%",
      padding: "6px",
    },
    "&>div>div>div>div>h3": {
      color: "#e64142",
      lineHeight: "0",
    },
    "&>div>div>div>div>p": {
      lineHeight: "10px",
    },

    "&>div:nth-child(4)": {
      // border: "1px solid black",
    },
    "&>div>p:nth-child(1)": {
      fontStyle: "italic",
      color: "#02a69e",
      fontSize: "18px",
      fontFamily: "MissionGothic,sans-serif",
      lineHeight: "0",
    },
    "&>div>h4": {
      fontSize: "18px",
      fontFamily: "Lato,sans-serif",
      lineHeight: "10px",
      color: "#333",
      fontWeight: "600",
    },
    "&>div>p:nth-child(3)": {
      fontSize: "14px",
      lineHeight: "0",
    },
    "&>div>p:nth-child(4)": {
      fontSize: "16px",
      fontFamily: "Lato,sans-serif",
    },
  },

  box2: {
    width: "22%",
    border: "1px solid black",
    height: "600px",
    position: "fixed",
    left: "67%",
  },

  RefNo: {
    backgroundColor: "#e9e9e9",
    width: "100vw",
    height: "30px",
    fontSize: "12px",
    lineHeight: "16px",

    "&>p": {
      marginLeft:"13%"
    }
  },
});
