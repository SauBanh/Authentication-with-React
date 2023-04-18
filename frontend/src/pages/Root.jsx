// import { Outlet, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
    // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
            return;
        }

        const tokenDration = getTokenDuration();
        console.log(tokenDration);

        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' });
        }, tokenDration);
    }, [token, submit]);
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
