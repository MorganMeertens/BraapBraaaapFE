import React from 'react';
import Paper from '@material-ui/core/Paper';
import './page.css';
import background from "../assets/MogalibearAssets/backgroundImage.png";
import  {HomeHeader} from "../Header/HomeHeader";


interface PageProps {
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

export const HomePage = ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => (

  <div>
    <HomeHeader />
    <Paper  style={styles.heroContainer} >
    </Paper>
  </div>
  
    
);



