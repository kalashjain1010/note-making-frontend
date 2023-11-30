// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6";

const DashFooter = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FaHouse  />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    )
    return content
}
export default DashFooter