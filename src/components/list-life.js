import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LifeItems from "./items-life";

export default function() {
    const query = useStaticQuery(graphql`
        query lifeList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/life/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
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

    return (
        <section id="life" className="container">
            <LifeItems data={query} />
        </section>
    );
}
