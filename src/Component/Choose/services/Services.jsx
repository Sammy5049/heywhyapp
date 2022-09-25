import { Paper, Typography } from "@mui/material";
import "./Services.css";
import log1 from "../../Images/log1.jpg";
import ui1 from "../../Images/ui.webp";
import vedit from "../../Images/vedit.jpg";
import bk from "../../Images/bk.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Services = () => {
  return (
    <div
      style={{ marginTop: "10px", marginBottom: "10px"  }}
      className="container-fluid service"
    >
      <div>
        <div className="techstack-title">
          <Bounce top>
            <h4 style={{ textAlign: "center", color: "white" }}>Our Sevices</h4>
          </Bounce>
        </div>
        <Fade>
          <Typography
            sx={{
              backgroundColor: "white",
              width: "70px",
              borderRadius: "10px",
              height: "2px",
              display: "block",
              margin: "-5px auto 30px auto",
            }}
            display={"flex"}
            justifyContent={"center"}
            variant="h3"
            component={"h1"}
          >
            <span></span>
          </Typography>
        </Fade>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="title-why-cover">
              <Zoom bottom>
                <Paper className="title-why-papper" elevation={5}>
                  <img src={log1} alt="log" />
                  <h5>Branding</h5>
                </Paper>
              </Zoom>
              <Fade>
                <p>
                  We brand your business from logo making to business card
                  design and social media publicity
                </p>
              </Fade>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="title-why-cover">
              <Zoom bottom>
                <Paper className="title-why-papper" elevation={5}>
                  <img src={bk} alt="log" />
                  <h5>Book Cover</h5>
                </Paper>
              </Zoom>
              <Fade>
                <p>We design your book cover for you to your satisfaction</p>
              </Fade>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="title-why-cover">
              <Zoom bottom>
                <Paper className="title-why-papper" elevation={5}>
                  <img src={ui1} alt="log" />
                  <h5>UI/UX Design</h5>
                </Paper>
              </Zoom>
              <Fade>
                <p>We design your book cover for you to your satisfaction</p>
              </Fade>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="title-why-cover">
              <Zoom bottom>
                <Paper className="title-why-papper" elevation={5}>
                  <img src={vedit} alt="log" />
                  <h5>Video Animation</h5>
                </Paper>
              </Zoom>
              <Fade>
                <p>We design your book cover for you to your satisfaction</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
