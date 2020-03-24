import React from "react"


function Form(props) {
    const {setTeamList} = props;
    return (
        <form>
            <label for = "nameInput">Name: </label>
            <input type = "text" id = "nameInput" name = "name"/>
            <br/>
            <label for = "emailInput">Email: </label>
            <input type = "text" id = "emailInput" name = "email"/>
            <br/>
            <label for = "roleInput">Role: </label>
            <select id = "roleInput" name = "role">
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