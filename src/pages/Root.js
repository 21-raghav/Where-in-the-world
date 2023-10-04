import { Outlet } from 'react-router-dom'
import Header from "../components/Header";

const RootPage = ({onGetTheme}) => {
    const getUpdatedTheme = (data) => {
        onGetTheme(data);
    };

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