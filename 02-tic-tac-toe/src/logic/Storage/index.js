export const SaveGameStorage = ({Board, Turn}) => {
    //Guardar Partida
    window.localStorage.setItem('Board', JSON.stringify(Board));
    window.localStorage.setItem('Turn', Turn);
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('Board');
    window.localStorage.removeItem('Trun');
}

// export const saveHabilitados = ({Habilitados}) => {
//     window.localStorage.setItem('Habilitados', Habilitados);
// }

// export const resetHabilitados = () => {
//     window.localStorage.removeItem('Habilitados');
// }