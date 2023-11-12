import { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import ctx from 'src/Context';
import ACTIONS from 'src/reducer/actions';
import useStyles from './styles';

const Search = () => {
    const classes = useStyles(),
        {
            state: {
                symbols,
                symbolsFilter,
            },
            dispatch
        } = useContext(ctx),
        clearFilter = () => dispatch({
            type: ACTIONS.SET_SYMBOLS_FILTER, payload: ''
        }),
        updateFilter = e => dispatch({
            type: ACTIONS.SET_SYMBOLS_FILTER, payload: e.target.value
        });
    return Boolean(symbols.length) && <div className={classes.Container}>
        <input placeholder="filter by label" type="text" value={symbolsFilter} onInput={updateFilter}/>
        <ClearIcon color={symbolsFilter ? 'action' : 'disabled'} className={classes.ClearIcon} onClick={clearFilter} />
    </div>;
};

export default Search;