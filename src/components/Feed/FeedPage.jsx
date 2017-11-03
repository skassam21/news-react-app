import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';


// Props now contains one individual article
class ArticleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = {
      background: 'url(' + this.props.article.urlToImage + ') no-repeat center center',
      height: '200px',
      width: '100%',
      webkitBackgroundSize: 'cover',
      mozBackgroundSize: 'cover',
      oBackgroundSize: 'cover',
      backgroundSize: 'cover'
    }

    return (
      <li className="col-md-6 col-xs-12 life-content oddpost show">
      <div className="lifeimgcont">
        <a href={this.props.article.url}>
          <div style={imgStyle}
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="" sizes="(max-width: 510px) 100vw, 510px"></div> </a>
        <div className="eventdate"> <strong>15</strong> May </div>
      </div>
      <h4 className="evntheader"><a href="#"> {this.props.article.title} </a></h4>
      <article id="post-316" className="post-316 post type-post status-publish
        format-standard has-post-thumbnail hentry category-health
        category-inspiration tag-fitness tag-health tag-workout tag-workout-tip">
        <div className="entry-content">
          <p>{this.props.article.description}</p>
        </div>
      </article>
      </li>
    )
  }
}



class FeedPage extends Component {
  constructor(props) {
    super(props)
  }




  render() {

    return (
    <div>
      <NavBar />
      <div className="container">
          <div className="row">
            <ul id="lifegrid">
              {
                this.props.articles.map(function(article){
                  return <ArticleView article={article} />;
                })
              }

            </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default FeedPage;
