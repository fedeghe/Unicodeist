(function () {
    var script = document.currentScript,

        // must be in synch with src/constants.js
        // FONT_FAMILIES_REDUCTION_MAP
        FFRM = {
            ar: 'Arial',
            v: 'Verdana',
            ta: 'Tahoma',
            tr: 'Trebuchet MS',
            tn: 'Times New Roman',
            ge: 'Georgia',
            ga: 'Garamond',
            c: 'Courier New',
            b: 'Brush Script MT'
        },
        lbs = {
            r:'rotate',
            s:'scale',
            f:'font',
            c:'color',
            d:'deg',
            po:'position',
            cn:'center',
            p:'px',
            t:'transform',
            fl:'filter',
            b:'blur',
            sk:'skew'
        },
        map = {
            w: function (v) { return 'width:' + v + lbs.p; },
            h: function (v) { return 'height:' + v + lbs.p; },
            bgc: function (v) { return 'background-' + lbs.c + ':' + v; },
            zi: function (v) { return 'z-index:' + v; },
            c: function (v) { return lbs.c + ':' + v; },
            ff: function (v) { return lbs.f + '-family:' + FFRM[v]; },
            fw: function (v) { return lbs.f + '-weight:' + v; },
            o: function (v) { return 'opacity:' + v; },
            s: function (v) { return v !== 1 ? lbs.s + '(' + v + ')' : ''; },
            sx: function (v) { return v !== 1 ? lbs.s + 'X(' + v + ')' : ''; },
            sy: function (v) { return v !== 1 ? lbs.s + 'Y(' + v + ')' : ''; },
            rx: function (v) { return v ? lbs.r + 'X(' + v + lbs.d + ')' : ''; },
            ry: function (v) { return v ? lbs.r + 'Y(' + v + lbs.d + ')' : ''; },
            rz: function (v) { return v ? lbs.r + 'Z(' + v + lbs.d + ')' : ''; },
            sk: function (x,y) { return (x||y) ? lbs.sk + '(' + x + lbs.d + ',' + y + lbs.d + ')' : ''; },
            bl: function (v) { return v ? lbs.b + '(' + v + lbs.p + ')' : ''; },
        },
        createElement = function (sty, cnt) {
            var node = document.createElement('div'),
                styles = [cnt
                    ? lbs.po + ':absolute;' + lbs.t + '-origin:' + lbs.cn + ' ' + lbs.cn
                    : lbs.po + ':relative;overflow:hidden'
                ],
                k;

            for (k in sty) {
                switch (k) {
                    case 't':
                        var trans = [
                            lbs[k] + ':translate(' + sty[k].trn[0] + lbs.p + ',' + sty[k].trn[1] + lbs.p + ')'
                        ];
                        's' in sty[k] && trans.push(map.s(sty[k].s));
                        'sx' in sty[k] && trans.push(map.sx(sty[k].sx));
                        'sy' in sty[k] && trans.push(map.sy(sty[k].sy));
                        'sy' in sty[k] && trans.push(map.rx(sty[k].rx));
                        'rx' in sty[k] && trans.push(map.rx(sty[k].rx));
                        'ry' in sty[k] && trans.push(map.ry(sty[k].ry));
                        'rz' in sty[k] && trans.push(map.rz(sty[k].rz));
                        'sk' in sty[k] && trans.push(map.sk(sty[k].sk[0],sty[k].sk[1]));
                        styles.push(
                            trans.join(' ') + ';'
                        );
                        break;
                    case 'f':
                        var filter = [lbs.fl + ':'];
                        'bl' in sty[k] && filter.push(map.bl(sty[k].bl));
                        styles.push(
                            filter.join(' ') + ';'
                        );
                        break;
                    default:        
                        k in map && styles.push(
                            map[k](sty[k])
                        );
                        break;
                }
            }
            styles.length && node.setAttribute('style', styles.join(';'));
            cnt && (node.innerHTML = cnt);
            return node;
        },
        rawData = script.dataset.unicodeist,
        data = JSON.parse(rawData),
        root = createElement(data.sty);

    data.sym.forEach(function (symbol) {
        root.appendChild(
            createElement(symbol.sty, symbol.cnt)
        );
    });
    script.parentNode.insertBefore(root, script.nextSibling);
    script.parentNode.removeChild(script);
})();