import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../style/list-music.less";

// Music 각 item을 담은 js file
class MusicItem extends React.Component {
    componentDidMount() {
        this.color = window
            .getComputedStyle(this.textSecondary, null)
            .getPropertyValue("color");
        calendar.setAttribute("fill", this.color);
    }

    render() {
        return (
            // blog list 블로그 리스트 grid 조절 
            // grid col sm 방식.
            <div className="item col s12 m4">
                <div className="box">
                    <div className="image">
                        <Img className="music_item_img"
                            fluid={
                                this.props.data.node.frontmatter.image
                                    .childImageSharp.fluid
                            }
                        />
                        <Link
                            to={this.props.data.node.fields.slug}
                            title={this.props.data.node.frontmatter.title}
                            aria-label={this.props.data.node.frontmatter.title}
                            className="overlay-link"
                            style={{ opacity: 0 }}
                        >
                            {this.props.data.node.frontmatter.title}
                        </Link>
                    </div>
                    <div className="content">
                        <h3 className="music-title">
                            <Link
                                to={this.props.data.node.fields.slug}
                                title={this.props.data.node.frontmatter.title}
                            >
                                {this.props.data.node.frontmatter.title}
                            </Link>
                        </h3>
                        <p className="music-artist">
                            {this.props.data.node.frontmatter.description}
                        </p>
                        <p
                            className="music-release"
                            ref={c => (this.textSecondary = c)}
                        >
                            <Date
                                data={this.props.data.node.frontmatter.date}
                            />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const data = props.data.allMarkdownRemark.edges;
    let items = [];
    data.forEach(function(e, i) {
        if (props.remove && e.node.id === props.remove) return;
        items.push(<MusicItem key={e.node.id} data={e} />);
    });
    return <div className="row">{items}</div>;
}
