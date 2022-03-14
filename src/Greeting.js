function Greeting({language}){
    return <h1>{language === "es"? "Hola":"Hello"}</h1>;
}

export default Greeting;