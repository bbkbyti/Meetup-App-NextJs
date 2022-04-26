import MeetupList from "../components/meetups/MeetupList";


const dummy_meetups = [
    {
        id: 'm1',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5e5bacb7d378190007f4b3eb/Istanbul-views/0x0.jpg?fit=crop&format=jpg&crop=2121,1193,x0,y107,safe',
        title: 'Istanbul 1',
        address: 'Eminonu Sahil, Istanbul',

    },
    {
        id: 'm2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6c9GW2jHazP5aIBoytpvR5T-pZluFTA0yqZIYa-cnA_XwudkufmhzM_AvUA_ACYRtB8&usqp=CAU',
        title: 'Istanbul 2',
        address: 'Eyup, Istanbul',

    },

]

const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: dummy_meetups
        },
        revalidate: 1
    }
}
export default HomePage;