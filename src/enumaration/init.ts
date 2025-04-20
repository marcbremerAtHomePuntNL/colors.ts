import { BaseColors } from './basecolors';

enum Header {

    ORANGE = BaseColors.ORANGE,
}

enum Button {

    ON_CLICK = BaseColors.ORANGE,
    UNSELECTED = BaseColors.GRAY_DARK,
    ON_HOVER = BaseColors.GRAY_MEDIUM,
    SELECTED = BaseColors.GREEN,
}

export { Header, Button }