"use strict";
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DefaultContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer.tsx




const useStyles = (0,core_.createStyles)((theme)=>({
        footer: {
            marginTop: (0,core_.rem)(120),
            paddingTop: `calc(${theme.spacing.xl} * 2)`,
            paddingBottom: `calc(${theme.spacing.xl} * 2)`,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            borderTop: `${(0,core_.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
            position: "relative"
        },
        logo: {
            maxWidth: (0,core_.rem)(200),
            [theme.fn.smallerThan("sm")]: {
                display: "flex",
                flexDirection: "column"
            }
        },
        description: {
            marginTop: (0,core_.rem)(5),
            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xs,
                textAlign: "center"
            }
        },
        inner: {
            display: "flex",
            justifyContent: "space-between",
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column"
            }
        },
        groups: {
            display: "flex",
            flexWrap: "wrap",
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        },
        wrapper: {
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column"
            }
        },
        content: {
            [theme.fn.smallerThan("sm")]: {
                marginLeft: "unset",
                marginBottom: "1.5rem"
            },
            marginLeft: "3rem"
        },
        link: {
            display: "block",
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
            fontSize: theme.fontSizes.sm,
            paddingTop: (0,core_.rem)(3),
            paddingBottom: (0,core_.rem)(3),
            "&:hover": {
                textDecoration: "underline"
            }
        },
        title: {
            fontSize: theme.fontSizes.lg,
            fontWeight: 700,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            marginBottom: `calc(${theme.spacing.xs} / 2)`,
            color: theme.colorScheme === "dark" ? theme.white : theme.black
        },
        afterFooter: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: theme.spacing.xl,
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xl,
            borderTop: `${(0,core_.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column"
            }
        },
        social: {
            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xs
            }
        }
    }));
const Footer = ({ data  })=>{
    const { classes  } = useStyles();
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: classes.footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                className: classes.inner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Flex, {
                        className: classes.logo,
                        align: "flex-start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/cc_logo_white.png",
                            width: 108,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Flex, {
                        justify: "space-between",
                        className: classes.wrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        className: classes.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        pb: 5,
                                        children: " "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        pb: 5
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        pb: 5
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        className: classes.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {})
                                ]
                            }, classes.groups),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.content,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/culturecloud_official",
                                    children: "Instagram"
                                })
                            }, classes.groups)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
                className: classes.afterFooter
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(236);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/Header.tsx







const Header_useStyles = (0,core_.createStyles)((theme)=>({
        header: {
            position: "fixed",
            top: 0,
            border: "unset"
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
                height: (0,core_.rem)(42),
                display: "flex",
                alignItems: "center",
                width: "100%"
            },
            ...theme.fn.hover({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
            })
        },
        subLink: {
            width: "100%",
            padding: `${theme.spacing.xs} ${theme.spacing.md}`,
            borderRadius: theme.radius.md,
            ...theme.fn.hover({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
            }),
            "&:active": theme.activeStyles
        },
        dropdownFooter: {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
            margin: `calc(${theme.spacing.md} * -1)`,
            marginTop: theme.spacing.sm,
            padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
            paddingBottom: theme.spacing.xl,
            borderTop: `${(0,core_.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
        },
        hiddenMobile: {
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        },
        hiddenDesktop: {
            [theme.fn.largerThan("sm")]: {
                display: "none"
            }
        }
    }));
const mockdata = [
    {
        icon: icons_react_.IconCode,
        title: "Open source",
        description: "This Pok\xe9mon’s cry is very loud and distracting"
    },
    {
        icon: icons_react_.IconCoin,
        title: "Free for everyone",
        description: "The fluid of Smeargle’s tail secretions changes"
    },
    {
        icon: icons_react_.IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without"
    },
    {
        icon: icons_react_.IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its."
    },
    {
        icon: icons_react_.IconChartPie3,
        title: "Analytics",
        description: "This Pok\xe9mon uses its flying ability to quickly chase"
    },
    {
        icon: icons_react_.IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews"
    }, 
];
const MainHeader = ({ children  })=>{
    const [drawerOpened, { toggle: toggleDrawer , close: closeDrawer  }] = (0,hooks_.useDisclosure)(false);
    const [linksOpened, { toggle: toggleLinks  }] = (0,hooks_.useDisclosure)(false);
    const { classes , theme  } = Header_useStyles();
    const pinned = (0,hooks_.useHeadroom)({
        fixedAt: 30
    });
    const router = (0,router_.useRouter)();
    const links = mockdata.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
            className: classes.subLink,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                noWrap: true,
                align: "flex-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                        size: 34,
                        variant: "default",
                        radius: "md",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                            size: (0,core_.rem)(22),
                            color: theme.fn.primaryColor()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                size: "sm",
                                fw: 500,
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                size: "xs",
                                color: "dimmed",
                                children: item.description
                            })
                        ]
                    })
                ]
            })
        }, item.title));
    const HeaderMenu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: classes.link,
                    children: "About"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: classes.link,
                    children: "Services"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                    onClick: ()=>router.push("/"),
                    className: classes.hiddenMobile,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/cc_logo_white.png",
                        width: 153,
                        height: 30
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: classes.link,
                    children: "Project"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: classes.link,
                    children: "Contact"
                })
            ]
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Header, {
                height: 60,
                px: "md",
                className: classes.header,
                sx: (theme)=>({
                        transform: `translate3d(0, ${pinned ? 0 : (0,core_.rem)(-60)}, 0)`,
                        transition: "transform 400ms ease"
                    }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                        position: "apart",
                        spacing: "xl",
                        sx: {
                            height: "100%"
                        },
                        className: classes.hiddenDesktop,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                                onClick: ()=>router.push("/"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/cc_logo_white.png",
                                    width: 153,
                                    height: 30
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                                opened: false,
                                onClick: toggleDrawer
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Flex, {
                        justify: "space-between",
                        align: "center",
                        sx: {
                            height: "100%"
                        },
                        className: classes.hiddenMobile,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Space, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(HeaderMenu, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Space, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Drawer, {
                opened: drawerOpened,
                onClose: closeDrawer,
                size: "100%",
                className: classes.hiddenDesktop,
                zIndex: 1000000,
                withCloseButton: false,
                p: "0rem",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Flex, {
                        justify: "space-between",
                        align: "flex-start",
                        my: "-3px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                                onClick: ()=>router.push("/"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/cc_logo_white.png",
                                    width: 133,
                                    height: 30
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CloseButton, {
                                onClick: closeDrawer,
                                size: "lg"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ScrollArea, {
                        h: `calc(100vh - ${(0,core_.rem)(60)})`,
                        mx: "-md",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                                my: "md",
                                color: theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(HeaderMenu, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                                my: "sm",
                                color: theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const Header = (MainHeader);

;// CONCATENATED MODULE: ./components/DefaultContainer.tsx




const DefaultContainer = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            height: "auto",
            minHeight: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_DefaultContainer = (DefaultContainer);


/***/ }),

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({
        hero: {
            position: "relative",
            backgroundImage: "url(/background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        container: {
            height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(700),
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingBottom: `calc(${theme.spacing.xl} * 6)`,
            zIndex: 1,
            position: "relative",
            [theme.fn.smallerThan("sm")]: {
                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(500),
                paddingBottom: `calc(${theme.spacing.xl} * 3)`
            }
        },
        title: {
            color: theme.white,
            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(60),
            fontWeight: 900,
            lineHeight: 1.1,
            [theme.fn.smallerThan("sm")]: {
                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(40),
                lineHeight: 1.2
            },
            [theme.fn.smallerThan("xs")]: {
                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(28),
                lineHeight: 1.3
            }
        },
        description: {
            color: theme.white,
            maxWidth: 600,
            [theme.fn.smallerThan("sm")]: {
                maxWidth: "100%",
                fontSize: theme.fontSizes.sm
            }
        },
        control: {
            marginTop: `calc(${theme.spacing.xl} * 1.5)`,
            [theme.fn.smallerThan("sm")]: {
                width: "100%"
            }
        }
    }));
const MainInfo = ()=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.hero,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Overlay, {
                gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)",
                opacity: 1,
                zIndex: 0
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: classes.container,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
                    className: classes.title,
                    children: "Culture Cloud"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainInfo);


/***/ })

};
;