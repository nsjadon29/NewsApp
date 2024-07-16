import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      loading:false,
      page:1,
      //pageSize: 20
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=169dadfa6e7a45d393942dc5a1099cea&pageSize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData= await data.json() 
    console.log(parsedData)
    this.setState({articles:parsedData.articles})

  }

  handlePrev= async()=>{
    console.log("prev")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=169dadfa6e7a45d393942dc5a1099cea&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData)

    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }

  handleNext= async()=>{
    console.log("next")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=169dadfa6e7a45d393942dc5a1099cea&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData= await data.json() 
    console.log(parsedData)

    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
    })
  }

  render() {

    return (
     
      <div className="container my-3">
        <h1 className="text-center">News Top headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}    
            />
          </div>})}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1 }type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
