import "./main.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
}
