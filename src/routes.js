
import React  from 'react';

const Home = React.lazy(() => import('./containers/HomeContainer/HomeContainer'));

export const Routes = [
    {
        isExact: true,
        path: '/',
        name: 'Home',
        component: Home
    }
];