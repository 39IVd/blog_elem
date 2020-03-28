import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LifeItems from "./items-life";

export default function(props) {
    const query = useStaticQuery(graphql`
        query latestLifeList {
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
                            date
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
                <LifeItems data={query} remove={props.id} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
