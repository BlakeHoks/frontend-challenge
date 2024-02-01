import {ICatCard} from "../../../types/types.ts"
import styles from './card.module.css'
import {useContext, useState} from "react"
import {UserFavouriteContext} from "../../Providers/ContextProvider.tsx"
import {clsx} from "clsx"


export const Card = ({url, isLiked}: ICatCard) => {
    const {favourites, setFavourites} = useContext(UserFavouriteContext);
    const [liked, setLiked] = useState(isLiked)

    const handleHeartClick = () => {
        if (!liked){
            setFavourites([...favourites, url])
        } else
            setFavourites(favourites.filter(a => a !== url))
        setLiked(prev => !prev)
    }

    return (
        <div className={styles.box}>
            <img alt='a cat' src={url}/>
            <span onClick={handleHeartClick} className={clsx({[styles.icon]: true, [styles.liked]: liked})}></span>
        </div>
    )
}