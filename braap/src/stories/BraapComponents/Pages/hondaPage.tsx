import React, { useEffect } from "react";
import { makeStyles, createStyles, CircularProgress, Avatar, Typography } from '@material-ui/core';

import  BraapHeader from "../Header/BraapHeader";
import { gql, useQuery } from "@apollo/client";
import { AllMotorbikesByCompany, AllMotorbikesByCompany_allMotorbikesByCompany_nodes } from "../../../api/__generated__/AllMotorbikesByCompany";
import { MOTORBIKES, MOTORBIKESBYCOMPANY } from "../../../api/queries";
import MotoCard from "../Cards/MotoCard";
import CardList from "../CardList/CardList";
import { AllMotorbikes, AllMotorbikes_allMotorbikes_nodes } from "../../../api/__generated__/AllMotorbikes";


const HondaPageStyles = makeStyles(
  createStyles({
    header: {
        position: 'sticky'
    },
    page: {
        
    }
}));



  

  const HondaPage = (): JSX.Element => {
    const [cards, setCards] = React.useState<JSX.Element[]>([]);
    
    const {loading, error, data} = useQuery<AllMotorbikesByCompany>(MOTORBIKESBYCOMPANY,{variables: {company: "Honda"}});
    const styles = HondaPageStyles();
    

    
      useEffect(() => {
          if(!loading && !error) {
              setCards(data!.allMotorbikesByCompany!.nodes!.map((motorbike : AllMotorbikesByCompany_allMotorbikesByCompany_nodes) => {
                  return <MotoCard 
                          bikeImage={motorbike.imageURL} 
                          bikeYear= {motorbike.year}
                          bikeMake={motorbike.make}
                          bikeModel={motorbike.model}
                          bikeSpecs={
                              <div>
                              <Typography variant="body2" gutterBottom>
                                  Category : {motorbike.category},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Engine Type : {motorbike.engineType},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Power : {motorbike.power},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Torque : {motorbike.torque},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Displacement : {motorbike.displacement},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Compression : {motorbike.compression},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Bore X Stroke : {motorbike.boreXStroke},
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  Fuel Consumption : {motorbike.fuelConsumption}
                              </Typography>
                              </div>}
                          />
              }))
          }
      }, [data]);
  
      return <div className={styles.page}>
          <div className={styles.header}>
          </div>
          {cards.length === 0 ? <CircularProgress /> : <CardList cards={cards} cols={window.innerWidth / 650} />}
      </div>
    
  };
  
  export default HondaPage;

  /*
export const hondaPage = () => {
  return (
  <div>
    <BraapHeader/>
    <Typography variant="h3">This page contains the honda bikes</Typography>;




  </div>
  )
  };*/