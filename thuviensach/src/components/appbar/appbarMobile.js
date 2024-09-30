import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"

export default function AppbarMobile({matches})
{
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={'center'} variant = "h4">
                KOBooks
            </AppbarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches = {matches}/>
        </AppbarContainer>
    );
}