var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      urlString: '',
      entity_types: [
        'people_eng',
        'places_eng',
        'companies_eng',
        'organizations',
        'languages',
        'drugs_eng',
        'professions',
        'universities',
        'profanities',
        'films',
        'address_au',
        'address_ca',
        'address_de',
        'address_es',
        'address_fr',
        'person_fullname_eng',
        'person_name_component_eng',
        'pil',
        'pil_ext',
        'medical_conditions'
      ],
      selectedEntities: []
    }
  },

  handleUpdateUrl (e) {
    this.setState({
      urlString: e.target.value
    })
  },

  handleSubmitUrl (e) {
    e.preventDefault();
    var urlString = this.state.urlString;
    this.setState({
      urlString: ''
    });

    this.context.router.push({
      pathname: '/results',
      query: {
        urlString: urlString,
        entities: this.state.selectedEntities
      }  
    });
  },

  toggleKeyword (entity) {
    var entities = this.state.selectedEntities;

    entities.includes(entity) ? entities.splice(entities.indexOf(entity), 1) : entities.push(entity);
    this.setState({
      selectedEntities: entities
    })
  },

  render () {
    return (
      <Prompt
        urlString={this.state.urlString}
        entity_types={this.state.entity_types}
        toggleKeyword={this.toggleKeyword}
        onUpdateUrl={this.handleUpdateUrl}
        onSubmitUrl={this.handleSubmitUrl}
        selected />
    )
  }
})

module.exports = PromptContainer;
