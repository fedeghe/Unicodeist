import {
    UNICODEIST_SCRIPT_URI,
    FONT_FAMILIES_REDUCTION_MAP
} from './constants';

export const uniqueID = new function () {
    var count = 0,
        self = this;
    this.prefix = 'U-';
    this.toString = function () {
        count += 1;
        return self.prefix + count;
    };
}();

export const cleanCode = code => code
    .replace(/class="[^"]*"/mg, '')    // remove class
    .replace(/droppable="droppable"/mg, '')    // remove droppable
    .replace(/\s{2,}/gm, ' ')           // remove double spaces
    .replace(/:\s/gm, ":")             // remove spaces after :
    .replace(/;\s/gm, ";")             // remove spaces after ;
    .replace(/,\s/gm, ",")              // remove spaces after ,
    .replace(/draggable=[true|false]/gm, "");              // remove draggable attrs

export const cleanCodeFromState = state => {
    var root = document.createElement('div');
    root.setAttribute('style',
        [
            `width:${state.width}px`,
            `height:${state.height}px`,
            `background-color:${state.backgroundColor}`,
            `position:relative;overflow:hidden`,
        ].join(';')
    );
    state.symbols.map(sym => {
        var child = document.createElement('div');
        child.innerHTML = sym.char;
        child.setAttribute('style',
            [
                `z-index:${sym.zIndex}`,
                `font-family:${sym.fontFamily}`,
                `font-weight:${sym.fontWeight}`,
                `color:${sym.color}`,
                `opacity:${sym.opacity}`,
                `position:absolute;transform-origin:center center`,
                sym.blur && `filter:blur(${sym.blur}px)`,
                `transform:` + [
                    `translate(${sym.left}px,${sym.top}px)`,
                    sym.scale !== 1 && `scale(${sym.scale})`,
                    sym.scaleX !== 1 && `scaleX(${sym.scaleX})`,
                    sym.scaleY !== 1 && `scaleY(${sym.scaleY})`,
                    sym.rotationX && `rotateX(${sym.rotationX}deg)`,
                    sym.rotationY && `rotateY(${sym.rotationY}deg)`,
                    sym.rotationZ && `rotateZ(${sym.rotationZ}deg)`,
                    (sym.skewX || sym.skewY)&& `skew(${sym.skewX}deg,${sym.skewY}deg)`,
                ].filter(Boolean).join(' ')
            ].filter(Boolean).join(';')
        );
        return child;
    }).forEach(c => root.appendChild(c));
    return root.outerHTML;
};

export const count = symbols => symbols.reduce(
    (acc, { data }) => acc + data.reduce(
        (acc0, { charSet }) => acc0 + charSet.length
        , 0)
    , 0);

export const debounce = (func, delay) => {
    var to,
        ret = (...args) => {
            clearTimeout(to);
            to = setTimeout(() => func(...args), delay);
        };
    ret.cancel = function () {
        clearTimeout(to);
    };
    return ret;
};

export const filter = ({ symbols, filter, debug = false }) => { 
    let start,
        end;
    if (debug) start = +new Date();
    const res = filter
        ? symbols.map(({ label, data }) => {
            const newData = data.map(({ title, charSet }) => {
                const filteredCharset = charSet.filter(
                    // eslint-disable-next-line no-unused-vars
                    ({ c: char, d: description = '', de, u, oc,he }) => {
                        // const der = getCodes(char);
                        return false
                            || description.toLowerCase().split(',').some(s => s.includes(filter))
                            || `${char}`.toLowerCase() === filter.toLowerCase()
                            || `${title}`.toLowerCase().includes(filter)
                            // || `${label}`.toLowerCase().includes(lcFilter)
                            || `${de}`.startsWith(filter)
                            || `${oc}`.startsWith(filter)
                            || `${he}`.startsWith(filter)
                            // || `${u}`.startsWith(filter)
                            ;
                    }
                );
                return filteredCharset.length && {
                    title,
                    charSet: filteredCharset
                };
            }).filter(Boolean);
            return newData.length && {
                label,
                data: newData
            };
        }).filter(Boolean)
        : symbols;
    if (debug)  {
        end = +new Date();
        console.log('filtering took: ', end - start);
    }
    return res;
};

/**
 * TODO: here I should allow the use to see the location & name dialog
 * but still do not know how
 */
export const saveAsFileJSON = data => {
    return new Promise(resolve => {
        const blob = new Blob([JSON.stringify(data)]);
        resolve(window.URL.createObjectURL(blob));
    });
};
export const importFromFile = ({ onContentReady }) => {
    const link = document.createElement("input");
    link.type = 'file';
    link.addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.onload = function () {
            onContentReady(reader.result);
        };
        if (e.target.files.length) {
            reader.readAsText(e.target.files[0]);
        }
        document.body.focus();
        e.preventDefault();
    });
    link.click();
};

const getUnicodeistData = j => JSON.stringify({
    sty: {
        w: j.width, //px
        h: j.height, //px
        bgc: j.backgroundColor,
        // position:'relative'
    },
    sym: j.symbols.map(s => ({
        cnt: s.char,
        sty: {
            // position:'absolute',
            zi: s.zIndex,
            c: s.color,
            // fs: s.fontSize, //px
            ff: Object.keys(FONT_FAMILIES_REDUCTION_MAP).find(
                k => FONT_FAMILIES_REDUCTION_MAP[k] === s.fontFamily
            ),
            fw: s.fontWeight,
            o: s.opacity,
            // 'transform-origin': 'center center', 
            t: {
                trn: [s.left, s.top],
                ...(s.scale !== 1 && { s: s.scale }),
                ...(s.scaleX !== 1 && { sx: s.scaleX }),
                ...(s.scaleY !== 1 && { sy: s.scaleY }),
                ...(s.rotationX && { rx: s.rotationX }), // deg
                ...(s.rotationY && { ry: s.rotationY }), // deg
                ...(s.rotationZ && { rz: s.rotationZ }),  // deg
                ...((s.skewX || s.skewY) && { sk: [s.skewX,s.skewY] })  // deg
            },
            f:{
                ...(s.blur && { bl: s.blur }),
            }
        }
    }))
});

export const getUnicodeistScriptTag = state => {
    const dataUnicodeist = getUnicodeistData(state);
    return `<script src="${UNICODEIST_SCRIPT_URI}" data-unicodeist='${dataUnicodeist}'></script>`;
};


export const getCodes = char => {
    var decimal = char.charCodeAt(0).toString(10),
        unicode = 'U+' + char.charCodeAt(0).toString(16).padStart(4, '0'),
        css = '\\' + char.charCodeAt(0).toString(16).padStart(4, '0'),
        octal = '0' + char.charCodeAt(0).toString(8),
        hex = '0x' + char.charCodeAt(0).toString(16),
        html = '&#' + decimal + ';';
    return {
        decimal, unicode, octal, hex, css, html
    };
};

const def = {
    uniqueID,
    cleanCode,
    cleanCodeFromState,
    debounce,
    importFromFile,
    getUnicodeistData,
    getUnicodeistScriptTag,
    saveAsFileJSON,
    getCodes,
    count,
    filter
};
export default def;