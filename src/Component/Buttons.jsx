import { Button} from "@mui/material";

const Buttons = ( {act} ) => {
  return (
    <div>
     <Button  sx={{padding:"7px 20px", borderRadius:'10px', background:"blue"  }} variant="contained">{ act }</Button>

    </div>
  )
}

export default Buttons