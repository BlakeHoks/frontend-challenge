import {ICatCard} from "../../../types/types.ts"
import styles from './card.module.css'
import {useContext, useState} from "react"
import {UserFavouriteContext} from "../../Providers/ContextProvider.tsx"
import {clsx} from "clsx";


export const Card = ({url, isLiked}: ICatCard) => {
    const {favourites, setFavourites} = useContext(UserFavouriteContext);
    const [liked, setLiked] = useState(isLiked)
    const handleHeartClick = () => {
        if (liked){
            setFavourites(favourites.filter(a => a !== url))
        } else {
            setFavourites([...favourites, url])
        }
        setLiked(!liked)
    }
    console.log(liked, favourites)

    return (
        <div className={styles.box}>
            <img alt='a cat' src={url}/>
            <span onClick={handleHeartClick} className={clsx({[styles.icon]: true, [styles.liked]: liked || isLiked})}></span>
        </div>
    )
}