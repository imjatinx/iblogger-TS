import React, { useState } from 'react'

interface LoginForm {
    username?: string;
    password?: string;
}

const MyForm = () => {
    const [value, setValue] = useState<string | undefined>()
    
    const [data, setData] = useState<LoginForm>({
        username: "",
        password: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <input type="text" placeholder='Name here' onChange={handleInput} />
            <h1>{value}</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="text" name='username' placeholder='username' onChange={(e) => setData({ username: e.target.value, password: data.password })} />
                <br />
                <input type="password" name="password" placeholder='password' onChange={(e) => setData({ username: data.username, password: e.target.value })} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MyForm