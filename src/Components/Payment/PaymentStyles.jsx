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

  checkInDetails: {
    display: "flex",
    justifyContent: "space-around",
    "& p": {
      color: "gray",
      lineHeight: "10px",
    },
  },

  box2: {
    width: "26%",
    border: "1px solid black",
    height: "600px",
    position: "fixed",
    left: "67%",
    bottom: "5%",

    "&>h2": {
      marginLeft: "20px",
      //marginTop:"1px"
    },
    "&>hr": {
      width: "83%",
      margin: "auto",
      color: "lightGray",
    },
  },
  box2_Div1: {
    width: "100%",
    //marginTop:"-18px",
    height: "50px",
    backgroundColor: "#d43131",
    display: "flex",
    color: "white",

    "&>span": {
      fontSize: "20px",
      marginTop: "3%",
      marginLeft: "5px",
    },
  },
  box2_Div2: {
    display: "flex",
    marginLeft: "20px",
    color: "#d43131",

    "&>svg": {
      marginBottom: "20px",
      marginTop: "4px",
    },

    "&>h1": {
      marginTop: "2%",
    },
    "&>h1>span": {
      color: "gray",
      fontWeight: "400",
    },
  },
  box2_Div4: {
    //marginLeft: "20px",
    marginLeft: "22px",
    marginTop: "-8%",
    fontWeight: "500",
    color: "gray",
  },
  hotIcon: {
    marginTop: "4%",
  },
  box2_Div6: {
    display: "flex",
    marginLeft: "22px",
    marginTop: "2%",

    "&>div": {
      width: "40px",
      height: "20px",
      backgroundColor: "#af4507",
      borderRadius: "5px",
      padding: "2px",
      textAlign: "center",
      color: "#fff",
    },
    "&>h3": {
      marginTop: "8px",
      marginLeft: "8px",
      color: "#0e662b",
      lineHeight: "5px",
    },
  },
  box2_Div5: {
    marginLeft: "20px",
  },
  box2_Div7: {
    marginLeft: "20px",
    display: "flex",

    "&>span": {
      marginLeft: "20%",
    },
    "&>p": {
      marginTop: "-0.5%",
      color: "gray",
    },
  },
  box2_Div8: {
    marginLeft: "20px",
    display: "flex",

    "&>span": {
      marginLeft: "13%",
      textDecoration: "line-through",
      marginTop: "-5px",
    },
    "&>p": {
      marginTop: "-0.5%",
      color: "gray",
      lineHeight: "2px",
    },
  },
  box2_Div9: {
    display: "flex",

    backgroundColor: "#edfaf1",

    "&>span": {
      marginLeft: "50%",
      marginTop: "10px",
    },
    "&>p": {
      marginTop: "10px",
      marginLeft: "20px",
      color: "gray",
    },
  },
  box2_Div10: {
    width: "100%",
    height: "17.5%",
    backgroundColor: "#edfaf1",
    borderBottom: "3px solid #54ce7c",

    "&>hr": {
      width: "83%",
      margin: "auto",
      color: "lightGray",
    },
    "&>p": {
      color: "#54ce7c",
      marginLeft: "20px",
      lineHeight: "2px",
    },
  },
  box2_Div10_Div: {
    display: "flex",
    marginTop: "-10px",

    "&>span": {
      marginLeft: "53%",
      color: "#36a38c",
    },
    "&>p": {
      marginTop: "-0.5%",
      color: "#36a38c",
      marginLeft: "20px",
    },
  },

  circleoutIcon: {
    marginTop: "4%",
  },

  RefNo: {
    backgroundColor: "#e9e9e9",
    width: "100vw",
    height: "30px",
    fontSize: "12px",
    lineHeight: "16px",

    "&>p": {
      marginLeft: "13%",
    },
  },
});
