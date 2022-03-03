import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=7aa180ddc31c4336a299e48f9471a278&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(50);
        let parasedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parasedData.articles, 
            totalResults: parasedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=7aa180ddc31c4336a299e48f9471a278&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true })
        let data = await fetch(url);
        let parasedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parasedData.articles), 
            totalResults: parasedData.totalResults,
            loading: false
        })
    }

    // handleNextPage = async () => {
    //     console.log('Next');
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
    //         document.querySelector('.next-btn').disabled = true;
    //     } else {
    //         this.setState({ page: this.state.page + 1 });
    //         this.updateNews();

    //     }
    // }

    // handlePreviousPage = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <>
                <h2 className='text-center' style={{margin: '30px',marginTop:'70px'}}>{`NewsRapid - Top ${this.capitalizeFirstLetter(this.props.category)} News Headlines`}</h2>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    style={{overflow:'hidden'}}
                >
                    <div className='container my-3'>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.title}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} mode={this.props.mode} />
                            </div>
                        })}
                    </div>
                    </div>

                </InfiniteScroll>
                {/* <div className='d-flex justify-content-between my-3'>
<button disabled={this.state.page<=1} type="button" className={`btn btn-${this.props.mode}`} onClick={this.handlePreviousPage}>Previous</button>
<button type="button" className={`btn btn-${this.props.mode} next-btn`} onClick={this.handleNextPage}>Next</button>
</div> */}
            </>

        )
    }
}
