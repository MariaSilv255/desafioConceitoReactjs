import React,{useEffect,useState } from "react";

import "./styles.css";
import api from "./services/api";

function App() {
  
  const [repostories,setRespositories] = useState([]);
  
  useEffect(() => {
  api.get('repositories').then(response => {
    setRespositories(response.data);
  });
  },[]);
  
  async function handleAddRepository() {
    // TODO
const response = await api.post('repositories', {
  title:'umbriel',
  url:'testetestete',
  tech: ['nodejs','react']
})

setRespositories([...repostories,response.data]);


}

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`repositories/${id}`);

setRespositories(repostories.filter(
  repository => repository.id != id))

  }

  return (
    <div>
      <ul data-testid="repository-list">
        
        {repostories.map(repository =>(
        
        <li key={repository.id}>
         
          {repository.title}

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
        </li>
        ))}

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
