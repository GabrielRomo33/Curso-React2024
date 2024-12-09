let Habilitados = []


export const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    if(index>=35 || Habilitados.includes(index)){
        Habilitados.push(index - 7);
        updateBoard(index);
      }
    }
    
    return(
      <div onClick={handleClick}
      className={className}>
          {children}
        </div>
      );
    }

export const ResetHabilitados = () => {
  Habilitados = []
}

