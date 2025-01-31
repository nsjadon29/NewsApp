import React, { useState, useEffect} from "react";
import NewsItem from "./NewsItem";

const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  // document.title=`${this.capitalize(props.category)} - Current News`

  const capitalize=(word)=> {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    } 

    
    const updateNews= async()=>{
      let url=`https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&apikey=2d56da4e4daab5a703197256464cc7a9`;
    let data= await fetch(url);
    let parsedData= await data.json() 
    console.log(parsedData)
    setArticles(parsedData.articles)
    }

    useEffect(() => {
      updateNews();
    },[props.category])


  // const handlePrev= async()=>{
  //   updateNews();
  //   setPage(page-1)
  // }

  // const handleNext= async()=>{
  //   updateNews();
  //   setPage(page+1)
  // }
    return (
     
      <div className="container my-3">
        <h1 className="text-center ">News Top headlines on {capitalize(props.category)}</h1>
        <div className="row">
        {articles?.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.image}
              newsUrl={element.source.url} 
              author={element.source.name}  
              date={element.publishedAt}
            />
          </div>})}
        </div>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={page<=1 }type="button" className="btn btn-dark" onClick={handlePrev}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button> */}
        {/* </div> */}
      </div>
    );
}

export default News;
