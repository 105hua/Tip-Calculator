import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import "./global.css";

const titleStyle = {

  textAlign: "center",
  fontFamily: "'Poppins', sans-serif",
  userSelect: "none"

}

const subtitleStyle = {

  textAlign: "center",
  fontFamily: "'Poppins', sans-serif",
  userSelect: "none",
  fontSize: "16px",

}

const textFieldStyle = {

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "25px",

}

const buttonStyle = {

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  color: "grey",

}

const IndexPage = () => {

  function calculateTax(){

    var price = parseInt(document.getElementById("inputTextBox").value);

    if(isNaN(price)){

      document.getElementById("outputTextBox").value = "Enter a number.";

    } else {

      var tip = (price / 10) + ((price / 10) / 2);
      document.getElementById("outputTextBox").value = Math.floor(tip);

    }

  }

  return(

    <>
    
      <main>

        <Helmet>

          <title>Tip Calculator</title>

        </Helmet>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

        <h1 id="title"  style={ titleStyle }>Tip Calculator</h1>
        <h2 style={ subtitleStyle }>Made with ❤️ by Josh with Gatsby</h2>

        <div style={ textFieldStyle }>

          <TextField id="inputTextBox" label="Tip" variant="filled" />

        </div>

        <div style={ buttonStyle }>

          <Button onClick={ calculateTax } color="inherit" variant="contained">Calculate Tip</Button>

        </div>

        <div style={buttonStyle}>

          <TextField disabled id="outputTextBox" label="Recommended Tip" defaultValue="Enter a Number." variant="standard" />

        </div>

      </main>

    </>

  )

}

export default IndexPage