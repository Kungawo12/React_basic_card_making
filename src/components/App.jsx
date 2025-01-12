import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCared(contact){
  return(
    <Card 
      id = {contact.id}
      key = {contact.id}
      name = {contact.name}
      img = {contact.imgURL}
      tel = {contact.phone}
      email = {contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img = "https://media.licdn.com/dms/image/v2/D5603AQHcvv1E3t-QbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711396184384?e=1742428800&v=beta&t=IAj8L6Qt-W-7-YaUGUGyuLNNJjUKFVFGAMdv7zvrYSE"
      />
      {contacts.map(createCared)}

      {/* {contacts.map((contact,index) =>(
      <Card 
        key= {index}
        name = {contact.name}
        img = {contact.imgURL}
        tel = {contact.phone}
        email = {contact.email}
      />
      // ))} */}
    </div>
  );
}

export default App;
