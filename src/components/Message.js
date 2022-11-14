export function Message(props) {
  function handleClick(){
    props.setVisibleMessage(false)    
    document.querySelector("#cep").value = ''
    document.querySelector("#input__1").value = ''
    document.querySelector("#input__2").value = ''
    document.querySelector("#input__3").value = ''
    document.querySelector("#input__4").value = ''
    document.querySelector("#input__5").value = ''
    document.querySelector("#input__6").value = 'Estado'

    document.querySelector("#input__1").setAttribute('disabled', 'disabled')
    document.querySelector("#input__2").setAttribute('disabled', 'disabled')
    document.querySelector("#input__3").setAttribute('disabled', 'disabled')
    document.querySelector("#input__4").setAttribute('disabled', 'disabled')
    document.querySelector("#input__5").setAttribute('disabled', 'disabled')
    document.querySelector("#input__6").setAttribute('disabled', 'disabled')
  }

  return (
    <div className="states">
      <div className="modal__message alert alert-dark">
        <h4>Messagem:</h4>
        <p>{props.message}</p>
        <div className="d-flex justify-content-end">
          <button onClick={()=>{handleClick()}} className="btn btn-secondary shadow-none">Fechar</button>
        </div>
      </div>
    </div>
  )
}