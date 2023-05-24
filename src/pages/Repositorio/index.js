import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom'
import { Container } from './styles'

export default function Repositorio(){
  const { repositorioParams } = useParams();

  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    
    async function load(){
      const nomeRepo = decodeURIComponent(repositorioParams);

      const [repositorioData, issuesData] = await Promise.all([//vai executar as duas requisição ao mesmo tempo
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params:{
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      console.log(repositorio)
      console.log(issues)
      setLoading(false);
    }
    load();
  }, [repositorioParams]);

  return(
    <Container>
      
    </Container>
  )
}