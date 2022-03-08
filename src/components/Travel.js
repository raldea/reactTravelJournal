function Travel(props) {
    console.log(props);

    return (
        <div className="travel-content">
            <div className="image-wrapper">
                <div className="image-wrapper-inner" style={{backgroundImage: `url(${props.img})`}} />
            </div>
            <div className="content-wrapper">
                <div className="location">
                    <div className="country">{props.country}</div>
                    <div className="google-maps"><a href={props.googleMapUrl} target="_blank">View on Google Maps</a></div>
                </div>
                <div className="name"><h3>{props.title}</h3></div>
                <div className="date">{props.date.start} - {props.date.end}</div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}

export default Travel;