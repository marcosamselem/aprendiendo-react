import PropTypes from 'prop-types'

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// ✅ Add PropTypes validation
Square.propTypes = {
  children: PropTypes.node, // Accepts any valid React children (string, element, etc.)
  isSelected: PropTypes.bool.isRequired, // Must be a boolean
  updateBoard: PropTypes.func.isRequired, // Must be a function
  index: PropTypes.number.isRequired // Must be a number
}
