import "./modal.css"

export default function Modal({title, Content,close}) {
    return(
        <div className="modal">
            <div className="modal_container">
                <div className="modal_close" onClick={()=> close(false)}>&times;</div>
                <div className="modal_title">{title}</div>
                <div className="modal_content">{Content}</div>
                <div className="modal_footer">
                    <button className="btn" onClick={()=> close(false)}>Close</button>
                </div>

            </div>
        </div>
    )
}