
import { useContext } from 'react';

import Uslider from './../../../../../../../../Uslider';
import ctx from './../../../../../../../../../Context';
import { OFFSET_PERC } from './../../../../../../../../../constants';
import ACTIONS from './../../../../../../../../../reducer/actions';

import useStyles from './styles';

const Position = ({ sym }) => {
    const localClasses = useStyles(),
        { state: { width, height }, dispatch } = useContext(ctx),
        w = parseInt(width, 10),
        h = parseInt(height, 10);

    return <div className={localClasses.SectionPosition}>
        {[{
            label: 'Left',
            min: 0,
            max: w,
            offset: w * OFFSET_PERC, 
            value: sym.left,
            key: 'left',
            quickTune: true
        }, {
            label: 'Top',
            min: 0,
            max: h,
            offset: h * OFFSET_PERC,
            value: sym.top,
            key: 'top',
            quickTune: true
        }].map(el => 
            <Uslider
                key={el.key}
                label={el.label}
                value={el.value}
                unit='px'
                min={el.min - el.offset}
                max={el.max + el.offset}
                step={el.step}
                quickTune={el.quickTune}
                onChange={v =>
                    dispatch({
                        type: ACTIONS.UPDATE_SYMBOL,
                        payload: { id: sym.id, field: el.key, value: v }
                    })}
            />
        )}
    </div>;
};

export default Position;