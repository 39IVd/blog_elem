import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MusicItems from "./items-music";
import SectionTitle from "./sectiontitle";

export default function() {
    const query = useStaticQuery(graphql`
        query musicList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/music/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            artist
                            genre
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
            <section id="music" className="container">
                {/* <div className="section-title">
                    <SectionTitle title="Recent Posts" />
                </div>
                <MusicItems data={query} /> */}
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
