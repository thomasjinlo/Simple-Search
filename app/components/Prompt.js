var React = require('react');
var styles = require('../styles');

var clickedFitlers = [];

function toggleFilters (entities, element) {
  if (entities.includes(element)) {
    return styles.activeKeywords
  } else {
    return styles.keywords
  }
}

function Prompt (props) {
  return (
    <div className="text-center" style={styles.welcomeForm}>
      <h1 style={styles.header}>SIMPLE SEARCH</h1>
      <h3 style={styles.subheader}>A BETTER WAY TO RESEARCH</h3>
      <form className="input-group" onSubmit={props.onSubmitUrl} style={styles.input}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by pasting in an article URL"
          value={props.urlString}
          onChange={props.onUpdateUrl}  />
        <span className="input-group-btn">
          <button className="btn btn-default glyphicon glyphicon-search">
          </button>
        </span>
      </form>

      <br />
      <h5 style={styles.filter}>FILTER BY CATEGORIES</h5>
      <div style={styles.keywordContainer}>
        {props.entity_types.map((element) => {
          return <a href="#" style={toggleFilters(props.selectedEntities, element)} onClick={props.toggleKeyword.bind(this, element)}>{element}</a>
        })}
        <div style={styles.clearfix} />
      </div>


      <div>
      </div>
    </div>
  )
}

module.exports = Prompt;
