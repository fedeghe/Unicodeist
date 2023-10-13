(function (){
    var script = document.currentScript,
        createElement = function (sty, cnt) {
            var node = document.createElement('div'),
                styles = [],
                map = {
                    w:function (v){return 'width:' + v + 'px';},
                    h:function (v){return 'height:' + v + 'px';},
                    bgc:function (v){return 'background-color:' + v;},
                    zi:function (v){return 'z-index:' + v;},
                    c:function (v){return 'color:' + v;},
                    ff:function (v){return 'font-family:"' + v + '"';},
                    fw:function (v){return 'font-weight:' + v;},
                    o:function (v){return 'opacity:' + v;},
                    s: function (v) {return v !== 1 ? 'scale('+v+')' : '';},
                    sx: function (v) {return v !== 1 ? 'scaleX('+v+')' : '';},
                    sy: function (v) {return v !== 1 ? 'scaleY('+v+')' : '';},
                    rx: function (v) {return v ? 'rotateX('+v+'deg)' : '';},
                    ry: function (v) {return v ? 'rotateY('+v+'deg)' : '';},
                    rz: function (v) {return v ? 'rotateZ('+v+'deg)' : '';}
                };
            //position && transfrom-origin
            if (cnt) { //symbol case
                styles.push('position:absolute;transform-origin:center center');
            } else { //root case
                styles.push('position:relative;overflow:hidden');
            }
            for(var k in sty) {
                var mapped = map[k];
                if (k === 't') {
                    var trans = [
                        'transform:translate('+sty.t.trn[0]+'px,'+sty.t.trn[1]+'px)'
                    ];
                    trans.push(map.s(sty.t.s || 1));
                    trans.push(map.sx(sty.t.sx || 1));
                    trans.push(map.sy(sty.t.sy || 1));
                    'rx' in sty.t && trans.push(map.rx(sty.t.rx));
                    'ry' in sty.t && trans.push(map.ry(sty.t.ry));
                    'rz' in sty.t && trans.push(map.rz(sty.t.rz));
                    styles.push(
                        trans.join(' ') + ';'
                    );
                } else {
                    mapped && styles.push(
                        mapped(sty[k])
                    );
                }
            }
            

            styles.length && node.setAttribute('style', styles.join(';'));
            cnt && (node.innerHTML = cnt);
            return node;
        },
        rawData = script.dataset.unicodeist,
        data = JSON.parse(rawData),
        root = createElement(data.sty);
        console.log(data.sty);
    data.sym.forEach(function (symbol){
        root.appendChild(
            createElement(symbol.sty, symbol.cnt)
        );
    });
    script.parentNode.insertBefore(root, script.nextSibling);
    script.parentNode.removeChild(script);
})();