const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/main");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            }
        ]
    }
])

export default router;