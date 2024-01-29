function Login() {
    return (
        <>
            <h1>Login</h1>
            <form method="post">
                <div className="container">
                    <label htmlFor="uname">Username</label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="pass">Password</label>
                    <input type="text" placeholder="Enter Password" name="pass" required />

                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login