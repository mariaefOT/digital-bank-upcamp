import { Outlet } from 'react-router-dom'; 
import NavigationBar from './NavigationBar';

const NavbarLayout = () => ( 
    <> 
        <NavigationBar/>
        <Outlet/> 
    </> 
);

export default NavbarLayout;
