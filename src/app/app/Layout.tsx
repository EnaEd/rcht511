import {Outlet} from "react-router";
import {Header} from "../../shared/ui/header/header";
import {Footer} from "../../shared/ui/footer/footer";

export const Layout = () => {
    return (
        <div className={'app'}>
            <section className={'header'}>
                <Header />
            </section>

            <section className={'content'}>
                <Outlet />
            </section>

            <section className={'footer'}>
                <Footer />
            </section>
        </div>
    );
};