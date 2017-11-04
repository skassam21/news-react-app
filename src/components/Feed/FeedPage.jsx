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

class SourceView extends Component {
  constructor(props) {
    super(props);

    this.selectSource = () => this._selectSource();
  }

  _selectSource() {
    this.props.onSelectSource(this.props.source);
  }

  render() {
    let checked = true;
    if ($.inArray(this.props.source.id, this.props.selectedSources) < 0) {
      checked = false;
    }
    return (
      <div className="checkbox">
        <label><input type="checkbox" value={this.props.source.id} defaultChecked={checked} onChange={this.selectSource}></input>{this.props.source.name}</label>
      </div>
    )
  }
}


class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      sources: [],
      selectedSources: []
    }

    this.onSelectSource = (selectedSource) => this._onSelectSource(selectedSource);
    this.fetchArticles = (selectedSources) => this._fetchArticles(selectedSources);
  }

  _fetchArticles(selectedSources) {
    // Get the articles
    Api.getArticlesFromSources(selectedSources).then(articles => {
      console.log(articles.length);
      if (articles.length > 0) {
        this.setState({
            articles: articles,
            selectedSources: selectedSources
        });
      } else {
        // Get the default sources
        let selectedSources = ['bbc-news', 'techcrunch', 'business-insider', 'google-news'];
        Api.getArticlesFromSources(selectedSources).then(articles => {
          this.setState({
              articles: articles,
              selectedSources: selectedSources
          });
        });
      }
    });
  }

  componentDidMount() {
    let selectedSources = this.props.sources;
    if (selectedSources.length === 0) {
      selectedSources = ['bbc-news', 'techcrunch', 'business-insider', 'google-news'];
    }

    this.fetchArticles(selectedSources);

    // Get the sources
    Api.getNewsSources().then(sources => {
      this.setState({
        sources
      });
    });
  }


  _onSelectSource(selectedSource) {
    let newSelectedSources = [];
    let inArray = false;
    for (let i = 0; i < this.state.selectedSources.length; i++) {
      if (this.state.selectedSources[i] != selectedSource.id) {
        newSelectedSources.push(this.state.selectedSources[i]);
        console.log(newSelectedSources);
      } else {
        inArray = true;
      }
    }

    if (!inArray) {
      newSelectedSources.push(selectedSource.id);
    }

    console.log(newSelectedSources);

    this.fetchArticles(newSelectedSources);
  }



  render() {

    let onSelect = this.onSelectSource;
    let selectedSources = this.state.selectedSources;

    return (
    <div>
      <NavBar openSettings={this.openSettings} />
      <div className="container">
          <div className="row" style={{paddingTop: '70px'}}>
              {
                this.state.articles.map(function(article){
                  return <ArticleView key={article.title + article.source.id} article={article} />;
                })
              }
        </div>
      </div>
      <div id="settingsModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Manage your subscriptions</h4>
            </div>
            <div className="modal-body">
              {
                this.state.sources.map(function(source) {
                  return <SourceView key={source.id} source={source}
                    onSelectSource={onSelect} selectedSources={selectedSources}/>;
                })
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}

export default FeedPage;
