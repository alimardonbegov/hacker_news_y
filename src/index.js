import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/styles.scss";
import App from "./App";
import { store } from "./redux/store";

// import "./styles/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
