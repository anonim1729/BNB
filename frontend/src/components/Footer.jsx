import React from 'react'
import "../../public/footer.css"

const year = new Date().getFullYear();

const Footer = () => {
    return (<>
        <div className="container myClass">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top px-5">
                <p className="col-md-4 mb-0 text-muted">&copy; {year}, <span>FarmCraft</span> </p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <i className="fa-solid fa-leaf" style={{fontSize:"3rem"}}></i> 
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    </>
    )
}

export default Footer