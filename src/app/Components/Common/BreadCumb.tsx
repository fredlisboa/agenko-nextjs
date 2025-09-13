import Image from "next/image";
import Link from "next/link";

const BreadCumb = ({Title,content} : any ) => {

    return (

        <section className="agenko-page-banner">
        <div className="shape shape-circle1"><span></span></div>
        <div className="shape shape-circle2"><span></span></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-9">
                    
                    <div className="page-content">
                        <h1 className="page-title">{Title}</h1>
                        <div className="row">
                            <div className="col-xl-8">
                                
                                <div className="text-box d-flex align-items-center">
                                    <div className="icon">
                                    <Image className="rotate360" src="/assets/images/pages/shape/star1.png" alt="img" width={84} height={90}   />
                                    </div>
                                    <div className="text">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                
                                <ul className="breadcrumb-link">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">{Title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    
                    <div className="circle-box float-xl-end text-center text-xl-end">
                        <Image className="rotate360" src="/assets/images/pages/shape/circle-shape1.png" alt="img" width={135} height={135}   />
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
};

export default BreadCumb;