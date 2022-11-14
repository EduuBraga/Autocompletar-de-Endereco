export function Message({ setVisibleMessage, message }) {

  function handleClick() {
    setVisibleMessage(false);

    let inputCEP = document.querySelector('#cep');
    inputCEP.value = '';

    let inputs = document.querySelectorAll('.inputs');

    inputs.forEach((input, index) => {
      input.setAttribute('disabled', 'disabled');
      input.value = '';

      if (index === 5) {
        input.value = 'Estado';
      }
    });
  }

  return (
    <div className="states">
      <div className="modal__message alert alert-dark">
        <h4>Messagem:</h4>
        <p>{message}</p>

        <div className="d-flex justify-content-end">
          <button onClick={handleClick} className="btn btn-secondary shadow-none">Fechar</button>
        </div>
      </div>
    </div>
  );
}