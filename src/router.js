import { createBrowserRouter } from "react-router-dom";
import StepForm from "./pages/StepForm";
import Thankyou from "./pages/Thankyou";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <StepForm />
    },
    {
        path: '/thankyou',
        element: <Thankyou />
    }
])

export default router;