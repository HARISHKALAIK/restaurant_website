import { useState } from "react";

function Lunch() {

  const [lunchItems] = useState([
    {
      img: "../assets/l1.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l2.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐☆☆ (4.5/5)."
    },
    {
      img: "../assets/l3.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l4.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l5.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l6.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l7.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l8.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l9.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    {
      img: "../assets/l11.png",
      title: "Idly-Set",
      desc: "A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5)."
    },
    
  ]);

  return (
    <div className="container">
      <h2
        className="text-center p-5"
        style={{ fontSize: "2.5rem", color: "#ff5733" }}
      >
        Lunch
      </h2>

      <div className="row">
        {lunchItems.map((item, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <img
              src={item.img}
              className="img-fluid float-animate"
              alt={item.title}
            />
            <p
              className="text-center fs-5 pt-2"
              style={{ color: "#ff5733" }}
            >
              {item.title}
            </p>
            <p className="text-center" style={{ color: "#070707ff" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lunch;
