import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import RoutesComponent from "./routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RoutesComponent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
