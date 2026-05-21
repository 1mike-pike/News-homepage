import { Box, Typography } from "@mui/material";

const bottomCards = [
    {
        id: "01",
        title: "Reviving Retro PCs",
        desc: "What happens when old PCs are given modern upgrades?",
        image: `${import.meta.env.BASE_URL}images/image-retro-pcs.jpg`,
    },
    {
        id: "02",
        title: "Top 10 Laptops of 2022",
        desc: "Our best picks for various needs and budgets.",
        image: `${import.meta.env.BASE_URL}images/image-top-laptops.jpg`,
    },
    {
        id: "03",
        title: "The Growth of Gaming",
        desc: "How the pandemic has sparked fresh opportunities.",
        image: `${import.meta.env.BASE_URL}images/image-gaming-growth.jpg`,
    },
];

type OfferCardProps = {
    id: string;
    title: string;
    desc: string;
    image: string;
};

function OfferCard({
    id,
    title,
    desc,
    image,
}: OfferCardProps) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "stretch",
                gap: 3,
                width: "100%",
            }}
        >
            {/* Image */}
            <Box
                component={"img"}
                src={image}
                alt={title}
                sx={{
                    width: 110,
                    height: 145,
                    objectFit: "cover",
                    flexShrink: 0,
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    fontFamily: "Inter",
                    py: 0.5,
                }}
            >
                <Typography
                    sx={{
                        color: "hsl(5, 85%, 63%)",
                        fontSize: "2rem",
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    {id}
                </Typography>

                <Typography
                    component={"h3"}
                    sx={{
                        color: "hsl(240, 100%, 5%)",
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        cursor: "pointer",
                        transition: "0.2s ease",
                        ":hover": {
                            color: "hsl(5, 85%, 63%)",
                        },
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        color: "hsl(236, 13%, 42%)",
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                    }}
                >
                    {desc}
                </Typography>
            </Box>
        </Box>
    );
}

function Offers() {
    return (
        <Box
            component={"section"}
            sx={{
                mt: 8,
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(3, 1fr)",
                },
                gap: 4,
                width: "100%",
            }}
        >
            {bottomCards.map((item) => (
                <OfferCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                />
            ))}
        </Box>
    );
}

export default Offers;