import React,{useState} from 'react';
import { useFormFields } from "../libs/hooksLib";
import "./SignUp.css";

export default function SignUp(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
   // favoriteAirport: ""
  });
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
     
      fields.email.length > 0 

    );
  }


async function handleSubmit(event){
  console.log(fields.email);
  event.preventDefault();

    setIsLoading(true);
    setNewUser("test");
    setIsLoading(false);
}
    return ( 
      <div>
      <form  className="Signup-email" onSubmit={handleSubmit}>
      <input
     
      id="email"
        type='email'
        placeholder="Email Address"
        value={fields.email}
        onChange={handleFieldChange}
      />
      <p/>
     <button
     className="Signup"
    disabled={!validateForm()}

        type="submit"
      > 
        Signup
      </button>
    </form>
</div>
  );

}

