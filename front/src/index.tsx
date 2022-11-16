import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material/styles";

// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";

const theme = createTheme({
	components: {
		MuiDatePicker: {
			styleOverrides: {
				root: {
					backgroundColor: "red",
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		{/* <StyledEngineProvider injectFirst> */}
		{/* <Provider store={store}> */}
		<BrowserRouter>
			{/* <LocalizationProvider dateAdapter={AdapterMoment}> */}
			<App />
			{/* </LocalizationProvider> */}
		</BrowserRouter>
		{/* </StyledEngineProvider> */}
		{/* </ThemeProvider> */}
		{/* </Provider> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
