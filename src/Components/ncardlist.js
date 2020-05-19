import React from 'react';
import Ncard from './ncard'

const Cardlist = ({ news })=>{
    if(!news){
        return(
            <div>
                <h1>We also provide News Update</h1>
            </div>
        )
    }
    else{
        const cardComponent = news.articles.map((data , i)=>{
            return (<Ncard name = {news.articles[i].source.name} 
                author = {news.articles[i].author}
                title = {news.articles[i].title}
                content = {news.articles[i].content}
                url = {news.articles[i].url}
                publishedAt = {news.articles[i].publishedAt}
                />)
        })
        return(
            <div>
                <h1 className = "tc">Latest headlines in this region</h1>
                {cardComponent}
            </div>
        )
    }
}

export default Cardlist;