import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Date from "../components/date";
import "../style/music-singlepage.less";
//  안쓰는 페이지
export default function({ data }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
                // image={data.markdownRemark.frontmatter.image.publicURL}
            />
            <div className="container">
                <article className="music-post">
                    {data.markdownRemark.frontmatter.banner != null 
                    // && (
                    //     <div className="banner">
                    //         <Img
                    //             fluid={
                    //                 data.markdownRemark.frontmatter.banner
                    //                     .childImageSharp.fluid
                    //             }
                    //         />
                    //     </div>
                    // )
                    }
                    <div className="head text-primary">
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        {/* <p className="post-date">
                            <Date data={data.markdownRemark.frontmatter.date} />
                        </p> */}
                    </div>
                    <div className="content row flex">
                        <div
                            className="col s12 m11 l10"
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html
                            }}
                        ></div>
                    </div>
                </article>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            id
            frontmatter {
                title
                artist
                genre
                
            }
        }
    }
`;

// image {
//     publicURL
//     childImageSharp {
//         fluid(maxWidth: 1000) {
//             srcSet
//             ...GatsbyImageSharpFluid
//         }
//     }
// }
// banner {
//     publicURL
//     childImageSharp {
//         fluid(maxHeight: 600, maxWidth: 1920) {
//             srcSet
//             ...GatsbyImageSharpFluid
//         }
//     }
// }