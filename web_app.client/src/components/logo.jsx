import image from "../images/logo.jpg"
function Logo() {
    return (
        <div className="layout-wrapper">
            <img src={image} alt="Logo" width={100} height={100} />
        </div>
    );
}

export default Logo;