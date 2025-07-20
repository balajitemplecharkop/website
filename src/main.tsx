import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-0VQSFLF6YL");

createRoot(document.getElementById("root")!).render(<App />);
