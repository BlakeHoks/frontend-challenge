export interface ICatCard {
    url: string,
    isLiked: boolean
}

export interface IUserFavouritesContext {
    favourites: string[],
    setFavourites: (arr: string[]) => void
}