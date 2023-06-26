// create theme mode eum with light and dark theme modes
export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
}

type ThemeColorToken = {
    [key: number]: string;
};

export type ThemeColorTokens = {
    [key: string]: ThemeColorToken;
};

export type ThemeSettingsPalette = {
    mode: ThemeMode;
    primary: { [key: string]: string };
    secondary: { [key: string]: string };
    neutral: { [key: string]: string };
    background: { [key: string]: string };
};

export type ColorModeContextType = {
    toggleColorMode: () => void;
};
