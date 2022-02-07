//Hooks
import React, { useEffect, useState } from 'react';

export const UserScreen = () => {
    const [pageTitle, setPageTitle] = useState('Teste');
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false); // useState retorna um array com 2 posições (valor e função de atualizar o valor). O valor é o estado inicial e a função é para atualizar o valor. 
    useEffect(() => {
        setPageTitle(`Você clicou ${count} vezes no botão.`);	
        document.title = pageTitle;
        // return () => { // Função que será executada quando o componente for desmontado.};
    }, [count, pageTitle]); // useEffect é uma função que é executada sempre que o componente é montado componentDidMount() e atualizado componentDidUpdate(). Segundo argumento é um array que restringe a execussão da função ao atualizar o estado. Passando o array vazio, a função será executada somente quando o componente for montado componentDidMount().
    return (
        <div>
            <h2>{pageTitle}</h2>
            <button onClick={() => setLoading(true)}>{!loading ? 'Carregando...' : 'Usuário Logado'}</button><br />
            <button onClick={() => setCount(count + 1)}>Atualizar Title</button>
        </div>
     )
}