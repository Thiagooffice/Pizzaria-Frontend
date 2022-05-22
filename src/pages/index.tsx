import Head from 'next/head'
import styles from '../../styles/home.module.scss';
import Link from 'next/link';
import { useContext, FormEvent, useState } from 'react';

//components
import Input from '../components/ui/Input';
import Button from '../components/ui/Button'

import {AuthContext} from '../contexts/AuthContext'

export default function Home() {

  const { signIn }= useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin( event: FormEvent ){
    event.preventDefault()

    let data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.logo}>Pizzaria</h1>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}