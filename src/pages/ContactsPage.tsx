import PageTitle from "../components/UI/PageTitle/PageTitle.tsx";
import Contacts from "../components/Contacts/Contacts.tsx";
import LargeSquare from "../components/UI/Squares/LargeSquare/LargeSquare.tsx";

function ContactsPage() {
    return <div className={'flex flex-col gap-10'}>
        <PageTitle title={'pageTitles.contacts.title'} description={'pageTitles.contacts.description'}/>
        <LargeSquare styles={'right-0 border-r-0 top-30'}/>
        <Contacts/>
        <LargeSquare styles={'left-0 border-l-0 top-100'}/>
    </div>
}

export default ContactsPage;
