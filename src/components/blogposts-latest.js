import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "./items-blog";

export default function(props) {
    const query = useStaticQuery(graphql`
        query latestBlogList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/blog/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                            date
                            categories
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1920) {
                                        srcSet
                                        ...GatsbyImageSharpFluid
                                    }
                                    id
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    if (query.allMarkdownRemark.edges.length > 0) {
        return (
            <section id="latest-posts" className="container">
                <div>
                    <h2>Recent Posts</h2>
                </div>
                <BlogItems data={query}  str="all" remove={props.id} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
