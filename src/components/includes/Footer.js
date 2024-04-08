import Link from "next/link";
import { MdAttachMoney } from "react-icons/md";
const Footer = () => {
    return (
        <div id="FooterContent" tabindex="-1">
            <footer className="Footer">
                <div className="Footer-userNav">
                    <div className="Footer-uppernav">
                        <div className="Footer-modalContainer noUser noMobile">
                            <div className="Footer-modal save text-center">
                                <div className="Footer-modalInfo">
                                    <div className="Footer-modalInfoHeader">
                                        <MdAttachMoney className="icon__elem material-icons icon__lg Footer-modalInfoIcon "/>
                                        <h3 className="Footer-modalInfoTitle t-body-large">How much can I save?</h3>
                                    </div>
                                    <span className="Footer-modalInfoSubtext t-body-small">See how much you could save.</span>
                                    <div className="Footer-btnContainer">
                                        <span className="button__elem Footer-btn">
                                        <button type="button" className="secondary-outlined round large primary-color" title="See how much you could save." role="link">
                                            <span className="button__label">Let's Find Out</span>
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Footer-bottomNavLinks Footer-withchat">
                        <ul className="Footer-bottomNavUl t-label-large">
                            <li>
                                <Link href="https://static.adcrws.com/docs/access_privacy_policy_20190604.html" rel="noopener noreferrer" target="_blank">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/help">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;