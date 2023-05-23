import React, { useState, useCallback, useEffect } from 'react'
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './styles'

import api from '../../services/api'

export default function Main(){
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    //Buscar os repositorios dentro do localstorage sempre que a pagina for aberta
    useEffect(()=> {
      const repoStorage = localStorage.getItem('repos');
      if(repoStorage){
        setRepositorios(JSON.parse(repoStorage))
      }
      
    },[]);

    //Salvar alterações da lista de repositorios dentro do localstorage
    useEffect(() => {
      localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        async function submit(){
            setLoading(true);
            setAlert(null);
            try{

              if(newRepo === ''){
                throw new Error('Você precisa indicar um repositório!')
              }
                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositorios.find(repo => repo.name === newRepo)

                if(hasRepo){
                  throw new Error('Repositório já existe')
                }
        
                const data = {//pegando algumas propriedades do JSON que a api retornou no response
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
            }catch(error){
                setAlert(true);
            }finally{
                setLoading(false);
            }
            
        }
        submit();
    }, [newRepo, repositorios]);//quando newRepo ou repositorios foreem alterados o useCallback da function handleSubmit será executado.

    function handleInputChange(e){
        setNewRepo(e.target.value);//vai pegar o valor do input e atribuir ele a variavel newRepo
        setAlert(null);
        //console.log(newRepo)
    }

    const handleDeleteRepo = useCallback((repo)=> {
      const find = repositorios.filter(r => r.name !== repo);
      setRepositorios(find);
    }, [repositorios])

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
              <input
                type="text"
                placeholder="Adicionar Repositório"
                value={newRepo}
                onChange={handleInputChange}
              />

              <SubmitButton loading={loading ? 1 : 0}>
                  {loading ? (
                      <FaSpinner color="#fff" size={14}/>
                  ) : (
                      <FaPlus color="#fff" size={14}/>
                  )}
              </SubmitButton>
            </Form>

            <List>
              {repositorios.map(repo => (
                <li key={repo.name}>
                  <span>
                    <DeleteButton onClick={()=>handleDeleteRepo(repo.name)}>
                      <FaTrash size={14} />
                    </DeleteButton>
                    {repo.name}
                  </span>
                  <a href="">
                    <FaBars size={20} />
                  </a>
                </li>
              ))}
            </List>
        </Container>
    );
}