//Hooks
import React, { useState } from 'react';

export const UserScreen = () => {
    const [loading, setLoading] = useState(false);
    return (
        <button onClick={() => setLoading(true)}>{!loading ? 'Carregando...' : 'Usuário Logado'}</button>
     )
}