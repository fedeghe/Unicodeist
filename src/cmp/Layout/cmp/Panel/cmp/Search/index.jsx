import { useContext, useCallback } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import ctx from './../../../../../../Context';
import ACTIONS from './../../../../../../reducer/actions';
import useStyles from './styles';


const Search = () => {
    const classes = useStyles();
    const {state: {
        symbols,
        symbolsFilter,
    }, dispatch} = useContext(ctx);

    const clearFilter = useCallback(() => 
        dispatch({
            type: ACTIONS.SET_SYMBOLS_FILTER,
            payload: ''
        })
    , []);
    const updateFilter = useCallback(e => 
        dispatch({
            type: ACTIONS.SET_SYMBOLS_FILTER,
            payload: e.target.value
        })
    , []);
    if (symbols.length === 0) return null;
    return <div className={classes.Container}>
        
        <input placeholder="filter by label" type="text" value={symbolsFilter} onInput={updateFilter}/>
        <ClearIcon color={symbolsFilter ? 'action' : 'disabled'} className={classes.ClearIcon} onClick={clearFilter} />
    </div>;
};

export default Search;