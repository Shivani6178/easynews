import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url, author, date } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={!urlToImage ? "https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" : urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className={`btn btn-${this.props.mode}`}>Read More</a>
                    <div className="card-footer my-2">
                        <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
                    </div>
                </div>
            </div>
        )
    }
}
