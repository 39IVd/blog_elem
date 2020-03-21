import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import BlogItems from "../components/items-blog";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";
import Categories from '../components/categories'
import "../style/list-blog.less";
import Bloglist from './blog-list';

// blog -> it contact -> music  -> life blog 카테고리 내부 화면
var passCat = "";
class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(catName) {
        passCat = catName;
    }
    render() {
        const query = this.props.datas; 
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="blog" className="container">
                    <Categories />
                    <div className="row">
                        <div className="categoryBar">
                            <div className="cat_1">
                                <Link to="./blog" onClick={() => this.handleClick("algorithm")}>ALGORITHM</Link>
                                {/* <div className="cat_2">
                                    <Link to="./blog" onClick={() => this.handleClick("DP")}>DP</Link>
                                    <Link to="./blog" onClick={() => this.handleClick("Search")}>Search</Link>
                                </div> */}
                            </div>
                            <div className="cat_1"> 
                                <Link to="./blog" onClick={() => this.handleClick("web")}>WEB</Link>
                                <div className="cat_2">
                                    <Link to="./blog" onClick={() => this.handleClick("javascript")}>JavaScript</Link>
                                    <Link to="./blog" onClick={() => this.handleClick("nodejs")}>NodeJS</Link>
                                    <Link to="./blog" onClick={() => this.handleClick("react")}>React</Link>
                                </div>
                            </div>
                            <div className="cat_1">
                                <Link to="./blog" onClick={() => this.handleClick("mobile")}>MOBILE</Link>
                                <div className="cat_2">
                                    <Link to="./blog" onClick={() => this.handleClick("android")}>Android</Link>
                                    <Link to="./blog" onClick={() => this.handleClick("reactnative")}>React Native</Link>
                                </div>
                            </div>
                            <div className="cat_1">
                                <Link to="./blog" onClick={() => this.handleClick("git")}>Git</Link>
                            </div>
                            <div className="cat_1">
                                <Link to="./blog" onClick={() => this.handleClick("deeplearning")}>DEEP LEARNING</Link>
                            </div>
                            <div className="cat_1">
                                <Link to="./blog" onClick={() => this.handleClick("blockchain")}>BLOCKCHAIN</Link>
                            </div>
                           
                        </div>
                        <div className="posts">
                            <div className="section-title">
                                <SectionTitle title="IT"/>
                            </div>

                            <BlogItems data={query} str={passCat} />
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
`;
