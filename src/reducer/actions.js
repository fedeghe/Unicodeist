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
    INIT_VIEWPORT = Symbol('init sizes'),
    SYMBOL_FOCUS = Symbol('focus symbol toggle'),
    IMPORT = Symbol('import'),
    IMPORT_KEYFRAMES = Symbol('import keyframes'),
    MOVE_ALL_SYMBOLS = Symbol('global move'),
    PAN_ALL_SYMBOLS = Symbol('global pan'),
    ALIGN_V = Symbol('align vertically'),
    ALIGN_H = Symbol('align horizontally'),
    SET_SYMBOLS_FILTER = Symbol('set symbols filter'),
    MOVE_SYMBOL = Symbol('move up down symbol'),
    MOVE_TARGET_ONE_PX = Symbol('move 1px symbol in direction'),
    REMOVE_ERROR = Symbol('remove error'),
    CAN_SCROLL_SYMBOLS = Symbol('when focused on a wheel'),
    NEW = Symbol('new creativity'),
    LET_ASCIIPANEL_OPEN_AFTER_SELECTION = Symbol('let the panel open after selection'),
    NEW_KEY_FRAME = Symbol('save a new keyframe'),
    UPDATE_KEY_FRAME = Symbol('uodate a new keyframe'),
    REMOVE_KEY_FRAME = Symbol('delete a  keyframe'),
    REMOVE_ALL_KEY_FRAMES = Symbol('delete all keyframe'),
    EXPAND_FAMILY = Symbol('expand family'),
    COLLAPSE_FAMILY = Symbol('collapse family'),
    TOGGLE_SYMBOL_SELECTION = Symbol('select toggle symbol for bulk action'),
    TOGGLE_SYMBOLS_SELECTION = Symbol('select toggle symbols'),
    SWAP_SYMBOL = Symbol('swap a symbol'),
    
    BULK_ALIGNV = Symbol('bulk vertical align'),
    BULK_ALIGNH = Symbol('bulk horizontal align'),
    BULK_SPACE= Symbol('bulk horiz / vert space'),
    BULK_DELETE = Symbol('bulk delete'),
    BULK_CENTER_VERTICALLY = Symbol('bulk center vertically'),
    BULK_CENTER_HORIZONALLY = Symbol('bulk center horizontally'),
    SWITCH_SYMBOL = Symbol('switch_symbol'),
    TOGGLE_ITALIC = Symbol('toggle italic'),
    ZOOM_ZERO = Symbol('zoom zero'),
    ZOOM_IN = Symbol('zoom in'),
    ZOOM_OUT = Symbol('zoom out');

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
    SYMBOL_FOCUS,
    INIT_VIEWPORT, 
    IMPORT,
    IMPORT_KEYFRAMES,
    MOVE_ALL_SYMBOLS,
    PAN_ALL_SYMBOLS,
    ALIGN_V,
    ALIGN_H,
    SET_SYMBOLS_FILTER,
    MOVE_SYMBOL,
    MOVE_TARGET_ONE_PX,
    REMOVE_ERROR,
    CAN_SCROLL_SYMBOLS,
    NEW,
    NEW_KEY_FRAME,
    UPDATE_KEY_FRAME,
    REMOVE_KEY_FRAME,
    REMOVE_ALL_KEY_FRAMES,
    EXPAND_FAMILY,
    COLLAPSE_FAMILY,
    TOGGLE_ITALIC,
    SWAP_SYMBOL,

    
    BULK_ALIGNV,
    BULK_ALIGNH,
    BULK_SPACE,
    BULK_DELETE,
    BULK_CENTER_VERTICALLY,
    BULK_CENTER_HORIZONALLY,
    SWITCH_SYMBOL,
    TOGGLE_SYMBOL_SELECTION,
    TOGGLE_SYMBOLS_SELECTION,
    ZOOM_IN,
    ZOOM_OUT,
    ZOOM_ZERO
};

export default exp;