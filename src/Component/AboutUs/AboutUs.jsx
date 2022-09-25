import {
  Container,
  Grid,
  modalClasses,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import ceo from "../Images/ceooo.jpeg";
import { ImQuotesLeft } from "react-icons/im";
import "./About.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Dummy from "../Dummy/Dummy";
import { useState } from "react";

const AboutUs = () => {
  const theme = useTheme();

  const [model, setModel] = useState(false);

  const handleOpen = () => {
    setModel(!model)
  };

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div sx={{ background: "white" }} className="container convic" id="aboutus">
      <Bounce top>
        <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            fontFamily: "Montserrat",
            color: "#01411c",
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          ABOUT US
        </Typography>
      </Bounce>
      <Fade>
        <Typography
          sx={{
            backgroundColor: "#01411c",
            width: "110px",
            borderRadius: "10px",
            height: "8px",
            display: "block",
            margin: "-30px auto 50px auto",
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          <span></span>
        </Typography>
      </Fade>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          [theme.breakpoints.down("md")]: { flexDirection: "column" },
        }}
        container
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column", p: "20px" }}
          md={6}
          sm={10}
          item
        >
          <Paper
            sx={{
              maxWidth: "400px",
              paddingBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "5px",
            }}
            elevation={10}
          >
            <Bounce bottom>
              <div className="imma">
                <img
                  height={"400px"}
                  width={"100%"}
                  src={ceo}
                  alt="ceo of heywhy"
                />
              </div>
            </Bounce>
            <Zoom>
              <Typography
                variant={"h4"}
                color={"#01411c"}
                sx={{ fontWeight: "600" }}
                component={"h2"}
              >
                Ayomikun Othniel
              </Typography>
            </Zoom>
            <Fade left>
              <Typography
                variant={"h6"}
                fontWeight={500}
                sx={{ fontStyle: "italic" }}
                component={"heading"}
              >
                Lead Graphic Designer
              </Typography>
            </Fade>
          </Paper>
        </Grid>

        <Grid className="about-cont" sm={10} md={6} item>
          <Slide right>
            <Typography
              className="bout"
              sx={{
                fontSize: "1.5rem",
                [theme.breakpoints.down("md")]: { fontSize: "1rem", p: "10px" },
              }}
              variant={"p"}
              component={"subtitle"}
            >
              With Over five (5) years of experience, Ayomikun has helped
              businesses grow by means of stock designs, motion graphics,
              illustrative and creative designs.
            </Typography>
          </Slide>

               
                  
                 

               


        </Grid>
      </Grid>

      <Dummy />


      <div className="first">

        {model && (<button onClick={handleOpen}>Open</button>)}
                    
                  </div>

                    {model && (
                       <div className="newskill">
                      <div onClick={() => setModel(false)} className="overlay"></div>

                  <div className="toggle-pop">

                    <h5>Opened Pop</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus!</p>
                  
                      <button className="close-btn" onClick={handleOpen}>Close</button>
                  
                  </div>
                  
                   </div> )}

      <ScrollToTop
        height="20"
        smooth={true}
        width="20"
        style={{
          borderRadius: "90px",
          zIndex: "9999",
          marginBottom: "40px",
          backgroundColor: "#01411c",
        }}
        color="white"
        component={<p style={{ color: "white", marginTop: "10px" }}>Up</p>}
      />
    </div>
  );
};

export default AboutUs;
