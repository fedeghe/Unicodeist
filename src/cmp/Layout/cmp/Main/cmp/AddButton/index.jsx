/* eslint-disable no-unused-vars */
import { useContext } from 'react';

import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import ctx from './../../../../../../Context';
import ACTIONS from './../../../../../../reducer/actions';
import useStyles from './styles';
const AddButton = () => {
    const classes = useStyles();
    const { dispatch } = useContext(ctx);

    const openPanel = () => {
        dispatch({
            type: ACTIONS.TOGGLE_ADD_PANEL,
            payload: true
        });
    };
    // return <div className={classes.AddButton}>
    //     <AddCircleRoundedIcon sx={{fontSize:'3em'}} onClick={openPanel}/>
    // </div>;
    return <IconButton  className={classes.AddButton} aria-label="add" size="large"  onClick={openPanel}>
        <AddCircleRoundedIcon sx={{ fontSize: '2.5em' }}/>
    </IconButton>;
};
export default AddButton;