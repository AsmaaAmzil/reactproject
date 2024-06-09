import useLocalStroage from "./useLocalStroage";
import './theme.css';
export default function LightDrakMode(){
  const [theme,setTheme]=useLocalStroage('theme','dark');
  function handleToggleTheme(){
    setTheme(theme === 'light'? 'dark':'light');
  }
  console.log(theme);
  return <div className="light-dark-mode" data-theme={theme}>
    <div className="container">
      <p>Hello World!</p>
      <button onClick={handleToggleTheme}>change the theme</button>
    </div>
  </div>
}