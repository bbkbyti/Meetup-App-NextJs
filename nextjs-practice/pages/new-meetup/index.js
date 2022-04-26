import NewMeetupForm from "../../components/meetups/NewMeetupForm";


const NewMeetupPage = () => {

    const addMeetupHandler = (newData) => {
        console.log(newData);
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetupPage;