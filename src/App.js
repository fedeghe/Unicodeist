import { useReducer, useEffect, useCallback } from 'react';
import { ThemeProvider} from 'react-jss';

import Layout from './cmp/Layout';
import Context from './Context';
import reducerFactory from './reducer';
import ACTIONS from './reducer/actions';
import getTheme from './themes';
import {debounce} from './utils';

const {reducer, init} = reducerFactory();
const App = () => {
    const [state, dispatch] = useReducer(reducer, {}, init);
    const {themeKey} = state;
    const browser = (() => {
        if (window.safari !== undefined) return 'safari';
        return null;
    })();
    const theme = getTheme(themeKey);
    const debounced = debounce(
        () => dispatch({
            type: ACTIONS.INIT_VIEWPORT,
            payload: {
                maxHeight: ~~window.innerHeight * 0.9,
                maxWidth: ~~window.innerWidth * 0.9,
            }
        }), 500
    );
    const storeViewPortData = useCallback(debounced, []);
    const prevent = useCallback(e => e.preventDefault(), []);
    // const catchReload = useCallback(e => {
    //     e.preventDefault();
    //     e.returnValue = '';
    // }, []);
    useEffect(storeViewPortData, [storeViewPortData]);
    useEffect(() => {
        // window.addEventListener("beforeunload", catchReload);
        window.addEventListener("resize", storeViewPortData);
        window.addEventListener("scroll", prevent);
        
        // history.pushState(null, null, location.href);
        // window.onpopstate = function () {
        //     history.go(1);
        // };
        
        return () => {
            window.removeEventListener("resize", storeViewPortData);
            window.removeEventListener("scroll", prevent);
            // window.removeEventListener("beforeunload", catchReload);
        };
    }, [storeViewPortData]);
    
    return (        
        <ThemeProvider theme={theme}>
            <Context.Provider value={{state, dispatch, browser}}>
                <Layout/>
            </Context.Provider>
        </ThemeProvider>
    );
};

export default App;
