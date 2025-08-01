let home=()=>{
    return `
    <h1>Home</h1>
    <a href="addProduct">Add Product</a>
    `
}

let anchor=document.querySelector("a")

const handelClickAnchor=(e)=>{
    e.preventDefault()
    history.pushState({})
}
export default home