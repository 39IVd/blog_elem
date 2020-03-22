import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import MusicItems from "../components/items-music";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";
class MusicList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="music" className="container">
                    <div className="row">
                        <div className="posts">
                            <div className="section-title">
                                <SectionTitle title="Music"/>
                            </div>

                            <MusicItems data={query}/>
                            <Pagination pathContext={this.props.pathContext} type="music"/>
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
    query musicListPage {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/music/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 24
            skip: 0
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
`;
