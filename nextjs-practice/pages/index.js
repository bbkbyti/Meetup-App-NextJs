
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";



const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {
    // fetch data from api
    
    const client = await MongoClient.connect('mongodb+srv://bbkbyti:0UvqGJe9ZzUrzIgg@cluster0.dnwbk.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}
export default HomePage;