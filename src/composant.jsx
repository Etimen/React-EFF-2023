import { useState } from "react"

function Composant1 (){
 const [Codematériel,setCodematériel] = useState('')
 const [Marque,setMarque] = useState('');
 const [Date,setDate]=useState('');
 const[Categorie,setCategorie] = useState('');
 const[Employes,setEmployes]= useState([]);
 const handlechange = event => {
  setMarque(event.target.value)
 }
 
 function save (e){
  e.preventDefault();
  setEmployes([...Employes,{Codematériel:Codematériel,Marque:Marque,Date:Date,Categorie:Categorie}])
 }

    return(
    <>
        <div className="max-w-sm mx-auto mt-12 border-2 border-cyan-800 p-3 rounded-md" >
    
        <div className="mb-5">
          <label for="ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Matériel</label>
          <input type="text" id="ID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setCodematériel(e.target.value)}}/>
        </div>
    
        <label for="Marque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marque:</label>
        <div className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          
          <select name="marque" id="" value={Marque} onChange={handlechange}>
          <option value="">- - -</option>
          <option value="HP">HP</option>
          <option value="ASUS" >ASUS </option>
          <option value="DELL" >DELL </option>
          </select>
        </div>
        
        <div className="mb-5">
          <label for="DateDebut" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date début utilisation :</label>
          <input type="date" id="DateDebut" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setDate(e.target.value)}} />
        </div>
        <div className="mb-5">
          <label for="Catégorie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catégorie :</label>
          <input type="text" id="Catégorie" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setCategorie(e.target.value)}} />
        </div>
        <button  className="text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={save}> Confirmer</button>
 

        </div>
        <div>
        <h1>Récapilutatif des informations :</h1>

        
          {Employes.map(function(item,index){
            return <>
            <ul>
            <li key={index}>Codematériel :{item.Codematériel}</li>
            <li key={index}>Marque:{item.Marque}</li>
            <li key={index}>Date:{item.Date}</li>
            <li key={index}>Categorie:{item.Categorie}</li>
            
            </ul>
            </>
          })}
            
        
        </div>
        
    </>
    )
}
export default Composant1
