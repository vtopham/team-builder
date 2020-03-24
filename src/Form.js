import React from "react"


function Form(props) {
    const {setTeamList, formInput, setFormInput} = props

    const updateForm = event => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })
    }


    return (
        <form>
            <label htmlFor = "nameInput">Name: </label>
            <input onChange = {updateForm} type = "text" id = "nameInput" name = "name" value = {formInput.name} />
            <br/>
            <label htmlFor = "emailInput">Email: </label>
            <input onChange = {updateForm} type = "text" id = "emailInput" name = "email" value = {formInput.email} />
            <br/>
            <label htmlFor = "roleInput">Role: </label>
            <select onChange = {updateForm} id = "roleInput" name = "role" value = {formInput.role} >
                <option value = "Communist Spy">Communist Spy</option>
                <option value = "Ascended Being">Ascended Being</option>
                <option value = "Reincarnated Worm">Reincarnated Worm</option>
            </select>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form