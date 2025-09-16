import React from 'react';
import ImageCarousel from './ImageCarousel';

const CarouselSection = () => {
    return (
        <section id="cases" className="gray-dark pt-80 pb-50 carousel-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-0 pf_fadeup text-center">
                            <span className="sub-title">Casos</span>
                            <h2>Resultados que Falam por Si</h2>
                            <p>Antes e depois de pacientes reais da Studio Dental.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="agk-image-box pf_fadeup">
                            <div className="agk-image">
                                <ImageCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;
