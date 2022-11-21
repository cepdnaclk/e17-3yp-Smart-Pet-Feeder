import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ui_design from "../../assets/images/design/ui_design.png";
import Pet_feeder from "../../assets/images/design/Pet_feeder.jpg";
import pet_feeder_2 from "../../assets/images/design/pet_feeder_2.jpg";
import Food_container from "../../assets/images/design/Food_container.jpg";
import other from "../../assets/images/design/other.jpg";
import power from "../../assets/images/design/power.jpg";

const ThreeDDesign = () => (
    <section id="3d_design">
        <div className="container">
            <div className="row">
                <div>
                    <HeadingSection title="3D Design Of The Pet Feeder" tagline="">
                        The Pet Feeder
                        <div className="pb-5">
                            <img src={Pet_feeder}/>
                        </div>
                        This is the 3D Design of the pet feeder. Mainly it includes a food
                        container and a camera.
                        <div className="pb-5">
                            <img src={pet_feeder_2}/>
                        </div>
                        <div>The Food Container.</div>
                        <div className="pb-5">
                            <img src={Food_container}/>
                        </div>
                        This is a cylindrical shaped food container, which has diveded in to
                        four partitions and it is rotatable through its axis. Every
                        partition has a opening at the bottom, and there is a path to the
                        food plate from the bottom of the cylinder. To serve foods the
                        relevent partition should be coincided its opening with the path.
                    </HeadingSection>


                    {/*<HeadingSection title="Design of the Pet Feeder" tagline="">*/}
                    {/*    Design of the food container*/}
                    {/*    <div className="pb-5">*/}
                    {/*        <img src={Pet_feeder}/>*/}
                    {/*    </div>*/}
                    {/*    Food container is made from 6 inches width cylinder. The cylinder is divided into four pieces.*/}
                    {/*    To divide the cylinder equal for wings and small 1 inch long cylinder is used. (see figure 2.2)*/}
                    {/*    <div className="pb-5">*/}
                    {/*        <img src={pet_feeder_2}/>*/}
                    {/*    </div>*/}
                    {/*    <div>The Food Container.</div>*/}
                    {/*    <div className="pb-5">*/}
                    {/*        <img src={Food_container}/>*/}
                    {/*    </div>*/}
                    {/*    This is a cylindrical shaped food container, which has diveded in to*/}
                    {/*    four partitions and it is rotatable through its axis. Every*/}
                    {/*    partition has a opening at the bottom, and there is a path to the*/}
                    {/*    food plate from the bottom of the cylinder. To serve foods the*/}
                    {/*    relevent partition should be coincided its opening with the path.*/}
                    {/*</HeadingSection>*/}
                </div>
            </div>
        </div>
    </section>
);

export default ThreeDDesign;
