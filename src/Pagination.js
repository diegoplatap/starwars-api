function Pagination({ page, handlePrevious, handleNext }) {
  return (
    <div className="changePage">
      <button
        className="button"
        disabled={page === 1 ? true : false}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {page}
      <button className="button" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination