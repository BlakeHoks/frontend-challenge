import {createContext, useState} from "react";
import {Outlet} from "react-router-dom";
import {IUserFavouritesContext} from "../../types/types.ts";

const defState = {
    favourites: ['']
}

export const UserFavouriteContext = createContext<IUserFavouritesContext>(defState)

export const ContextProvider = () => {
    const [favourites, setFavourites] = useState([''])

    return (
        <UserFavouriteContext.Provider value={{favourites, setFavourites}}>
            <Outlet/>
        </UserFavouriteContext.Provider>
    );
}