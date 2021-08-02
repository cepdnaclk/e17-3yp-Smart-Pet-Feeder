import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import dataBlog from "../../data/Blog/blog-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const Blogs = () => {
  const settings = {
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "owl-carousel blog-slider",
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="blogs">
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <HeadingSection title="Our Blogs" tagline="Latest News" />
        </div>
        <div className="row mt-50">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {dataBlog.map((post) => (
                <div className="post" key={post.id}>
                  <div className="post-img">
                    <img
                      className="img-fluid"
                      src={require("../../assets/images/" + post.image)}
                      alt=""
                    />
                  </div>
                  <div className="post-info">
                    <h3>
                      <a href={`${process.env.PUBLIC_URL}/blog-grid`}>{post.title}</a>
                    </h3>
                    <h6>{post.published}</h6>
                    <p>{parse(post.excerpt)}</p>
                    <a className="readmore" href="!#">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
