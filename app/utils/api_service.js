var axios = require('axios');
var entityURI = "https://api.havenondemand.com/1/api/sync/extractentities/v2?";
var relatedConceptsURI = "https://api.havenondemand.com/1/api/async/findrelatedconcepts/v1?"

var key = '73177e0c-136f-450d-bc5c-180df6b09b16'

function getEntities(url, entities) {
  console.log(entities)
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
          max_results: 5,
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
    }
}

module.exports = helpers;
