import React from 'react';
import Paper from '@material-ui/core/Paper';
import './page.css';
import background from "../assets/MogalibearAssets/backgroundImage.png";
import  {HomeHeader} from "../Header/HomeHeader";
import { useQuery } from '@apollo/client';
import { Self } from '../../../api/__generated__/Self';
import { SELF } from '../../../api/queries';


export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const styles = {
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



 const HomePage = (): JSX.Element => {

const { loading, error, data } = useQuery<Self>(SELF);
  return(<div>
    <HomeHeader user={data?.self} />
    <Paper  style={styles.heroContainer} >
    </Paper>
  </div>
  
  ) 
};



  
export default HomePage;
