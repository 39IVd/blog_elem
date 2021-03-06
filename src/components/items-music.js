import React from "react";
import Img from "gatsby-image";
import "../style/list-music.less";

class MusicItem extends React.Component {
    // componentDidMount() {
    //     this.color = window
    //         .getComputedStyle(this.textSecondary, null)
    //         .getPropertyValue("color");
    // }

    render() {
        return (
            <div className="item col s2 m2">
                <div className="box">
                    <p className="genre">
                        {this.props.data.node.frontmatter.genre}
                    </p>
                    <div className="image">
                        <Img
                            className="music_item_img"
                            fluid={
                                this.props.data.node.frontmatter.image
                                    .childImageSharp.fluid
                            }
                        />
                    </div>
                    <div className="content">
                        <h3 className="text-primary">
                            {/* <Link
                                to={this.props.data.node.fields.slug}
                                title={this.props.data.node.frontmatter.title}
                            >
                                {this.props.data.node.frontmatter.title}
                            </Link> */}
                            {this.props.data.node.frontmatter.title}
                        </h3>
                        <p className="text-tertiary">
                            {this.props.data.node.frontmatter.artist}
                        </p>
                        {/* <p className="genre">
                            {this.props.data.node.frontmatter.genre}
                        </p> */}
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
