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
    padding: "50px 15px",
    border: "2px solid blue",
    // height: "1000px",
  },
  box1: {
    width: "70%",
    marginRight: "2%",
    border: "1px solid black",
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

  box2: {
    width: "22%",
    border: "1px solid black",
    height: "600px",
    position: "fixed",
    left: "66%",
  },
});
