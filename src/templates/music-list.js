import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import BlogItems from "../components/items-blog";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";
// blog -> it contact -> music portfolio -> life blog 카테고리 내부 화면
class MusicList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="blog" className="container">
                    <div className="row">
                        <div className="posts">
                            <div className="section-title">
                                <SectionTitle title="Music"/>
                            </div>
                            <MusicItems data={query}/>
                            <Pagination pathContext={this.props.pathContext} type="blog"/>
                        </div>

                    </div>

                </section>
            );

        } else {
            return <React.Fragment></React.Fragment>;
        }

    }

}

export default function ({data, pathContext}) {
    return (
        <Layout>
            <SEO lang="en" title="Music"/>
            <MusicList datas={data} pathContext={pathContext}/>
        </Layout>
    );
}

export const query = graphql `
    query musicListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
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
