var axios = require('axios');
var entityURI = "https://api.havenondemand.com/1/api/sync/extractentities/v2?";
var relatedConceptsURI = "https://api.havenondemand.com/1/api/async/findrelatedconcepts/v1?"
var findSimilarURI = "https://api.havenondemand.com/1/api/sync/findsimilar/v1?"

var key = '73177e0c-136f-450d-bc5c-180df6b09b16'

function getEntities(url, entities) {
  var encodedUrl = encodeURI(url);
  return axios.get(entityURI,
    {
      params: {
        url: encodedUrl,
        entity_type: entities,
        apikey: key
      }
    }
  ).then((response) => {
    return response.data.entities
  })
}

function getRelatedConcepts(entities) {
  return axios.all(entities.map((entity) => {
    return axios.get(relatedConceptsURI,
      {
        params: {
          text: entity,
          max_results: 4,
          apikey: key
        }
      }
    ).then((response) => {
      return { type: entity, jobId: response.data.jobID }
    })
  }))
  .then((concepts) => {
    return axios.all(concepts.map((obj) => {
      return axios.get('https://api.havenondemand.com/1/job/result/' + obj.jobId + '?' + 'apikey=' + key)
        .then((jobObj) => {
          return { type: obj.type, keywords: jobObj.data.actions[0].result.entities.map((obj) => {
            return obj.text
          }) }
        })
    })).then((concepts) => {
      return concepts
    })
  })
}

function findSimilar(keyword) {
  return axios.get(findSimilarURI,
    {
      params: {
        summary: 'concept',
        text: keyword,
        min_score: 60,
        absolute_max_results: 1,
        apikey: key
      }
    }
  ).then((summary) => {
    return summary.data.documents[0].summary
  })
}

function getBlurbs(keywords) {
  return axios.all(keywords.map((keyword) => {
    return findSimilar(keyword)
      .then((summary) => {
        return { keyword: keyword, summary: summary }
      })
  }))
  .then((summaries) => {
    return summaries
  })
}

function getSentiment() {
  var sent_url = 'http://www.huffingtonpost.com/richard-bangs/richards-picks-ten-best-w_b_6220912.html'
  var sent_api = 'https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?'
  axios.get(sent_api + 'apikey=' + key + '&url=' + sent_url)
    .then((response) => {
        console.log("hello", response);
        console.log(response['data']['aggregate']['sentiment'])
      })
}

// Module

var helpers = {
  getConcepts(url, entities) {
    return getEntities(url, entities)
      .then((response) => {
        return response.map((obj) => {
          return obj['normalized_text']
        })
      })
      .then((entities) => {
        return getRelatedConcepts(entities)
          .then((concepts) => {
            console.log(concepts)
            return concepts
          })
      })
    },

  getSummaries(keywords) {
    return getBlurbs(keywords)
      .then((summaries) => {
        return summaries
      })
  },
  getSentiment() {
    getSentiment()
  }

}

module.exports = helpers;
