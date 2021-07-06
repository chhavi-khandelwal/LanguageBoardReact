import LanguagePage from 'containers/LanguagePage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguagePage />
    </ThemeProvider>
  );
}

export default App;
