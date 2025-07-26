const register=()=>{
    return`
    <div class="registerform">
        <form action="">
            <div>
                <h1>Register</h1>
            </div>
            <div>
                <input type="text" name="name" placeholder="Name">
                <span><i class="fa-solid fa-signature"></i></span>
            </div>
            <div>
                <input type="text" name="email" placeholder="Email">
                <span><i class="fa-solid fa-envelope"></i></span>
            </div>
            <div>
                <input type="text" name="password" placeholder="Password">
                <span><i class="fa-solid fa-lock"></i></span>
            </div>
            <div>
                <input type="text" name="re-password" placeholder="Re-Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <textarea name="address" placeholder="Address"></textarea>
                <span><i class="fa-solid fa-location-dot"></i></span>
            </div>
            <div>
                <input type="file" accept=".png,.jpg,.jpeg">
            </div>
            <div>
            <button>submit</button>
            </div>
        </form>
    </div>
    `
}

export default register