import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

<img
  className="image"
  alt="one"
  src="https://pixabay.com/photos/tree-sunrise-field-prairie-meadow-7186835/"
/>;
document.getElementById("app");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
