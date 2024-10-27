import Composant from "./composant"

function App(){
    const employe =[
        {
            "id":"e1",
            "nomEmp":"Lamrabet",
            "prenomEmp":"Oussama",
            "poste":"Directeur",
            "departement":{
                "codeDep":"1",
                "NomDep":"RH"
            }

        }
    ]

    return(
        <>
        
        <Composant/>
        </>
    )
}

export default App