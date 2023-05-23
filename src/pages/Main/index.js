import React, { useState, useCallback } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles'

import api from '../../services/api'

export default function Main(){
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        async function submit(){
            setLoading(true);
            try{
                const response = await api.get(`repos/${newRepo}`)
        
                const data = {//pegando algumas propriedades do JSON que a api retornou no response
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
            
        }
        submit();
    }, [newRepo, repositorios]);//quando newRepo ou repositorios foreem alterados o useCallback da function handleSubmit será executado.

    function handleInputChange(e){
        setNewRepo(e.target.value);//vai pegar o valor do input e atribuir ele a variavel newRepo
        //console.log(newRepo)
    }

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
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
        </Container>
    );
}