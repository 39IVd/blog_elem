import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import LifeItems from "../components/items-life";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class LifeList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="portlifefolio" className="container">
                    <div className="section-title">
                        <SectionTitle title="Life" />
                    </div>
                    <LifeItems data={query} />
                    <Pagination
                        pathContext={this.props.pathContext}
                        type="life"
                    />
                </section>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    }
}

export default function({ data, pathContext }) {
    return (
        <Layout>
            <SEO lang="en" title="Life" />
            <LifeList datas={data} pathContext={pathContext} />
        </Layout>
    );
}

export const query = graphql`
    query lifeListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/life/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
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
`;
