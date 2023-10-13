/* eslint-disable no-unused-vars */
import Item from '../Item';
import { uniqueID } from '../../../../../../../../../../utils';
import useStyles from './styles';
const Family = ({ data, label, onSelect }) => {
    const classes = useStyles();
    return <div className={classes.Container}>
        <h1>{label}</h1>
        <div className={classes.ItemsContainer}>
            {data.map(d => <>
                <div className={classes.SubfamilyTitle} key={`${uniqueID}`}><h4>{d.title}</h4></div>
                {d.charSet.map(({char}) => {
                    return <Item key={`${uniqueID}`} char={char} onSelect={onSelect} />;
                })}
            </>)}
        </div>
    </div>;
};
export default Family;