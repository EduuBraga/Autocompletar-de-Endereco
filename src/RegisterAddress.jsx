import { Form } from "./components/Form"
import { Steps } from "./components/Steps"

export default function RegisterAddress() {
  return (
    <div className="container">
      <Steps></Steps>
      <div className="order__form">
        <div className="header__form">
          <h1>Cadastre o seu endereço</h1>
          <p>Preencha os campos para podermos enviar os seus produtos</p>
        </div>
        <Form></Form>
      </div>
    </div>
  )
}
