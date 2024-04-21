const checkSession = async (redirectTo) => (()=>{
    const token = localStorage.getItem('token')

    console.log({
        token,
        redirectTo
    })

    if(token === null && redirectTo === "/" ) return (window.location.href = redirectTo)
   })()
 
 
export {
    checkSession
}