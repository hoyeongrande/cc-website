import React from "react";
import { createStyles, Text, Container, rem, Flex } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles(theme => ({
    footer: {
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
        position: "relative",
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan("sm")]: {
            display: "flex",
            flexDirection: "column",
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
            textAlign: "center",
        },
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    groups: {
        display: "flex",
        flexWrap: "wrap",

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    wrapper: {
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    content: {
        [theme.fn.smallerThan("sm")]: {
            marginLeft: "unset",
            marginBottom: "1.5rem",
        },
        marginLeft: "3rem",
    },

    link: {
        display: "block",
        color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        "&:hover": {
            textDecoration: "underline",
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    afterFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    social: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

interface FooterLinksProps {
    data?: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

const Footer: React.FC<FooterLinksProps> = ({ data }: FooterLinksProps) => {
    const { classes } = useStyles();

    // const groups = data.map(group => {
    //     const links = group.links.map((link, index) => (
    //         <Text<"a"> key={index} className={classes.link} component="a" href={link.link} onClick={event => event.preventDefault()}>
    //             {link.label}
    //         </Text>
    //     ));
    //
    //     return (
    //         <div className={classes.wrapper} key={group.title}>
    //             <Text className={classes.title}>{group.title}</Text>
    //             {links}
    //         </div>
    //     );
    // });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <Flex className={classes.logo} align="flex-start">
                    <Image src="/cc_logo_white.png" width={108} height={25} />
                </Flex>
                <Flex justify="space-between" className={classes.wrapper}>
                    <div className={classes.content}>
                        <Text className={classes.title}></Text>
                        <Text pb={5}> </Text>
                        <Text pb={5}></Text>
                        <Text pb={5}></Text>
                        <Text></Text>
                    </div>
                    <div className={classes.content} key={classes.groups}>
                        <Text className={classes.title}></Text>
                        <Text></Text>
                    </div>
                    <div className={classes.content} key={classes.groups}>
                        <a href="https://www.instagram.com/culturecloud_official">
                            Instagram
                        </a>
                    </div>
                </Flex>
            </Container>
            <Container className={classes.afterFooter}></Container>
        </footer>
    );
};

export default Footer;
