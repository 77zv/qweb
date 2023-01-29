import React, {useState} from 'react';

const ContactUs = () => {
    const [name, setName] = useState("Aidon");

    const changeName = () => {
        setName("Tony")
        setName("Tony")
    }

    return (
        <div>
            <h1>hello {name}</h1>
            <button onClick={changeName}>
                Click Me To Change The Name
            </button>
        </div>
    );
};

export default ContactUs;
