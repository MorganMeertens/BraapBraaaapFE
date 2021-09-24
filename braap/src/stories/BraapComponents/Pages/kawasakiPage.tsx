import React from "react";
import { Typography } from "@material-ui/core";
import BraapHeader from "../Header/BraapHeader";
import MotoCard from "../Cards/MotoCard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import makePageStyles from "./PageStyles";
import Paper from '@material-ui/core/Paper';
import background from "../assets/MogalibearAssets/BraapBraaaap-black-large.png";


const styles = {
  root: {
    backgroundColor: "black",
    flexGrow: 1,
    height: '100vh',
  },
  heroContainer: {
    backgroundImage: "url(" + background + ")",
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '90vh',
    padding: '0px',
    margin: '0px',
    flexGrow: 1,

  },
};


export const kawasakiPage = () => {
  const classes = makePageStyles();
  return (
    <div>
      <Paper style={styles.root} >

        <div className="wrapper">

          <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <MotoCard
                bikeImage="http://api-motorcycle.makingdatameaningful.com/files/Kawasaki/2021/Kawasaki%20Ninja%20ZX-10R/Kawasaki_2021_Kawasaki%20Ninja%20ZX-10R.jpg"
                bikeYear="2021"
                bikeMake="Kawasaki"
                bikeModel="Ninja ZX-10R"
                bikeSpecs={
                  <div>
                    <Typography variant="body2" gutterBottom>
                      Category : Sport,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Engine Type : In-line four, four-stroke,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Power : 203.0 HP (148.2  kW)) @ 13200 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Torque : 114.9 Nm (11.7 kgf-m or 84.8 ft.lbs) @ 11400 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Displacement : 998.0 ccm (60.90 cubic inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Compression : 13.0:1,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Bore X Stroke : 76.0 x 55.0 mm (3.0 x 2.2 inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Fuel Consumption : 5.90 litres/100 km (16.9 km/l or 39.87 mpg)
                    </Typography>
                  </div>}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MotoCard
                bikeImage="http://api-motorcycle.makingdatameaningful.com/files/Kawasaki/2021/Kawasaki%20Ninja%20400/Kawasaki_2021_Kawasaki%20Ninja%20400.jpg"
                bikeYear="2021"
                bikeMake="Kawasaki"
                bikeModel="Ninja 400"
                bikeSpecs={
                  <div>
                    <Typography variant="body2" gutterBottom>
                      Category : Sport,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Engine Type : Twin, four-stroke,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Power : 49 HP (36.5  kW)) @ 10000 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Torque : 38.0 Nm (3.9 kgf-m or 28 ft.lbs) @ 8000 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Displacement : 399.0 ccm (24.35 cubic inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Compression : 11.5:1,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Bore X Stroke : 70.0 x 51.8 mm (2.8 x 2.0 inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Fuel Consumption : 4.19 litres/100 km (24.29 km/l or 57.12 mpg)
                    </Typography>
                  </div>}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MotoCard
                bikeImage="http://api-motorcycle.makingdatameaningful.com/files/Kawasaki/2021/Kawasaki%20Ninja%20650/Kawasaki_2021_Kawasaki%20Ninja%20650.jpg"
                bikeYear="2021"
                bikeMake="Kawasaki"
                bikeModel="Ninja 650"
                bikeSpecs={
                  <div>
                    <Typography variant="body2" gutterBottom>
                      Category : Sport,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Engine Type : Twin, four-stroke,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Power : 52.3 HP (38.2  kW)) @ 8000 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Torque : 56.0 Nm (5.7 kgf-m or 41.3 ft.lbs) @ 4000 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Displacement : 649.0 ccm (39.60 cubic inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Compression : 10.8:1,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Bore X Stroke : 83.0 x 60.0 mm (3.3 x 2.4 inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Fuel Consumption : 4.35 litres/100 km (23 km/l or 54 mpg)
                    </Typography>
                  </div>}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MotoCard
                bikeImage="http://api-motorcycle.makingdatameaningful.com/files/Kawasaki/2021/Kawasaki%20Ninja%20ZX-6R/Kawasaki_2021_Kawasaki%20Ninja%20ZX-6R.jpg"
                bikeYear="2021"
                bikeMake="Kawasaki"
                bikeModel="Ninja ZX-6R"
                bikeSpecs={
                  <div>
                    <Typography variant="body2" gutterBottom>
                      Category : Sport,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Engine Type : In-line four, four-stroke,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Power : 126.2 HP (92.1  kW)) @ 13500 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Torque : 70.8 Nm (7.2 kgf-m or 52.2 ft.lbs) @ 11000 RPM,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Displacement : 636.0 ccm (38.81 cubic inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Compression : 12.9:1,
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Bore X Stroke : 67.0 x 45.1 mm (2.6 x 1.8 inches),
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Fuel Consumption : 5.95 litres/100km (16.8 km/l or 39.5 mpg)
                    </Typography>
                  </div>}
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  )
};