import { createUseStyles } from 'react-jss';

export default createUseStyles({
    Canvas: {
        position: 'relative',
        userSelect: 'none'
    },
    Dialog: {
        padding: '2em',
        backgroundColor: '#eeeeee'
    },
    TopMargined: {
        marginTop: '4em'
    },
    Code: {
        marginBottom: '0.5em',
        marginTop: '2em',
        backgroundColor: '#ffffff',
        overflow: 'auto',
        padding: '1em',
        borderRadius: '3px',
        maxHeight:'300px',
    }
});