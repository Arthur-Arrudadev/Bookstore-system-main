import { Form } from '@components/index.components'
import { login } from '@api/index'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/user/userSlice'
import { enqueueSnackbar } from 'notistack'
import {
    LoaderCircle
} from 'lucide-react'

import { useState } from 'react'

function SignIn() {

    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({
        registration: "",
        password: ""
    })

    const dispatch = useDispatch()

    const handleLogin = async (e) => {

        e.preventDefault()

        try {
            setLoading(true)

            const { data } = await login({
                registration: user.registration,
                password: user.password
            })

            enqueueSnackbar('Logado com sucesso.', {
                variant: 'success'
            })


            dispatch(setAuth(data))

        } catch (err) {
            if (err.response.data.err) {
                enqueueSnackbar('Matrícula ou senha inválida, tente novamente.', {
                    variant: 'error'
                })
            }
        } finally {
            setLoading(false)
            setUser({
                registration: "",
                password: ""
            })
        }
    }


    return (
        <main className="bg-[#374151] min-h-screen flex items-center justify-center">
            <Form.FormRoot className="mt-16">
                <Form.FormHeader title={"Login"} />
                <Form.FormLabel htmlFor="registering">
                    <span>Matrícula</span>
                    <Form.FormInput
                        name="registering"
                        aria-describedby="matricula"
                        type="text"
                        value={user.registration}
                        onChange={(e) => setUser({ ...user, registration: e.target.value })}
                        placeholder={"2024ADSPL0000"}
                    />
                </Form.FormLabel>
                <Form.FormLabel htmlFor="password">
                    <span>Senha</span>
                    <Form.FormInput
                        name="password"
                        aria-describedby="password-area"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder={"*******"}
                    />
                </Form.FormLabel>
                {loading ? (
                    <Form.FormButton
                        value={<LoaderCircle className='animate-spin-slow' />}
                        type="submit"
                        disabled
                    />
                ) : (
                    <Form.FormButton
                        value={"Entrar"}
                        type="submit"
                        onClick={handleLogin}
                    />
                )}
                <Form.FormLink link={"/password-recovery"} value={"Esqueci a senha"} />
            </Form.FormRoot>
        </main >
    )
}

export default SignIn