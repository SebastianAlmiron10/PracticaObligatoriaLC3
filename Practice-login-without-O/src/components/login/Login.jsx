import { useState } from 'react';


const Login = () => {

    const [Username, setUsername] = useState('')

    const handleChangeUsername = (e) => {
        const value = e.target.value

        if(value.toLowerCase().includes('o')){
            alert('Por favor, ¡Nombres de usuario sin la letra o!')
        }else{
            setUsername(value)
        }
    }

    const onClickRegister = () => {
        if(!Username || Username.toLowerCase().includes('o')){
            alert('Usuario inválido para registrarse')
        }else{
            setUsername('')
            alert('¡Usuario registrado correctamente!')
        }
    }

    return (
            <form action="" className='flex flex-col w-96 gap-4'>
                <label className='text-xl font-semibold text-white'>Username:</label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    className='rounded-lg p-2' 
                    placeholder='username...'
                    value={Username}
                    onChange={handleChangeUsername}
                    />
                <div className='w-full flex justify-center'>
                    <button type="submit" onClick={onClickRegister} className='bg-green-400 rounded-lg text-white p-2 w-44'>Registrarse</button>
                </div>
                <p className='text-white'>{Username}</p>
            </form>
    );
};

export default Login;