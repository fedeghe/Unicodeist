import { colors } from './base';

const {grayscale : cgs} = colors

const theme =  {
    mode: 'dark',
    background: {
        main: cgs.dark1,
        panel: cgs.dark2,
        selectorModal: cgs.dark2
    },
    modal : {
        setStringColor: cgs.lightE,
        itemBackground: cgs.dark0,
        itemBackgroundHover: cgs.dark4,
        outline: cgs.lightA,
        hoverOutline: cgs.lightE,
        itemForeground: cgs.lightE,
    },
    foreground: cgs.lightE,
    radius: {
        selectorModal: '5px' ,
        selectorModalItem: '3px' ,
    },
    sym: {
        background: cgs.dark3,
        backgroundSelected: cgs.dark0,
        foreground: cgs.lightF,
    },
    themeSwitch: {
        lineBg: cgs.dark0,
        roundBg: cgs.dark4,
        icon: '#ffdd00',
    },
    unselectedItemHoverBackgound: cgs.mid5
}

export default theme