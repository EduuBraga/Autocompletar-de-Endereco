export function Steps() {
  return (
    <div id="steps">
      <div className="line"></div>
      <div className="step">
        <i className="bi bi-person active"></i>
        <p className="d-none d-md-block">Criação de conta</p>
      </div>
      <div className="step">
        <i className="bi bi-geo-alt active"></i>
        <p className="d-none d-md-block">Endereço</p>
      </div>
      <div className="step">
        <i className="bi bi-credit-card"></i>
        <p className="d-none d-md-block">Pagamento</p>
      </div>
    </div>
  )
}