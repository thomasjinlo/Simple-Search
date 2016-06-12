var styles = {

  welcomeForm: {
    position: 'absolute',
    top: '20%'
  },

  input: {
    width: '60%',
    margin: '0 auto'
  },

  logo: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1em'
  },

  keywordContainer: {
    width: '60%',
    margin: '0 auto',
    background: '#eec6a5'
  },

  keywords: {
    border: '1px solid black',
    display: 'inline-block',
    padding: '0.5em 1em 0.5em 1em',
    margin: '0.3em',
    float: 'left',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'black'
  },

  activeKeywords: {
    border: '1px solid red',
    display: 'inline-block',
    padding: '0.5em 1em',
    margin: '0.3em',
    float: 'left',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'red'
  },

  clearfix: {
    clear: 'both'
  },

  types: {
    display: 'inline-block',
    padding: '.2em .5em',
    border: '1px solid #333',
    margin: '1em'
  },

  activeType: {
    display: 'inline-block',
    padding: '.3em .6em',
    border: '2px solid #FF1919',
    fontWeight: '600px',
    color: '#FF1919',
    margin: '1em'
  },

  typesWrapper: {
    border: '1px solid #eee',
    margin: '0 auto'
  },

  titleContainer: {
    height: '7em'
  },

  keywordsTitle: {
    textTransform: 'Uppercase',
    fontWeight: '600px',
    font: '1.5em'
  },

  keywordsContainer: {
    padding: '10px',
    height: '300px',
    position: 'fixed'
  },

  summaryContainer: {
    textAlign:"left",
    textTransform: "capitalize",
    overflow: 'scroll',
    height: '100%'
  }
}

module.exports = styles;
