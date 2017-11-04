import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Api from './../../api';


// Props now contains one individual article
class ArticleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = {
      backgroundImage: 'url(' + this.props.article.urlToImage + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      height: '300px',
      width: '95%',
      borderRadius: '10px',
      margin: '15px auto 0'
    }

    let overlayStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      background: 'rgba(10, 24, 41, 0.5)',
      color: 'white'
    }

    let sourceNameStyle = {
      textTransform: 'uppercase'
    }

    let textWrapperStyle = {
      position: 'absolute',
      width: '85%',
      bottom: 0,
      textAlign: 'left',
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0'
    }

    let date
    let mydate = new Date(this.props.article.publishedAt);

    return (
      <div className="col-md-6 col-xs-12">
        <a href={this.props.article.url} target="_blank">
          <div style={imgStyle}>
            <div style={overlayStyle}>
              <div style={textWrapperStyle}>
                <h3 style={sourceNameStyle}>{this.props.article.source.name}</h3>
                <h4>{this.props.article.title}</h4>
                <h6>{this.props.article.description}</h6>
                <h6>{mydate.toDateString()}</h6>
              </div>
            </div>
          </div>
        </a>
    </div>
    )
  }
}



class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    Api.getArticlesFromSources(props.sources).then(articles => {
      console.log(articles);
      this.setState({
          articles: articles
      });
    });
  }

  componentWillMount() {
  }



  render() {

    return (
    <div>
      <NavBar />
      <div className="container">
          <div className="row">
              {
                this.state.articles.map(function(article){
                  return <ArticleView key={article.title} article={article} />;
                })
              }
        </div>
      </div>
    </div>
    )
  }
}

export default FeedPage;
