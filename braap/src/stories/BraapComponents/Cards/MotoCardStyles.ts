import {createStyles, makeStyles} from '@material-ui/core';

const makeMotoCardStyles = makeStyles((theme) => createStyles({
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

export const makeDialogStyles = makeStyles(createStyles({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: '10px'
    },

}));

export default makeMotoCardStyles;