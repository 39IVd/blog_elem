let siteMetadata = {
    title: `Paige Lee`,
    capitalizeTitleOnHome: false,
    logo: `/images/paigelog4.png`,
    icon: `/images/paigelog4.png`,
    titleImage: `/images/wall1.jpg`,
    introTag: `DEVELOPER | PROGRAMMER`,
    description: `This is Paige Log :)`,
    author: `@paige`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    musicItemsPerPage : 10,
    darkmode: true,
    switchTheme: true,
    // 상단 navigation bar 이름 변경
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT ME",
            url: "/about"
        },
        {
            name: "IT",
            url: "/blog"
        },
        {
            name: "LIFE",
            url: "/portfolio"
        },
        {
            name: "MUSIC",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    // social 소셜 계정 링크 변경
    social: [
        {
            name: "Github",
            icon: "/images/github.svg",
            url: "https://github.com/39IVd"
        },
        {
            name: "Gmail",
            icon: "/images/gmail.svg",
            url: "mailto:tmdwn4174@gmail.com"
        },
        {
            name: "Instagram",
            icon: "/images/instagram.svg",
            url: "#"
        },
        {
            name: "Youtube",
            icon: "/images/youtube.svg",
            url: "#"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
