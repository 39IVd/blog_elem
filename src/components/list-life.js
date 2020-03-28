import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LifeItems from "./items-life";
import SectionTitle from "./sectiontitle";

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
            <section id="life" className="container">
                <div className="section-title">
                    <SectionTitle title="Recent Posts" />
                </div>
                <LifeItems data={query} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
