// import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// import { MyList,
//     AppbarContainer,
//     AppbarHeader }
//     from "../../styles/appbar";
// import SearchIcon from "@mui/icons-material/Search"
// import Actions from "./action";

// export default function AppbarDesktop({ matches }){
//     return(
//             <AppbarContainer>
//             <AppbarHeader variant="h4"> KOBooks </AppbarHeader>
//             <MyList type = 'row'>
//                 <ListItemText primary = "Home"/>
//                 <ListItemText primary = "Catergories"/>
//                 <ListItemText primary = "Products"/>
//                 <ListItemText primary = "Contact Us"/>
//                 <ListItemButton>
//                     <ListItemIcon>
//                         <SearchIcon />
//                     </ListItemIcon>
//                 </ListItemButton>
//             </MyList>
//             <Actions matches={matches}/>
//             </AppbarContainer>
//     );
// }

import {
    Box,
    Button,
    Divider,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import { AppbarActionIcons, AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Actions from './actions';
import { useUIContext } from '../../context/ui';
import { useNavigate } from 'react-router-dom';

export default function AppbarDesktop({ matches, onLoginClick, onLogoutClick }) {
    const navigate = useNavigate();
    const { setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader variant='h4'>Book Store</AppbarHeader>
            <MyList type='row'>
                <ListItemButton onClick={() => navigate('/')}>Home</ListItemButton>
                <ListItemText primary='Categories' />
                {/* <ListItemButton onClick={() => navigate('/categories')}>Categories</ListItemButton> */}
                <ListItemButton onClick={() => navigate('/products')}>Products</ListItemButton>
                <ListItemText primary='About us' />
                <ListItemText primary='Contact us' />
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} onLogin={onLoginClick} onLogout={onLogoutClick} />
        </AppbarContainer>
    );
}
