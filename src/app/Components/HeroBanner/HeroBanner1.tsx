import Image from "next/image";
import Link from "next/link";

const HeroBanner1 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-one">
            <div className="shape shape-blur_one"><span></span></div>
            <div className="shape shape-blur_two"><span></span></div>
            <div className="shape shape-blur_three"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1 className="text-anm"><span>CREATIVE</span></h1>
                            <div className="big-text text-anm">AGENCY</div>
                            <div className="text-box pf_zoomIn">
                                <p>We are a <span>Creative Agency</span> with over 25 years of Our experience, specializing in delivering cutting-edge digital solutions, including web design.</p>
                            </div>
                            <div className="element"><span> <Image className="rotate360" src="/assets/images/creative-agency/hero/element.png" alt="img" width={120} height={120}   /></span></div>
                            <div className="hero-button pf_fadeup">
                                <Link href="/about" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">Learn More</span>
                                        <span className="text">Learn More</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner1;