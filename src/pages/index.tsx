import Head from 'next/head'
import styles from '../../styles/home.module.scss';
import Link from 'next/link';
import { useContext, FormEvent } from 'react';

//components
import Input from '../components/ui/Input';
import Button from '../components/ui/Button'

import {AuthContext} from '../contexts/AuthContext'

export default function Home() {

  const { signIn }= useContext(AuthContext)

  async function handleLogin( event: FormEvent ){
    event.preventDefault()

    let data = {
      email: "thiago@teste.com",
      password: "123456"
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
            />

            <Input
              placeholder="Sua senha"
              type="password"
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