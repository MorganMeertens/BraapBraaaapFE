import {createStyles, makeStyles} from '@material-ui/core';


const makePageStyles = makeStyles(createStyles({
    card: {
        maxWidth: '400px',
        minHeight: '200px',
        width: '100%'
    },
    wrapper: {
        width: '100%',
        minHeight: '200px'
    },
    divider: {
        width: '90%',
        marginLeft: '5%'
    },
    header: {
        display: 'flex'
    },
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
      },
}));


export default makePageStyles;