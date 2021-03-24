import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context'

const ScrollIcons = () => {
    const { wishlist } = useContext(AppContext)
    const showIcon = React.useRef('')
    const handleScroll = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    React.useEffect(() => {
        const node = showIcon.current;
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                node.style.display = "block";
            } else {
                node.style.display = "none";
            }
        }
    }, [])
    return <div className='scroll-icons' ref={showIcon}>
        <ul>
            <li>
                <div className="cart-float-right animated on fadeInRight">
                    <Link to='/wishlist' className='cart-link' onClick={handleScroll}>
                        <div className="scroll-bag">
                            <div className="scroll-bag-image">
                                {/* <FiShoppingCart /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    width="36px" height="26px" viewBox="0 0 36 26" version="1.1"
                                    className="inline-svg replaced-svg">
                                    <g transform="translate(-1318.000000, -666.000000)">
                                        <g transform="translate(1304.000000, 646.000000)">
                                            <g id="scroll-cart" transform="translate(14.000000, 20.000000)" fillRule="evenodd" fill="#FFFFFF">
                                                <path d="M23.7938961,18.6533877 L5.67428227,18.6533877 C5.32156367,18.6533877 5.04867635,18.4577228 4.93023386,18.1050042 L0.42994102,4.91823308 C0.272887322,4.52690326 0.507685209,4.05782926 0.899015021,3.93990855 C1.29034483,3.78285485 1.75889706,4.01713096 1.87733955,4.40846077 L6.18196748,17.0880685 L23.1656813,17.0880685 L28.3714114,0.886492467 C28.4898538,0.572906845 28.7627412,0.338108957 29.1154598,0.338108957 L34.8283533,0.338108957 C35.2582943,0.338108957 35.6110129,0.690827561 35.6110129,1.12076858 C35.6110129,1.55123137 35.2582943,1.9034282 34.8283533,1.9034282 L29.7410657,1.9034282 L24.5353357,18.1050042 C24.419502,18.4191116 24.1053946,18.6533877 23.7938961,18.6533877 L23.7938961,18.6533877 Z" id="Fill-1"></path>
                                                <path d="M22.3830217,25.2287721 C20.9361449,25.2287721 19.7214572,24.0547826 19.7214572,22.5666858 C19.7214572,21.078589 20.8954466,19.9045996 22.3830217,19.9045996 C23.8711185,19.9045996 25.045108,21.078589 25.045108,22.5666858 C25.045108,24.0526956 23.8711185,25.2287721 22.3830217,25.2287721 L22.3830217,25.2287721 Z M22.3830217,21.4699188 C21.796027,21.4699188 21.2867764,21.9389928 21.2867764,22.5666858 C21.2867764,23.1922917 21.7553287,23.6634528 22.3830217,23.6634528 C23.0091494,23.6634528 23.4797887,23.1536805 23.4797887,22.5666858 C23.4797887,21.9796911 23.0112365,21.4699188 22.3830217,21.4699188 L22.3830217,21.4699188 Z" id="Fill-2"></path>
                                                <path d="M7.12115903,25.2287721 C5.67428227,25.2287721 4.45959454,24.0547826 4.45959454,22.5666858 C4.45959454,21.078589 5.63358397,19.9045996 7.12115903,19.9045996 C8.60925586,19.9045996 9.7832453,21.078589 9.7832453,22.5666858 C9.7832453,24.0526956 8.60925586,25.2287721 7.12115903,25.2287721 L7.12115903,25.2287721 Z M7.12115903,21.4699188 C6.53416431,21.4699188 6.02491378,21.9389928 6.02491378,22.5666858 C6.02491378,23.1922917 6.49346601,23.6634528 7.12115903,23.6634528 C7.74728673,23.6634528 8.21792605,23.1536805 8.21792605,22.5666858 C8.21792605,21.9796911 7.74937382,21.4699188 7.12115903,21.4699188 L7.12115903,21.4699188 Z" id="Fill-3"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className='cart-counter'>
                                {wishlist.length}
                            </div>
                        </div>
                    </Link>
                </div>
            </li>
            <li>
                <div className="cart-float-right animated on fadeInRight">
                    <div className="scroll-up" onClick={(e) => handleScroll()}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                            width="21px" height="18px" viewBox="0 0 21 18" version="1.1"
                            className="inline-svg replaced-svg">
                            <g transform="translate(-1324.000000, -742.000000)">
                                <g transform="translate(1304.000000, 646.000000)">
                                    <polygon fill="#FFFFFF" fillRule="evenodd"
                                        id="scroll-up"
                                        points="40.6911849 106.338126 31.7224899 97.3816128 31.7256335 97.3768974 30.3503079 96 30.3455925 96.0062872 30.3408771 96 28.9655514 97.3768974 28.968695 97.3816128 20 106.338126 21.3753256 107.714631 29.3663606 99.7345986 29.3679324 113.277627 31.3142147 113.277627 31.3110711 99.7208453 39.3158593 107.714631"></polygon>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </li>
        </ul>
    </div>
}

export default ScrollIcons