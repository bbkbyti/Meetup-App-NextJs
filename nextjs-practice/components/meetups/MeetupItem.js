

// each meetup item has : title, image, address, and a description. and a show detail button in the end.

const MeetupItem = (props) => {
    return (
        <>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
            </div>
        </>
    )
}
export default MeetupItem;