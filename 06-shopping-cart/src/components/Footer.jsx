import './Footer.css'

export const Footer = ({filters}) => {

  return (
    <footer className='footer'>
        {/* <h4>Prueba Tecnica con React ⚛️ - <span>@RenatoRomo</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5> */}
        {/* {
            JSON.stringify(filters, null, 2)
        } */}
        <h5>Category: {filters.category}</h5> <h5>Min Price: {filters.minPrice}</h5>
    </footer>
  )
}
