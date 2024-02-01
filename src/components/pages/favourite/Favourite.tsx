import {Header} from "../../layout/Header/Header.tsx"
import {useContext} from "react"
import {UserFavouriteContext} from "../../Providers/ContextProvider.tsx"
import {Card} from "../../layout/Card/Card.tsx"
import styles from './favourite.module.css'

export const Favourite = () => {
    const {favourites} = useContext(UserFavouriteContext)

    const nullCheck = (cat: string, i: number) => {
        if (cat){
            return <Card url={cat} isLiked={true} key={`${i}_${cat.slice(-7, -4)}`}/>
        }
    }

    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.container}>
                {favourites.map((cat, i) => nullCheck(cat, i))}
            </div>
        </div>
    )
}