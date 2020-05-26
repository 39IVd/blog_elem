import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Date from "./date";
import { Calendar } from "./icons";
import "../style/list-blog.less";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";
// 블로그 각 item을 담은 js file
class BlogItem extends React.Component {
    componentDidMount() {
        this.color = window
            .getComputedStyle(this.textSecondary, null)
            .getPropertyValue("color");
        const calendar = this.textSecondary.querySelector("path");
        calendar.setAttribute("fill", this.color);
    }

    render() {
        var cats = this.props.data.node.frontmatter.categories + "";

        cats = cats.replace(",", " > ");
        let disqusConfig = {
            url: `${"https://paigelee.netlify.com" +
                this.props.data.node.fields.slug}`,
            identifier: this.props.data.node.id,
            title: this.props.data.node.frontmatter.title
        };
        return (
            // blog list 블로그 리스트 grid 조절
            // grid col sm 방식.
            <div className="item col s12 m1">
                <div className="box">
                    <Link
                        to={this.props.data.node.fields.slug}
                        title={this.props.data.node.frontmatter.title}
                        aria-label={this.props.data.node.frontmatter.title}
                        className="overlay-link"
                        style={{ opacity: 0 }}
                    >
                        <div className="image">
                            <Img
                                className="blog_item_img"
                                fluid={
                                    this.props.data.node.frontmatter.image
                                        .childImageSharp.fluid
                                }
                            />
                        </div>
                    </Link>

                    <Link
                        to={this.props.data.node.fields.slug}
                        title={this.props.data.node.frontmatter.title}
                        className="overlay-link"
                    >
                        <div className="content">
                            <h3 className="text-primary">
                                {this.props.data.node.frontmatter.title}
                                {/* <Link
                                    to={this.props.data.node.fields.slug}
                                    title={
                                        this.props.data.node.frontmatter.title
                                    }
                                ></Link> */}
                            </h3>
                            <p className="text-tags">{cats}</p>
                            <p className="min-read">
                                {this.props.data.node.timeToRead} min read
                            </p>
                            <p
                                className="date text-secondary"
                                ref={c => (this.textSecondary = c)}
                            >
                                <span className="icon">
                                    <Calendar />
                                </span>
                                <Date
                                    data={this.props.data.node.frontmatter.date}
                                />
                                {/* <CommentCount
                                    className="commentCount"
                                    config={disqusConfig}
                                    placeholder={"..."}
                                /> */}
                            </p>
                            <p className="excerpt text-primary">
                                {this.props.data.node.excerpt.slice(0, 100)}...{" "}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const data = props.data.allMarkdownRemark.edges;
    let items = [];
    const category = props.str;
    // alert(category)
    data.forEach(function(e, i) {
        if (props.remove && e.node.id === props.remove) return;
        // alert(e.node.frontmatter.categories);
        // if(e.node.frontmatter.categories.includes(category)) {
        //     items.push(<BlogItem key={e.node.id} data={e} />);
        // }
        // if(category in e.node.frontmatter.categories) {

        // }
        // alert(e.node.frontmatter.categories)
        var cat = e.node.frontmatter.categories + "";
        if (category == "all") {
            items.push(<BlogItem key={e.node.id} data={e} />);
        } else {
            if (cat.includes(category)) {
                items.push(<BlogItem key={e.node.id} data={e} />);
            }
        }
    });
    return <div className="row">{items}</div>;
}
