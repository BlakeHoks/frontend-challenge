import {Header} from "../../layout/Header/Header.tsx"
import {TaskService} from '../../../services/cat.service.ts'
import {useInfiniteQuery} from "@tanstack/react-query"
import styles from './mainpage.module.css'
import {Card} from "../../layout/Card/Card.tsx";
import React from "react";

export const MainPage = () => {

    const {data, fetchNextPage} = useInfiniteQuery({
        queryKey: ['cats'],
        queryFn: () => TaskService.get(),
        initialPageParam: 1,
        getNextPageParam: (_lastPage, pages) => {
            if (pages){
                return 1
            }
        }
    } )

    const handleNextPageBtn = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        fetchNextPage()
    }

    return <div className={styles.main}>
        <Header/>
        <div className={styles.container}>
            {data?.pages.map((page, index) => page.map((cat:any, i:number   ) => <Card url={cat.url} isLiked={false} key={`${index}${i}`}/>))}
        </div>
        <div className={styles.btnCont}>
            <button onClick={handleNextPageBtn}>Загрузить ещё котиков</button>
        </div>
    </div>
}