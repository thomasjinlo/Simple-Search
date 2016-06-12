var React = require('react');
var api_service = require('../utils/api_service');
var Concept = require('../components/Concept');

var ResultsContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      concepts: [],
      isLoading: true
    }
  },

  componentDidMount() {
    var query = this.props.location.query;

    api_service.getConcepts(query.urlString, query.entities)
      .then((concepts) => {
        this.setState({
          concepts: concepts,
          isLoading: false
        })
      })
  },

  render () {
    return (
      <Concept
        isLoading={this.state.isLoading}
        concepts={this.state.concepts} />
    )
  }
})

module.exports = ResultsContainer;
