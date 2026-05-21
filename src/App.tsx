// import { useState } from 'react'
// import { Box } from '@mui/material'
// import Header from './Components/Header'
// import Hero from './Components/Hero'
// import Offers from './Components/Offers'

// function App() {
//   return (
//     <Box component={'main'} sx={{
//       px: 18,
//       py: 8,
//       minHeight: '100vh'
//     }}>
//       <Header/>
//       <Hero/>
//       <Offers/>
//     </Box>
//   )
// }

// export default App
import { Box, Container } from "@mui/material";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Offers from "./Components/Offers";

function App() {
    return (
        <Box
            component="main"
            sx={{
                minHeight: "100vh",
                backgroundColor: "white",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: { xs: 2, sm: 4, md: 5 },
                    px: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    },
                }}
            >
                <Header />

                <Box
                    component="section"
                    aria-label="Featured news"
                    sx={{
                        mt: { xs: 4, md: 6 },
                    }}
                >
                    <Hero />
                </Box>

                <Box
                    component="section"
                    aria-label="Top articles"
                    sx={{
                        mt: { xs: 6, md: 8 },
                    }}
                >
                    <Offers />
                </Box>
            </Container>
        </Box>
    );
}

export default App;