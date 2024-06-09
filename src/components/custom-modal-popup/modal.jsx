

export default function Modal({id,header,footer,body,onClose}){
  return <div id={id||'Modal'} className="modal">
    <div className="modal-content">
      <div className="header">
        <span onClick={onClose} className="close-modal-icon">&times;</span>
        {header?header:'Header'}
      </div>
      <div className="body">
        {body?body:'body'}
      </div>
      <div className='footer'>
        {footer?footer:'Footer'}
      </div>
    </div>

  </div>
}