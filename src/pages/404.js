import React from "react";
import Button from "@mui/material/Button";

const titleStyle = {

    textAlign: "center",
    fontFamily: "'Poppins', sans-serif"
    

}

const buttonStyle = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    color: "grey",
  

}

const FourZeroFourPage = () => {

    function goToIndex(){

        window.location.href = "/";

    }

    return(

        <>
        
            <main>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

                <h1 style={ titleStyle }>Oops</h1>

                <h3 style={ titleStyle }>It seems like you've reached the 404 page. This means that you tried to access a page that doesn't exist.</h3>

                <div style={ buttonStyle }>

                    <Button onClick={ goToIndex } color="inherit" variant="contained">Go Home</Button>

                </div>

            </main>
        
        </>

    )

}

export default FourZeroFourPage;