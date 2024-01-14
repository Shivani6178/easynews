import React, { Component } from 'react';
import defaultImage from '../images/default.jpg';

export default class NewsItem extends Component {
    truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    render() {
        const { title, description, urlToImage, url, author, date } = this.props;

        const truncatedTitle = this.truncateText(title, 50);
        const truncatedDescription = this.truncateText(description, 150); 
        const cardStyle = {
            width: '20rem',
            height: '30rem',
            marginBottom: '1rem',
        };

        const imageStyle = {
            height: '200px', // Set your desired fixed height for the image
            objectFit: 'cover', // Adjust the object-fit property as needed
        };
        return (
            <div className="card" style={cardStyle}>
                <img src={!urlToImage ? defaultImage : urlToImage} className="card-img-top" alt="..." style={imageStyle} />
                <div className="card-body">
                    <h5 className="card-title">{truncatedTitle}...</h5>
                    <p className="card-text">{truncatedDescription}...</p>
                    <a href={url} className={`btn btn-${this.props.mode}`}>Read More</a>
                    <div className="card-footer my-2">
                        <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
                    </div>
                </div>
            </div>
        );
    }
}
