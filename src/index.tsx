import "reflect-metadata";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import IOCProvider from "./di/provider";
import App from "./App";
import "./index.scss";

render(
	<IOCProvider>
		<App />
	</IOCProvider>,
	document.getElementById("root")
);
reportWebVitals();
