import { useMediaQuery, useTheme } from "@mui/material"
import Bottombar from "./Bottonbar/Bottombar";
import DesktopApp from "./Desktop/DesktopApp";


const Appbar = () => {

 const theme = useTheme();
 const match = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
     {match ? <Bottombar /> : <DesktopApp />}
    </>
  )
}

export default Appbar