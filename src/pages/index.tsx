import Head from "next/head"
import styles from '../../styles/home.module.scss'

//components
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"

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
            
            <Button
            type="button"
            loading={true}>
              Cadastrar
            </Button>

          </form>
        </div>

      </div>
    </>
  )
}
