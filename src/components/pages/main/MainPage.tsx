import {Header} from "../../layout/Header/Header.tsx"
import {TaskService} from '../../../services/cat.service.ts'
import {useInfiniteQuery} from "@tanstack/react-query"
import styles from './mainpage.module.css'
import {Card} from "../../layout/Card/Card.tsx";
import React, {useContext} from "react";
import {UserFavouriteContext} from "../../Providers/ContextProvider.tsx";

export const MainPage = () => {
    const {favourites,} = useContext(UserFavouriteContext)

    const {data, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ['cats'],
        queryFn: () => TaskService.get(),
        initialPageParam: 1,
        getNextPageParam: (_lastPage, pages) => {
            if (pages){
                return 1
            }
        },
        refetchOnMount: false,
    } )


    const handleNextPageBtn = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        fetchNextPage()
    }

    return <div className={styles.main}>
        <Header/>
        <div className={styles.container}>
            {data?.pages.map((page, index) => page.map((cat:any, i:number   ) => <Card url={cat.url} isLiked={favourites.includes(cat.url)} key={`${index}${i}`}/>))}
        </div>
        {isFetchingNextPage ? <p>Загружаем ещё котиков...</p> : <></>}
        <div className={styles.btnCont}>
            <button onClick={handleNextPageBtn} disabled={isFetchingNextPage}>Загрузить ещё котиков</button>
        </div>
    </div>
}