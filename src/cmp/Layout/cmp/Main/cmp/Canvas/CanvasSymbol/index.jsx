import { useContext, useState, useEffect } from 'react';
import useStyles from './styles';

import ctx from 'src/Context';
import {css2jss, mergeAdditionalStyles} from 'src/utils';
import ACTIONS from 'src/reducer/actions';

const CanvasSymbol = ({symbol}) => {
    const {
            state: {
                focusedSymbolId,
                keyFrames
            },
            dispatch
        } = useContext(ctx),
        [dragging, setDragging] = useState(false),
        [pos, setPos] = useState([symbol.left, symbol.top]),
        isTarget = focusedSymbolId===symbol.id,
        {
            char, zIndex, left, top, color,
            faded,opacity, fontFamily, fontWeight,
            rotationX, rotationY, rotationZ,
            skewX, skewY,
            scale, scaleX, scaleY,
            blur,
            additionalStyles
        } = symbol,
        classes = useStyles({
            isTarget,
            faded,
            ownOpacity: opacity
        }),
        [startPoint, setStartPoint] = useState([left, top]),
        onDragStart = e => {
            setDragging(true);
            e.dataTransfer.effectAllowed = "move";
            setStartPoint([e.pageX, e.pageY]);
        },
        onDrag = e => {
            setPos([e.pageX, e.pageY]);
            e.preventDefault();
        },
        onDragEnd = e => {
            setDragging(false);
            e.preventDefault();
            const [startX, startY] = startPoint;
            dispatch({
                type: ACTIONS.TUNE_SYMBOL_POSITION,
                payload: {
                    left: parseInt(pos[0], 10) - parseInt(startX, 10),
                    top: parseInt(pos[1], 10) - parseInt(startY, 10)
                }
            });
        },
        baseAnim = symbol.animation in keyFrames
            ? css2jss(keyFrames[symbol.animation])
            : {},
        [animAnim, setAnimAnim] = useState(baseAnim.animation);

    useEffect(() => {
        const { ani }  = symbol.animation in keyFrames
            ? css2jss(keyFrames[symbol.animation])
            : {};
        setAnimAnim(ani);
    }, [keyFrames[symbol.animation], symbol.animation]);
    
    return <div
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrag={onDrag}
            draggable={isTarget}
            style={{
                position:'relative',
                ...(dragging && {zIndex:1})
            }}
        >
        <div
            className={classes.CanvasSymbol}
            style={{
                ...mergeAdditionalStyles({additionalStyles, blur}),
                position:'absolute',
                transformOrigin: 'center',
                transform:[
                    `translate(${left}px,${top}px)`,
                    `scale(${scale})`, 
                    `scaleX(${scaleX})`, 
                    `scaleY(${scaleY})`, 
                    `${rotationX ? `rotateX(${rotationX}deg)` : '' }`,  
                    `${rotationY ? `rotateY(${rotationY}deg)` : '' }`, 
                    `${rotationZ ? `rotateZ(${rotationZ}deg)` : '' }`, 
                    `${(skewX || skewY) ? `skew(${skewX}deg,${skewY}deg)` : '' }`
                ].join(' '),
                color,
                fontWeight,
                fontFamily,
                zIndex,
                ...(!faded && opacity < 1 && {opacity}),
                ...animAnim,
                fontSize:'20px'
            }}
        >{char}</div>
    </div>;
};
export default CanvasSymbol;