import { Outlet } from "react-router-dom";
import NavBar from "./NavigationPanel";


const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default RootLayout;