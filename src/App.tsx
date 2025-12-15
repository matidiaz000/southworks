import { useEffect, useState } from 'react';
import FilterComponent from './components/Filter'
import UserCardComponent from './components/UserCard'

interface IItem {
  id: string,
  name: string,
  company: {
    name: string
  }
  email: string,
  website: string
}

function App() {
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // ⬅️ Guardar datos
        setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      });
  }, []);

  const handleChildData = (data: any) => {
    setFilter(data);
  };

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="p-8">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className='p-8'>
      <FilterComponent sendDataToParent={handleChildData}/>
      {data
      .filter((item: IItem) => item.name.toLowerCase().includes(filter.toLowerCase()))
      .map((item: IItem) => (
        <div key={item.id}>
          <UserCardComponent
            name={item.name}
            rol={item.company?.name}
            estado={item.email}
            avatarURL={item.website}
          />
        </div>
      ))}  
    </div>
  )
}

export default App
