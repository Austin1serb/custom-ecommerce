
import '../Styles/Shop.css'
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Skeleton, InputAdornment, IconButton } from '@mui/material';
import axios from 'axios';
import { useCart } from '../components/CartContext.jsx';
import QuickView from '../components/QuickView';
import { useLocation } from 'react-router-dom';


const ProductSkeleton = ({ count }) => (

    Array.from({ length: count }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
                border: '.1px solid #ccc',
                borderRadius: '1px',
                py: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '300px',
                justifyContent: 'space-between'
            }}>
                <Skeleton variant="rectangular" width="100%" height={150} />
                <Skeleton variant="text" width="80%" height={24} />
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="30%" height={24} />
            </Box>
        </Grid>
    ))

);



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [quickViewOpen, setQuickViewOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const pageSize = 9; // Adjust the number of products per page as needed
    const { addToCart } = useCart();
    const [totalProducts, setTotalProducts] = useState(0);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [filter, setFilter] = useState('');





    const fetchProducts = (url) => {
        setLoading(true);
        axios.get(url)
            .then(response => {
                setProducts(prevProducts => [...prevProducts, ...response.data.products]);
                setPage(prevPage => prevPage + 1);
                setTotalProducts(response.data.totalProducts);
                setLoading(false);
                setLoadingMore(false);
            })
            .catch(error => {
                console.error("There was an error fetching the products:", error);
                setLoading(false);
                setLoadingMore(false);
            });
    };




    useEffect(() => {
        const newFilter = queryParams.get('filter') || '';
        setFilter(newFilter);
        setProducts([]);
        setPage(1);
        const url = `http://localhost:8000/api/product/paginate/?page=1&pageSize=${pageSize}&filter=${newFilter}`;
        fetchProducts(url)

    }, [location.search]);






    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            // User has scrolled to the bottom
            if (products.length < totalProducts && !loadingMore) {
                setLoadingMore(true);
                // Fetch the next page of products

                axios
                    .get(`http://localhost:8000/api/product/paginate/?page=${page}&pageSize=${pageSize}`)
                    .then(response => {

                        // Append the new products to the existing products array
                        setProducts(prevProducts => [...prevProducts, ...response.data.products]);
                        setPage(prevPage => prevPage + 1);
                        setLoadingMore(false);
                    })
                    .catch(error => {
                        console.error("There was an error fetching more products:", error);
                        setLoadingMore(false);
                    });
                fetchProducts();
            }
        }
    }, [loadingMore, page, pageSize, products.length, totalProducts]);


    const getRelatedProducts = (categories) => {
        return products.filter(product =>
            product.categories.some(category =>
                categories.includes(category)
            )
        ).slice(0, 3); // Return only the first 3 related products
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );






    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, filter]); // Only depends on handleScroll


    const productStyles = {
        border: '.1px solid #ccc',
        borderRadius: '5px',
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        justifyContent: 'space-between'
    }
    return (
        <Box className="shop" sx={{ padding: '20px', mt: -10 }}>

            <Box mb={4}>
                <TextField
                    autoCorrect="off"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end" >

                                <IconButton sx={{ mr: -1 }}>
                                    {/* magnify icon */}
                                    <svg fill='#0F75E0' xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                </IconButton>

                            </InputAdornment>
                    }}
                    label="Search Products" variant="outlined" value={searchTerm} onChange={handleSearchChange} fullWidth />
            </Box>


            {/* Products Grid */}
            {loading ? ( // Check if products are loading
                <Grid container spacing={3}>
                    <ProductSkeleton count={pageSize} />
                </Grid>
            ) : ( // Render products when not loading
                <Grid container spacing={3} >
                    {filteredProducts.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={product._id} style={{ animationDelay: `${index * 0.2}s` }} className="product-slide-in-shop">
                            <div style={productStyles}>

                                <img className="shop-img" src={product.imgSource[0].url} alt={product.name} height="150px" loading='lazy' />
                                <Typography sx={{ fontWeight: 100, fontSize: 14 }} className='shop-name' mt={2}>{product.name}</Typography>
                                <Typography variant="subtitle1" className='shop-brand' sx={{ fontSize: 12, fontWeight: 100, color: 'gray' }}>{product.brand}</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 100, fontSize: 16 }} className='shop-price'>${product.price.toFixed(2)}</Typography>
                                {/*<Typography variant="body2" mt={2} noWrap>
                                {product.description.length > 60 ? product.description.substring(0, 60) + "..." : product.description}
                            </Typography>*/}

                                <Box className='shop-button-container'>
                                    <Button variant="outlined" className='shop-button-cart' sx={{ border: 1, borderRadius: 0, letterSpacing: 2, fontSize: 12, color: 'white', backgroundColor: '#283047', borderColor: '#283047', borderWidth: 1.5, transition: 'all 0.3s', '&:hover': { backgroundColor: '#FE6F49', color: 'white', borderColor: '#FE6F49', transform: 'scale(1.05)' } }} onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </Button>
                                    <Button variant="outlined" className='shop-button-view' sx={{ border: 1, borderRadius: 0, letterSpacing: 2, fontSize: 12, color: '#283047', backgroundColor: 'white', borderColor: '#283047', borderWidth: 1.5, transition: 'all 0.3s', '&:hover': { backgroundColor: '#283047', color: 'white', transform: 'scale(1.05)' } }} onClick={() => {
                                        setQuickViewProduct(product._id);
                                        setQuickViewOpen(true)
                                    }}>Quick View</Button>
                                </Box>

                            </div>

                        </Grid>
                    ))}
                    {/* Display skeletons if more products are to be loaded or loading more products */}

                    {(filteredProducts.length < totalProducts || loadingMore) && (

                        <ProductSkeleton count={3} />

                    )}


                </Grid>
            )}

            <QuickView
                productId={quickViewProduct}
                open={quickViewOpen}
                handleClose={() => setQuickViewOpen(false)}
                products={products} // Pass the products to QuickView
                getRelatedProducts={getRelatedProducts} // Pass the function to get related products
            />

        </Box>
    );
}

export default Shop;