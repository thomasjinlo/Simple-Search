var React = require('react');
var styles = require('../styles');

function Prompt (props) {
  return (
    <div className="text-center" style={styles.welcomeForm}>
      <h1>Better Research</h1>
      <form className="input-group" onSubmit={props.onSubmitUrl} style={styles.input}>
        <input
          type="text"
          className="form-control"
          placeholder="url"
          value={props.urlString}
          onChange={props.onUpdateUrl}  />
        <span className="input-group-btn">
          <button className="btn btn-default glyphicon glyphicon-search">
          </button>
        </span>
      </form>

      <br />
      <div style={styles.keywordContainer}>
        {props.entity_types.map((element) => {
          return <div style={styles.keywords} onClick={props.toggleKeyword.bind(this, element)}>{element}</div>
        })}
        <div style={styles.clearfix} />
      </div>

      <h2>Selected Filters</h2>

      <div>
      </div>
    </div>
  )
}

module.exports = Prompt;
