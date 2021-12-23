import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { CheckBoxRounded } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';


function BasicCard(props) {

  const redirect = () => {
    window.open(props.web_pages, '_blank');
  };

  return (
    <div style={{ margin: "10px",zIndex:"5px"}} > 
      <Card style={{ width: "100%" , height:"323px" , backgroundColor:"#f1f1f1"}} sx={{ boxShadow: 3 }}>
        <CardContent style={{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div style={{height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }} >
          <h2>{props.name}</h2>
          </div>
          <Divider  style={{width:'100%'}}>
      </Divider>
          <h3 style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <LocationOnIcon/>
         {props.country}
          </h3>
 
          <h5 > {props.province}</h5>
          
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{width:"80%"}}
            variant="contained"
            color="primary"
            onClick={() => redirect()}
          >
            University Link
          </Button>
        </CardActions>
      </Card>
    </div> 


  );
}

export default BasicCard;
