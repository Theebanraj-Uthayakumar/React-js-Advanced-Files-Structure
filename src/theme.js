import { createTheme, responsiveFontSizes } from '@material-ui/core';

// colors
const primary = '#30D0B6';
const black = '#08134A';
const darkBlack = 'rgb(36, 40, 44)';
const background = '#F9F9F9';
const warningLight = 'rgba(253, 200, 69, .3)';
const warningMain = 'rgba(253, 200, 69, .5)';
const warningDark = 'rgba(253, 200, 69, .7)';
const danger = '#FF3D3D';

// border
const borderWidth = 2;
const borderColor = 'rgba(0, 0, 0, 0.13)';

// spacing
const spacing = 8;

const theme = createTheme({
  palette: {
    primary: {
      light: '#59d9c4',
      main: '#30D0B6',
      dark: '#21917f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#39426e',
      main: '#08134A',
      dark: '#050d33',
      contrastText: '#fff',
    },
    common: {
      black,
      darkBlack,
      danger,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
    },
    spacing,
  },
  shadow: `0px 14px 40px #F5F7FF`,
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        color: '#08134A',
        backgroundColor: '#E9ECFF',
      },
    },
    MuiOutlinedInput: {
      input: {
        backgroundColor: '#E9ECFF',
      },
    },
    MuiInput: {
      root: {
        fontWeight: 500,
        paddingLeft: spacing,
        textAlign: 'center',
        '&::before': {
          display: 'none',
        },
        height: '2.5rem',
        color: '#162880',
        borderRadius: '5px',
        backgroundColor: '#E9ECFF',
        '&:hover': {
          backgroundColor: background,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiExpansionPanel: {
      root: {
        position: 'static',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItemIcon: {
      root: {
        color: primary,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${0}px solid ${borderColor}`,
      },
      root: {
        '&$selected': {
          backgroundColor: '#FAFBFF',
          borderLeft: '4px solid #30D0B6',
        },
      },
    },
    MuiDialog: {
      paper: {
        width: '100%',
        maxWidth: 430,
        marginLeft: spacing,
        marginRight: spacing,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack,
      },
    },
  },
  typography: {
    fontFamily: "'Poppins','Helvetica','Arial', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '34px',
      color: '#08134A',
      fontWeight: 600,
    },
    h2: {
      fontSize: '28px',
      letterSpacing: '0px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '18px',
      letterSpacing: '0px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '16px',
      letterSpacing: '0px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '15px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '18px',
      color: '#969BA0',
    },
    subtitle2: {
      fontSize: '12px',
      color: '#08134A',
      fontWeight: 500,
      opacity: 0.3,
    },
    button: {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
});

export default responsiveFontSizes(theme);