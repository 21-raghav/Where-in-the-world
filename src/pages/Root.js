import { Outlet } from 'react-router-dom'
import Header from "../components/Header";

const RootPage = ({onGetTheme}) => {
    const getUpdatedTheme = (data) => {
        onGetTheme(data);
    };
    console.log("run from root");
    return (
        <>
        <Header onThemeUpdate={getUpdatedTheme} />
        <main>
            <Outlet />
        </main>
        </>
    );
};

export default RootPage;