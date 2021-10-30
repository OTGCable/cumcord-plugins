import theme from "./cumtheme.css";
let unpatch;
export default () => ({
  onLoad: () => (unpatch = theme()),
  onUnload: () => unpatch(),
});