import {
    Box,
    Button,
    Divider,
    Typography,
    useMediaQuery,
} from "@mui/material";

const newSectionItems = [
    {
        title: "Hydrogen VS Electric Cars",
        desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        title: "The Downsides of AI Artistry",
        desc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
        title: "Is VC Funding Drying Up?",
        desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
];

function Hero() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box
            component="section"
            aria-label="Featured article"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 4,
                width: "100%",
                mt: 4,
            }}
        >
            {/* Left Side */}
            <Box
                component="section"
                aria-labelledby="hero-title"
                sx={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    width: "100%",
                }}
            >
                {/* Hero Image */}
                <Box
                    role="img"
                    aria-label="Colorful abstract shapes representing Web 3.0"
                    sx={{
                        backgroundImage: !isMobile
                            ? `url(${import.meta.env.BASE_URL}images/image-web-3-desktop.jpg)`
                            : `url(${import.meta.env.BASE_URL}images/image-web-3-mobile.jpg)`,
                        height: { xs: 320, sm: 350, md: 400 },
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Content */}
                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Title */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            id="hero-title"
                            variant="h2"
                            component="h1"
                            sx={{
                                fontFamily: "Inter",
                                fontWeight: 800,
                                color: "hsl(240, 100%, 5%)",
                                lineHeight: 1,
                                fontSize: {
                                    xs: "3rem",
                                    sm: "3.5rem",
                                    md: "4rem",
                                },
                            }}
                        >
                            The Bright Future of Web 3.0?
                        </Typography>
                    </Box>

                    {/* Text */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontFamily: "Inter",
                                fontWeight: 500,
                                color: "#79798a",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back into
                            the hands of the people. But is it really fulfilling
                            its promise?
                        </Typography>

                        <Box>
                            <Button
                                aria-label="Read more about Web 3.0"
                                sx={{
                                    backgroundColor: "hsl(5, 85%, 63%)",
                                    borderRadius: 0,
                                    color: "hsl(240, 100%, 5%)",
                                    fontSize: 15,
                                    fontWeight: 800,
                                    fontFamily: "Inter",
                                    letterSpacing: 4,
                                    px: 4,
                                    py: 1.7,
                                    textTransform: "uppercase",
                                    ":hover": {
                                        backgroundColor:
                                            "hsl(240, 100%, 5%)",
                                        color: "white",
                                    },
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Right Section */}
            <Box
                component="aside"
                aria-labelledby="new-articles-title"
                sx={{
                    flex: 0.83,
                    backgroundColor: "hsl(240, 100%, 5%)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 4,
                }}
            >
                <Typography
                    id="new-articles-title"
                    variant="h3"
                    component="h2"
                    sx={{
                        color: "hsl(35, 77%, 62%)",
                        fontFamily: "Inter",
                        fontWeight: 700,
                    }}
                >
                    New
                </Typography>

                {newSectionItems.map((item, index) => (
                    <Box key={item.title}>
                        <Typography
                            component="h3"
                            sx={{
                                color: "white",
                                fontFamily: "Inter",
                                fontWeight: 800,
                                fontSize: "1.3rem",
                                mb: 1,
                                cursor: "pointer",
                                ":hover": {
                                    color: "hsl(35, 77%, 62%)",
                                },
                            }}
                        >
                            {item.title}
                        </Typography>

                        <Typography
                            component="p"
                            sx={{
                                color: "hsl(233, 8%, 79%)",
                                fontFamily: "Inter",
                                lineHeight: 1.8,
                            }}
                        >
                            {item.desc}
                        </Typography>

                        {index !== newSectionItems.length - 1 && (
                            <Divider
                                sx={{
                                    backgroundColor:
                                        "hsl(236, 13%, 42%)",
                                    mt: 3,
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Hero; 