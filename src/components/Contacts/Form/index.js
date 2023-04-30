import {useState,useEffect} from 'react'


const initialFormValues = {fullname: "",phone_number:""};
function Form({addcontact,contacts}) {
    
    const [form,setForm] = useState({initialFormValues});
  
    useEffect(() => {
        setForm({initialFormValues});
    },[contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.firstname === "" || form.phone_number === "") {
            return false;
        }

        addcontact([...contacts,form]);


        
    };

    return (
    <form onSubmit={onSubmit}>
    <div>
        <input name='first-name' value={form.firstname} placeholder='Firstname' onChange={onChangeInput}/>
    </div>

    <div>
        <input name='phone-number' value={form.phone_number} placeholder='Phone number'/>
    </div>
    <div className='btn'>
        <button onClick={onSubmit}>Add</button>
    </div>
    </form>
  )
}

export default Form;