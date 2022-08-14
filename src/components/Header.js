import './header.css'
import logo from './../images/webBanner.png'

function Header() {
    return (
        <div className="">
            {/* Header start */}
            <header id="header" className="header-one">
                <div className="bg-white">
                    <div className="container">
                        <div className="logo-area">
                            <div className="row align-items-center">
                                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                    <a className="d-block" href="index.html">
                                        <img loading="lazy" src={logo} alt="IMCB Sihala" />

                                    </a>
                                    {/* <h2>IMCB (Degree), Sihala, Islamabad</h2> */}
                                </div>{/* logo end */}
                                <div className="col-lg-9 header-right">
                                    <ul className="top-info-box">
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Call Us</p>
                                                    <p className="info-box-subtitle">(051)4486623</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Email Us</p>
                                                    <p className="info-box-subtitle">imcbsihala@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-get-a-quote">
                                            <button className="btn btn-primary" disabled>Login</button>
                                            {/* <a className="btn btn-primary" href="#">Login</a> */}

                                        </li>
                                    </ul>{/* Ul end */}
                                </div>{/* header right end */}
                            </div>{/* logo area end */}
                        </div>{/* Row end */}
                    </div>{/* Container end */}
                </div>
            </header>
            {/*/ Header end */}
        </div>
    );
}

export default Header;