import React from "react";
import {
    createStyles,
    Header,
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    Divider,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    CloseButton,
    Flex,
    Stack, Space
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = createStyles(theme => ({
    header: {
        position: "fixed",
        top: 0,
        border: "unset",
    },
    link: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
        transition: "all ease 1s 1s",

        [theme.fn.smallerThan("sm")]: {
            height: rem(42),
            display: "flex",
            alignItems: "center",
            width: "100%",
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: "100%",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        "&:active": theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

const mockdata = [
    {
        icon: IconCode,
        title: "Open source",
        description: "This Pokémon’s cry is very loud and distracting",
    },
    {
        icon: IconCoin,
        title: "Free for everyone",
        description: "The fluid of Smeargle’s tail secretions changes",
    },
    {
        icon: IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without",
    },
    {
        icon: IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its.",
    },
    {
        icon: IconChartPie3,
        title: "Analytics",
        description: "This Pokémon uses its flying ability to quickly chase",
    },
    {
        icon: IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews",
    },
];

interface Props {
    children?: React.ReactNode;
}

const MainHeader: React.FC<Props> = ({ children }: Props) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const pinned = useHeadroom({ fixedAt: 30 });
    const router = useRouter();

    const links = mockdata.map(item => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    const HeaderMenu: React.FC = () => (
        <>
            <a href="#" className={classes.link}>
                About
            </a>
            <a href="#" className={classes.link}>
                Services
            </a>
            <UnstyledButton onClick={() => router.push("/")} className={classes.hiddenMobile}>
                <Image src="/cc_logo_white.png" width={153} height={30} />
            </UnstyledButton>
            <a href="#" className={classes.link}>
                Project
            </a>
            <a href="#" className={classes.link}>
                Contact
            </a>
        </>
    );

    return (
        <>
            <Header
                height={60}
                px="md"
                className={classes.header}
                sx={theme => ({
                    transform: `translate3d(0, ${pinned ? 0 : rem(-60)}, 0)`,
                    transition: "transform 400ms ease",
                })}
            >
                <Group position="apart" spacing="xl" sx={{ height: "100%" }} className={classes.hiddenDesktop}>
                    <UnstyledButton onClick={() => router.push("/")}>
                        <Image src="/cc_logo_white.png" width={153} height={30} />
                    </UnstyledButton>
                    <Burger opened={false} onClick={toggleDrawer} />
                </Group>

                <Flex justify="space-between" align="center" sx={{ height: "100%" }} className={classes.hiddenMobile}>
                    <Space />
                        <HeaderMenu />
                    <Space />
                </Flex>
            </Header>

            <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" className={classes.hiddenDesktop} zIndex={1000000} withCloseButton={false} p="0rem">
                <Flex justify="space-between" align="flex-start" my="-3px">
                    <UnstyledButton onClick={() => router.push("/")}>
                        <Image src="/cc_logo_white.png" width={133} height={30} />
                    </UnstyledButton>
                    <CloseButton onClick={closeDrawer} size="lg" />
                </Flex>
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
                    <HeaderMenu />
                    <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
                </ScrollArea>
            </Drawer>
            {children}
        </>
    );
};

export default MainHeader;
