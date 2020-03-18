import Typography from "typography";
import doelgerTheme from 'typography-theme-doelger'
const typography = new Typography(
 {
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif'],
 },
doelgerTheme
);
export default typography;