import React from "react";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// import Cards from './Components/Cards'
import SearchIcon from '@mui/icons-material/Search';
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { textAlign } from "@mui/system";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <Grid container>
        <Grid item md={4} xs={1}></Grid>
        <Grid item md={4} xs={10}>
          {/* <h2>
                        Search Your University <br></br>
                        Here
                    </h2>
                    <Button  variant="contained"
                    color="primary">
                    <AccountBalanceIcon />
                    <Typography>UniSearch</Typography>
                    </Button> */}
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://cdn.pixabay.com/photo/2020/11/19/08/03/college-5757815_960_720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Search Your University
              </Typography>
              <Typography variant="h5">
                  Below
              </Typography>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent:"center",
                textAlign:"center"
              }}
            >
            <Link to="/search">
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" ,height:"42px"}}
              >
                <SearchIcon /><br></br>
                <h4>CLICK HERE</h4>
              </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
