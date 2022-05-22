import Head from "next/head"
import styles from '../../styles/home.module.scss'
import Input from "../components/ui/Input"

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Pizzaria - Faça seu login
        </title>
      </Head>
      <div className={styles.containerCenter}>
        <h1>Delicia Pizza</h1>

        <div className={styles.login}>
          <form>
            <Input  
            placeholder="Digite o seu email"
            type="text"
            />

            <Input
            placeholder="Digite a sua senha"
            type="password"
            />

            
          </form>
        </div>

      </div>
    </>
  )
}
