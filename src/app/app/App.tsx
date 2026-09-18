import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Layout} from "./Layout";
import {ChatComponent} from "../../features/chat/ui/chat-component/chat-component";
import {NotFound} from "../../shared/ui/not-found/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ChatComponent />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export const App = () => {

    return  <div className="app-wrapper">
        <RouterProvider router={router} />
    </div>;
}
