import {
    MIN_SCALE_REV,
    MIN_SCALE, MAX_SCALE, STEP_SCALE,
    MIN_ROT, MAX_ROT, STEP_ROT,
    MIN_BLUR, MAX_BLUR, STEP_BLUR,
} from 'src/constants';

const pf = v => parseFloat(parseFloat(v, 10).toFixed(2), 10);

export const config = [{
    label: 'Scale',
    field: 'scale',
    min: MIN_SCALE,
    max: MAX_SCALE,
    step: STEP_SCALE,
    rounder: pf,
    quickTune: true,
},{
    label: 'Scale x',
    field: 'scaleX',
    min: MIN_SCALE_REV,
    max: MAX_SCALE,
    step: STEP_SCALE,
    rounder: pf,
    quickTune: true,
},{
    label: 'Scale y',
    field: 'scaleY',
    min: MIN_SCALE_REV,
    max: MAX_SCALE,
    step: STEP_SCALE,
    rounder: pf,
    quickTune: true,
},{
    label: 'Rot. x',
    field: 'rotationX',
    min: MIN_ROT,
    max: MAX_ROT,
    step: STEP_ROT,
    rounder: pf,
    unit: '°',
    quickTune: true,
},{
    label: 'Rot. y',
    field: 'rotationY',
    min: MIN_ROT,
    max: MAX_ROT,
    step: STEP_ROT,
    rounder: pf,
    unit: '°',
    quickTune: true,
},{
    label: 'Rot. z',
    field: 'rotationZ',
    min: MIN_ROT,
    max: MAX_ROT,
    step: STEP_ROT,
    rounder: pf,
    unit: '°',
    quickTune: true,
},{
    label: 'Skew. x',
    field: 'skewX',
    min: MIN_ROT/2,
    max: MAX_ROT/2,
    step: STEP_ROT,
    rounder: pf,
    unit: '°',
    quickTune: true,
},{
    label: 'Skew. y',
    field: 'skewY',
    min: MIN_ROT/2,
    max: MAX_ROT/2,
    step: STEP_ROT,
    rounder: pf,
    unit: '°',
    quickTune: true,
},{
    label: 'Blur',
    field: 'blur',
    min: MIN_BLUR,
    max: MAX_BLUR,
    step: STEP_BLUR,
    rounder: pf,
    unit: '',
    quickTune: true,
}];

export default config;