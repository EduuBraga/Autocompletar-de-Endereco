import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "./Loader";
import VMasker from "vanilla-masker";
import { Message } from "./Message";
import axios from "axios";

export function Form() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const [visibleLoader, setVisibleLoader] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    VMasker(document.querySelector("#cep")).maskPattern("99999-999");
  }, []);

  function onSubmit() {
    setMessage('Cadastro de endereço concluído com sucesso');
    setVisibleMessage(true);
  }

  const removeDisabled = () => {
    let inputs = document.querySelectorAll('.inputs');

    inputs.forEach(input => {
      input.removeAttribute('disabled');
    });
  }

  const checkCEP = (e) => {
    const cepValid = e.target.value.length >= 9

    if (cepValid) {
      const cep = e.target.value.replace('-', '');
      setVisibleLoader(true);

      axios.get(`https:/viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
        .then(response => {
          if (!response.erro) {
            removeDisabled();
            setValue('estado', response.uf);
            setValue('cidade', response.localidade);
            setValue('bairro', response.bairro);
            setValue('rua', response.logradouro);
            setFocus('rua');
          }else{
            setMessage('CEP inválido, preencha o campo corretamente.');
            setVisibleMessage(true);
          }
        })
        .catch(error =>
          console.error(error)
        )
        .finally(setVisibleLoader(false))
    }
    else {
      setMessage('CEP inválido, preencha o campo corretamente.');
      setVisibleMessage(true);
    }
  }

  return (
    <div className="container__form">

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            id="cep"
            className="form-control shadow-none"
            autoComplete="off"
            maxLength="9"
            required
            type="text"
            {...register("cep")}
            onBlur={checkCEP}
            placeholder="Digite o seu CEP"></input>
          <label className="label__cep">Digite o seu CEP</label>
        </div>

        <div className="row">
          <div className="form-floating col-12 col-sm-6 mb-3">
            <input
              autoComplete="off"
              className="form-control shadow-none inputs"
              type="text"
              disabled
              required
              {...register("rua")}
              placeholder="Rua">
            </input>
            <label>Rua</label>
          </div>

          <div className="form-floating col-12 col-sm-6 mb-3">
            <input
              className="form-control shadow-none inputs"
              type="text"
              disabled
              {...register("complemento")}
              placeholder="Complemento">
            </input>
            <label>Complemento</label>
          </div>
        </div>

        <div className="row">
          <div className="form-floating col-12 col-sm-6 mb-3">
            <input
              autoComplete="off"
              disabled
              required
              className="form-control shadow-none inputs"
              type="text"
              {...register("numero")}
              placeholder="Digite o número da residência">
            </input>
            <label>Digite o número da residência</label>
          </div>

          <div className="form-floating col-12 col-sm-6 mb-3">
            <input
              autoComplete="off"
              disabled
              required
              className="form-control shadow-none inputs"
              type="text"
              {...register("bairro")}
              placeholder="Bairro">
            </input>
            <label>Bairro</label>
          </div>
        </div>

        <div className="row">
          <div className="form-floating col-12 col-sm-6 mb-3">
            <input
              className="form-control shadow-none inputs"
              type="text"
              autoComplete="off"
              disabled
              required
              {...register("cidade")}
              placeholder="Cidade">
            </input>
            <label>Cidade</label>
          </div>

          <div className="form-floating col-12 col-sm-6 mb-3">
            <select
              disabled
              autoComplete="off"
              required
              className="form-select shadow-none inputs"
              defaultValue="Estado"
              {...register("estado")}>
              <option disabled value="Estado">Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary shadow-none button__form">Cadastrar</button>
        </div>
      </form>

      {visibleLoader && <Loader />}
      {visibleMessage && <Message message={message} setVisibleMessage={setVisibleMessage} />}
    </div>
  )
}