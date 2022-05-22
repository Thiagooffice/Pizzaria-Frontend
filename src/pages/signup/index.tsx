import Head from 'next/head'
import styles from '../../../styles/home.module.scss';
import Link from 'next/link';

//components
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.logo}>Pizzaria</h1>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form>

            <Input
              placeholder="Digite seu nome"
              type="text"
            />
              
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
              Cadastrar
            </Button>
          </form>
          <Link href="/">
            <a className={styles.text}>Já possui uma conta? Faça login!</a>
          </Link>

        </div>
      </div>
    </>
  )
}