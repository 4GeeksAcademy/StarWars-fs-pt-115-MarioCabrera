export const getPersonajes = async (dispatch) => {
    const response = await fetch('/api/characters?limit=45')
    const data = await response.json()
    dispatch({ type: "set_personajes", payload: data.content })
    
}
export const getStyles = async (dispatch) => {
    const response = await fetch("/api/combat-styles?limit=39")
    if (!response.ok){
        console.log(response.error);
        
    }
    const data = await response.json()
    dispatch({ type: "set_styles", payload: data.content })
}