import MeetupDetails from "../../components/meetups/MeetupDetails";



const MeetupDetail = () => {
    return (
        <MeetupDetails />
    )
}

export async function getStaticPaths() {
    return {
        fallback: 'blocking',
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            { 
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params;
    console.log(meetupId);


    return {
        props: {
            meetupData: {
                image: 'https://imageio.forbes.com/specials-images/imageserve/5e5bacb7d378190007f4b3eb/Istanbul-views/0x0.jpg?fit=crop&format=jpg&crop=2121,1193,x0,y107,safe',
                id: meetupId,
                title: 'first meetup',
                address: 'Eminonu sahil, Istanbul',
                description: 'First Meeting in Istanbul'
            }
        }
    }
}

export default MeetupDetail;