// import { useTheme } from "@mui/material/styles";
// import { Typography, useMediaQuery } from "@mui/material";
// import { BannerContainer,
//     BannerContent,
//     BannerDescription,
//     BannerTitle,
//     BannerImage } from "../../styles/banner";

// export default function Banner(){
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down('md'));

//     return (
//         <BannerContainer>
//             <BannerImage src = "./images/banner/banner.png"/>
//             <BannerContent>
//                 <Typography variant="variant"> Huge Collection</Typography>
//                 <BannerTitle variant="h2">
//                     New Bags
//                 </BannerTitle>
//                 <BannerDescription variant="subtitle">
//                 Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
//                 tempor incididunt ut labore et dolore magna
//                 </BannerDescription>

//             </BannerContent>
//         </BannerContainer>
//     );
// }

import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
} from '../../styles/banner';

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src='/banner.jpg' />
            <BannerContent>
                <Typography variant='h6'>GoodBook Collection</Typography>
                <BannerTitle variant='h2'>NewBook</BannerTitle>

                <BannerDescription variant='subtitle'>
                    MYBOOK Bookstore actively selects and publishes in Vietnam a diverse list of English books from
                    major publishers in the world such as Penguin Random House, Hachette Livre, HarperCollins, Macmillan
                    Publishs, Simon & Schuster,... titles Only available at MYBOOK Bookstore, many titles are released
                    at the same time as the book's launch in the UK and US.
                </BannerDescription>

                <BannerShopButton color='primary'>Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}
