const INIT = Symbol('init'),
    ADD_SYMBOL = Symbol('add a symbol'),
    UPDATE_SYMBOL = Symbol('update a symbol'),
    REMOVE_SYMBOL = Symbol('remove a symbol'),
    CLONE_SYMBOL = Symbol('clone a symbol'),
    RESIZE = Symbol('resize'),
    FOCUS_ON_SYMBOL = Symbol('focus on one symbol'),
    TOGGLE_ADD_PANEL = Symbol('toggle add panel'),
    TUNE_SYMBOL_POSITION = Symbol('tune symbol position'),
    UPDATE_GLOBAL = Symbol('update first level field panel'),
    TOGGLE_PANEL = Symbol('toggle panel'),
    MAX_ZI = Symbol('maximize z index'),
    MIN_ZI = Symbol('minimize z-index'),
    SWITCH_THEME = Symbol('switch theme'),
    SET_ASCIIPANEL_FILTER = Symbol('set asciipanel filter'),
    SET_EMBED_MODAL_VISIBILITY = Symbol('set embed modal visibility'),
    INIT_VIEWPORT = Symbol('init sizes'),
    SYMBOL_FOCUS = Symbol('focus symbol toggle'),
    IMPORT = Symbol('import'),
    MOVE_ALL_SYMBOLS = Symbol('global move'),
    PAN_ALL_SYMBOLS = Symbol('global pan'),
    ALIGN_V = Symbol('align vertically'),
    ALIGN_H = Symbol('align horizontally'),
    SET_SYMBOLS_FILTER = Symbol('set symbols filter'),
    MOVE_SYMBOL = Symbol('move up down symbol'),
    MOVE_TARGET_ONE_PX = Symbol('move 1px symbol in direction'),
    LET_ASCIIPANEL_OPEN_AFTER_SELECTION = Symbol('let the panel open after selection');

const exp = {
    INIT,
    ADD_SYMBOL,
    UPDATE_SYMBOL,
    REMOVE_SYMBOL,
    CLONE_SYMBOL,
    RESIZE,
    TOGGLE_ADD_PANEL,
    TOGGLE_PANEL,
    TUNE_SYMBOL_POSITION,
    FOCUS_ON_SYMBOL,
    UPDATE_GLOBAL,
    MAX_ZI,
    MIN_ZI,
    SWITCH_THEME,
    SET_ASCIIPANEL_FILTER,
    LET_ASCIIPANEL_OPEN_AFTER_SELECTION,
    SET_EMBED_MODAL_VISIBILITY,
    SYMBOL_FOCUS,
    INIT_VIEWPORT, 
    IMPORT,
    MOVE_ALL_SYMBOLS,
    PAN_ALL_SYMBOLS,
    ALIGN_V,
    ALIGN_H,
    SET_SYMBOLS_FILTER,
    MOVE_SYMBOL,
    MOVE_TARGET_ONE_PX
};

export default exp;