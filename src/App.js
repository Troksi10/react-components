import "./App.css";
import Avatar from "./components/Avatar";
import Card from "./components/Cards";
import contacts from "./components/Contacts";

function createCard(contact) {
  return (
    <Card
      id = {contact.id}
      key = {contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://media-exp1.licdn.com/dms/image/C4D03AQF3Yy3pMnhMNQ/profile-displayphoto-shrink_200_200/0/1659378992368?e=2147483647&v=beta&t=cXcDBHc8YHnQ87aRZ8IZ6BLtWppWmLSS2yik-LK9u14"
        alt="troksi"
      />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
