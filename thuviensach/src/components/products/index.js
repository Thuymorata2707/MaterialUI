// import { useTheme } from "@mui/material/styles";
// import { Container, Grid,useMediaQuery } from "@mui/material";
// import { products } from "../../data";
// import SingleProduct from "./SingleProduct";

// export default function Products(){
//     const theme = useTheme();
//     const matches =
//         useMediaQuery(theme.breakpoints.down('md'));
//     const renderProducts = products.map(product => (
//         <Grid
//             item
//                 key={product.id}
//                 xs = {2}
//                 sm = {4}
//                 md = {4}
//         display = "flex"
//         flexDirection={"column"}
//         alignItems="center">
//         <SingleProduct product={product} matches={matches}></SingleProduct>
//         </Grid>
//     ));
//     return(
//         <Container>
//             <Grid
//                 container
//                 spacing = {{ xs:2, md: 3}}
//                 justifyContent={"center"}
//                 sx = {{margin: '20px 4px 10px 4px'}}
//                 columns={{xs:4, sm:8, md:12}}
//                 >
//                     {renderProducts}

//             </Grid>
//         </Container>
//     );
// }
import { useState } from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import SingleProduct from './SingleProduct';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import SingleProductDesktop from './SingleProductDesktop';
import AppPagination from '../pagination';
import { products } from '../../data';
import Appbar from '../appbar';

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    // const [products, setProducts] = useState([]);
    const productsData = products;
    const renderProducts = productsData.map((product) => (
        <Grid item key={product._id} xs={2} sm={4} md={4} display='flex' flexDirection={'column'} alignItems='center'>
            {matches ? (
                <SingleProduct product={product} matches={matches} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )}
        </Grid>
    ));
    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent='center'
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
            {/* <AppPagination setProducts={(p) => setProducts(p)}/> */}
        </Container>
    );
}
