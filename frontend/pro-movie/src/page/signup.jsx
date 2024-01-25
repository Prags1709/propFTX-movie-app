import React, { useState } from "react";

const Siginup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const dataSubmit = async (event) => {
        event.preventDefault();

        setError("");

        if (name && email && password) {
            try {
                const res = await fetch(`http://localhost:4500/proMovie/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password}),
                });

                if (!res.ok) {
                    alert('Invalid credentials')
                } else {
                    alert('User Signup successful');
                    setName("");
                    setEmail("");
                    setPassword("");
                    window.location.href = "/login";
                }

            } catch (error) {
                setError(error.message);
            }
        } else {
            window.alert('Please fill in all the details');
        }
    }

    return (
        <div className="signup-box">
            <h2>SIGNUP PAGE</h2>
            {error && <p>{error}</p>}
            <form onSubmit={dataSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="sub" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Siginup;