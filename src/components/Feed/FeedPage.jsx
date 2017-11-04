import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Api from './../../api';


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
      margin: '10px auto 10px'
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
      bottom: '10px',
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

class LoadingView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="spinner-wrapper">
            <div className="bubblingG">
                <span id="bubblingG_1"></span>
                <span id="bubblingG_2"></span>
                <span id="bubblingG_3"></span>
            </div>
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
  }

  componentDidMount() {
    Api.getArticlesFromSources(this.props.sources).then(articles => {
      if (articles) {
        this.setState({
            articles: articles
        });
      } else {
        this.setState({
            articles: null
        });
      }
    });
  }



  render() {

    let view = null;

    if (this.state.articles.length > 0) {
      view = (<div className="container">
          <div className="row" style={{paddingTop: '70px'}}>
              {
                this.state.articles.map(function(article){
                  return <ArticleView key={article.title} article={article} />;
                })
              }
        </div>
      </div>)
    } else {
      view = <LoadingView />;
    }

    return (
    <div>
      <NavBar />
      {view}
    </div>
    )
  }
}

export default FeedPage;
