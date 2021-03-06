import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "./items-blog";
import SectionTitle from "./sectiontitle";
        // 홈 화면에서 Recent Posts (Blog list) 표시
export default function() {
    const query = useStaticQuery(graphql`
        query blogList {
            allMarkdownRemark(
                filter: {frontmatter: {template: {eq: "blog"}}}
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
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
                        timeToRead
                        excerpt
                    }
                }
            }
        }
    `);

    if (query.allMarkdownRemark.edges.length > 0) {
        return (
            <section id="blog" className="container">
                <div className="section-title">
                    <SectionTitle title="Recent Posts" />
                </div>
                <BlogItems data={query} str="all"/>
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
