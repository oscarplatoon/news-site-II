function ArticleTeaser(props) {

  const handleClick = (event) => {
    event.preventDefault()
    props.handleTitleClick(props.id)
  }

  return (
    <div>
      <div className='link'>
        <a href='#' onClick={ handleClick }>
          {props.title}
        </a>
        <p>
          { props.created_date }
        </p>
      </div>
    </div>
  )
}

export default ArticleTeaser;

// The `ArticleTeaser`
// component should:
//   1. Display the `title`
// inside of an `<a>`
// tag.
// 2. When the `title`
// `<a>`
// tag is clicked, it should call `this.props.handleTitleClick(this.props.id);`.Will arrow functions be useful here ?
//   3. Display the `created_date` in a `<p>`
// tag.
