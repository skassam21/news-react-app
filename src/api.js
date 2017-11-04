import _ from '../node_modules/underscore/underscore.js';

const BASE_URL = "https://newsapi.org";
const SOURCE_URL= BASE_URL + "/v1/sources";
const ARTICLE_URL = BASE_URL + "/v1/articles";
const LANGUAGE = 'en';
const API_KEY = '3d926c6b3c5644219e551d2db4050ec3';



var Api = {
  getNewsSources: function(limit) {

    return new Promise((resolve, reject) => {
      $.ajax({
        url: SOURCE_URL,
        data: {
          language: LANGUAGE
        },
        success: function(result) {
          if (result.sources) {
            if (limit) {
              resolve(result.sources.slice(0, limit));
            } else {
              resolve(result.sources);
            }
					} else {
						reject({'error': 'No sources found'});
					}
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  },
  getArticlesFromSource: function(source, sortBy, limit) {
    let params = {
      apiKey: API_KEY,
      source: source
    }
    if (sortBy) {
      params.sortBy = sortBy;
    }

    return new Promise((resolve, reject) => {
      $.ajax({
        url: ARTICLE_URL,
        data: params,
        success: function(result) {
          if (result.articles) {
              if (limit) {
                resolve(result.articles.slice(0, limit));
              } else {
                resolve(result.articles);
              }
					} else {
						reject({'error': 'No articles found'});
					}
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  },
  getArticlesFromSources: function(sources) {
    return new Promise((resolve, reject) => {
      let promises = [];
      for (let idx in sources) {
        promises.push(Api.getArticlesFromSource(sources[idx]));
      }
      promises.push(Api.getNewsSources());
      Promise.all(promises).then(values => {
        let newsSources = values[values.length - 1];
        let allArticles = values.slice(0, values.length - 1);
        let sourcesDict = {};
        for (let i in newsSources) {
          sourcesDict[newsSources[i].id] = newsSources[i];
        }
        let articles = [];
        for (let i in allArticles) {
          for (let j in values[i]) {
            let article = allArticles[i][j];
            article.source = sourcesDict[sources[i]];
            articles.push(article);
          }
        }

        resolve(_.shuffle(articles));
      }).catch(err => {
	      reject(err);
      });
    });
  }
}

export default Api;
