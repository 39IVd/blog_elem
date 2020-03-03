const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            blog: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/blog/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            music: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/music/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            life: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/life/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            basepages: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/basepages/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    blogItemsPerPage
                    lifeItemsPerPage
                    musicItemsPerPage
                }
            }
        }
    `).then(result => {
        const blogPosts = result.data.blog.edges;

        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.blogItemsPerPage;
        const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage);

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list.js"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1
                }
            });
        });

        const MusicItems = result.data.music.edges;
        const MusicItemsPerPage =
            result.data.limitPost.siteMetadata.musicItemsPerPage;
        const numMusicItems = Math.ceil(
            MusicItems.length / MusicItemsPerPage
        );

        Array.from({ length: numMusicItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/music` : `/music/${i + 1}`,
                component: path.resolve("./src/templates/music-list.js"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numMusicItems,
                    currentPage: i + 1
                }
            });
        });

        const LifeItems = result.data.life.edges;
        const LifeItemsPerPage =
            result.data.limitPost.siteMetadata.lifeItemsPerPage;
        const numLifeItems = Math.ceil(
            LifeItems.length / LifeItemsPerPage
        );

        Array.from({ length: numLifeItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/life` : `/life/${i + 1}`,
                component: path.resolve("./src/templates/life-list.js"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numLifeItems,
                    currentPage: i + 1
                }
            });
        });

        

        result.data.blog.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "blog"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.music.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "music"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.life.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "life"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.basepages.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "basepage"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });
};
