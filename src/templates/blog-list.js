import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import BlogItems from "../components/items-blog";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";
// blog -> it 
// contact -> music 
// portfolio -> life 
// blog 카테고리 내부 화면
class BlogList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="blog" className="container">
                    <div className="row">
                    <div className="categoryBar">
                            <div className="cat_1">
                                <a href="">WEB</a>
                                <div className="cat_2">
                                    <a href="">- JavaScript</a><br/>
                                    <a href="">- NodeJS</a><br/>
                                    <a href="">- React</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">MOBILE</a>
                                <div className="cat_2">
                                    <a href="">- Android</a><br/>
                                    <a href="">- React Native</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">Git</a>
                            </div>
                            <div className="cat_1">
                                <a href="">DEEP LEARNING</a>
                                <div className="cat_2">
                                    <a href="">- Image</a><br/>
                                    <a href="">- NLP</a><br/>
                                </div>
                            </div>
                            <div className="cat_1">
                                <a href="">ALGORITHMS</a>
                                <div className="cat_2">
                                    <a href="">- DP</a><br/>
                                    <a href="">- Search</a><br/>
                                </div>
                            </div>
                        </div>
                        <div className="posts">
                            <div className="section-title">
                                <SectionTitle title="IT"/>
                            </div>

                            <BlogItems data={query}/>
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
            <SEO lang="en" title="Blog"/>
            <BlogList datas={data} pathContext={pathContext}/>
        </Layout>
    );
}

export const query = graphql `
    query blogListPage($skip: Int!, $limit: Int!) {
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
