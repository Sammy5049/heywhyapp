import { useMediaQuery, useTheme } from "@mui/material"
import DesktopApp from "./Desktop/DesktopApp";
import MobileApp from "./Mobile/MobileApp";


const Appbar = () => {

 const theme = useTheme();
 const match = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
     {match ? <MobileApp /> : <DesktopApp />}
    </>
  )
}

export default Appbar