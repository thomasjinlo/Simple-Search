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
      isLoading: true,
      keywords: []
    }
  },

  componentDidMount() {
    console.log(this.props.location)
    var state = this.props.location.state;

    api_service.getConcepts(state.urlString, state.entities)
      .then((concepts) => {
        this.setState({
          concepts: concepts,
          isLoading: false
        })
      })
    api_service.getSentiment()
  },

  handleClickType (keywords, idx) {

    api_service.getSummaries(keywords)
      .then((summaries) => {
        this.setState({
          keywords: summaries
        })
      })

      var concepts = this.state.concepts

      concepts.forEach((element, index) => {
        if (element.active) {
          element.active = false;
        }
        if (index === idx) {
          element.active = true;
        }
      })

      this.setState({
        concepts: concepts
      })
      console.log(this.state.concepts)
  },

  render () {
    return (
      <Concept
        isLoading={this.state.isLoading}
        concepts={this.state.concepts}
        onClickType={this.handleClickType}
        keywords={this.state.keywords} />
    )
  }
})

module.exports = ResultsContainer;
