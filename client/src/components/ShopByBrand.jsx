import { Box, Button } from '@mui/material';
import React from 'react';
import '../Styles/BestSellersSection.css'
const BestSellersSection = () => {
    // Sample data for best-sellers


    return (
        <Box>
            <h2 className='best-seller-header' >Shop By Brand</h2>
            <div className="best-sellers">


                <div className="best-seller-item" >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.74 144" className="Header_headerLogo__s0Dde"><path d="M97.32 77.17l8.56-25.08c.11-.32.2-.67.29-1a9.82 9.82 0 00.28 1L115 77.17h1.88l9.12-28.9h-1.6a.91.91 0 00-.51.16.77.77 0 00-.26.4l-7.33 23.75a6.93 6.93 0 00-.21.87c0 .3-.11.61-.18.94-.07-.34-.15-.66-.23-1a7 7 0 00-.24-.85l-8.17-23.75a.84.84 0 00-.29-.39.68.68 0 00-.47-.17h-.57a.77.77 0 00-.49.17.81.81 0 00-.28.38L97 72.58a6.85 6.85 0 00-.25.87c-.07.31-.13.64-.2 1l-.21-1a7.57 7.57 0 00-.2-.88l-7.29-23.75a.73.73 0 00-.76-.55h-1.73l9.11 28.9zm56.16-28.9a.79.79 0 00-.47.14 1.22 1.22 0 00-.3.37l-8.25 13.28a7.51 7.51 0 00-.46.94 8.41 8.41 0 00-.37.87c-.11-.29-.23-.59-.37-.87a6.85 6.85 0 00-.49-.92L134.5 48.8a1.39 1.39 0 00-.35-.37.73.73 0 00-.45-.14h-1.81l10.68 17v11.88h2.1V65.24l10.68-17zm24.1 27.12h-13.7V48.27h-2.08v28.9h15.78zm23.64.78a12.31 12.31 0 004.34-2.88 13 13 0 002.82-4.56 18.59 18.59 0 000-12 13 13 0 00-2.81-4.55 12.26 12.26 0 00-4.35-2.88 15.32 15.32 0 00-5.62-1h-10.54v28.9h10.54a15.32 15.32 0 005.62-1.03zm-14.05-.69V50h8.43a12.57 12.57 0 014.76.86 9.67 9.67 0 013.64 2.45 11 11 0 012.37 4 17.78 17.78 0 010 10.8 11.27 11.27 0 01-2.37 4 9.81 9.81 0 01-3.65 2.49 12.57 12.57 0 01-4.76.86zM295.64 38.4c-1.45-.9-4.75 6.77-8.84 10s-6.39 5.15-12 6.22c-.89.17-2.17.46-2.28-.44a38.16 38.16 0 014.18-16.39c.71-1.42 1.87-6.58-2.91 0-4.32 5.92-7 15.74-10.57 19.14-3 2.93-7.79 5-10.36 3s-2.53-18.09-.72-19.54C267.22 28.35 274.92.43 272.55 0c-1.78-.32-15.09 34.61-24.09 32-4.44-1.3-10.17-10.17-14.33-17.45-2-3.45-4.45-4.39-4.14-3.34 2.19 7.35 10 17.27 11.85 29.56 1.3 8.9 1.62 19.14-.59 23.06C237 71.28 221 90.87 210.74 99c-3.8 3-6.68 3.62-10.92 6-14.32 8-28 20.06-36 21.79-2.08.45-3.34-.2-5.43-.58-2.65-.63-2.48 2-3.42 3.8-2.46 4.61.22 11.94 2.51 13.16 2.65 1.44 1.36-2.73 6-6.45 3.59-2.89 10.1-6.36 14.94-6.79 9-.81 11.27 8.74 19 13.18 7.92 4.57-8.14-10.38-5.66-20.59 1.52-6.25 20-8.86 25.89-7.65s10.8 3.89 14.8 4.73c11.74 2.48 18.56.45 28.57-6.45 6.82-4.7 12.69-14.92 13.46-16.42.59-1.12-2.47-.17-3.41.83-3.7 3.92-7.07 8.41-13.15 11.45-9.51 4.72-18.53 6.6-27.16 1.6-4.07-2.35-8.38-5.32-4.87-10.14 1.79-2.44 15.11-20.58 28.21-29.73 10.43-7.29 21.49-9.63 29.41-14.17 7.33-4.22 13.08-17.57 12.13-18.17zm-158.25 87.88c-2.09.39-3.34 1-5.43.59-8.07-1.73-21.72-13.75-36-21.8-4.24-2.38-7.12-3-10.92-6-10.3-8.17-26.32-27.76-30.54-35.23-2.22-3.92 3.31-15-.6-23.06C52 36.92 51.72 30.7 47.28 32 38.28 34.65 25-.28 23.19 0 20.82.47 29.92 29.81 45 41.81c1.81 1.45.43 16.16-2.12 18.12s-7.33-.09-10.36-3c-3.52-3.42-6.28-13.24-10.6-19.16-4.78-6.55-3.62-1.4-2.91 0a38 38 0 014.18 16.4c-.11.89-1.39.6-2.28.43-5.58-1.07-7.83-3-12-6.22S1.55 37.54.1 38.44c-.95.59 4.79 13.94 12.21 18.2 7.91 4.55 19 6.88 29.41 14.18 13.1 9.18 26.42 27.28 28.2 29.72 3.51 4.82-.8 7.79-4.86 10.15-8.64 5-19.22 7.43-27.54.73-1.57-1.26-9.55-2.89-2.73 1.8 10 6.9 16.84 8.93 28.57 6.46 4-.85 8.87-3.52 14.8-4.74s23.71 1.61 25.89 7.65c3.31 9.19-3.44 11.79-.51 13.07 2 .89 4.84-6.46 13.82-5.66 4.84.44 11.35 3.91 14.94 6.79 4.64 3.73 3.35 7.9 6 6.46 2.29-1.23 5-8.56 2.51-13.16-.94-1.76-.76-4.43-3.42-3.81zm75.26-77.41l1.08 3.45h.62l1-3.41v3.41h.65v-4.05h-1l-1 3.24-1-3.24h-1v4.06h.61zm-3.08 3.45h.68v-3.45h1.32v-.6h-3.32v.61h1.31z" fillRule="evenodd"></path></svg>
                    <Button className='best-sellers-button' >SHOP NOW</Button>
                    <p className="best-seller-name">''</p>
                    <p className="best-seller-price"></p>
                </div>
                <div className="best-seller-item" >
                    <img
                        src='https://www.beezbeecbd.com/cdn/shop/files/bzb-fullcolor_150x.png?v=1618001658'
                        alt=''
                        className="best-seller-image"
                    />
                    <Button className='best-sellers-button' >SHOP NOW</Button>
                    <p className="best-seller-name">''</p>
                    <p className="best-seller-price"></p>
                </div>
                <div className="best-seller-item" >
                    <img
                        src=''
                        alt=''
                        className="best-seller-image"
                    />
                    <Button className='best-sellers-button' >SHOP NOW</Button>
                    <p className="best-seller-name">''</p>
                    <p className="best-seller-price"></p>
                </div>
            </div>
        </Box>
    );
};

export default BestSellersSection;
