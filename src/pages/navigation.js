// Navi.jsx
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navi.css";
import { useEffect, useRef } from "react";
// NOTE: prefer importing the bootstrap JS once in index.js
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navi() {
  const navRef = useRef();

  useEffect(() => {
    function hideNavbar() {
      const navbar = document.getElementById("navbarNav");
      if (!navbar) return;

      // If Bootstrap JS (bundle) is loaded, use its Collapse API safely
      if (window.bootstrap && window.bootstrap.Collapse) {
        try {
          const bsCollapse = new window.bootstrap.Collapse(navbar, {
            toggle: false,
          });
          bsCollapse.hide();
        } catch (err) {
          // fallback: remove show class
          navbar.classList.remove("show");
        }
      } else {
        // fallback without bootstrap JS
        navbar.classList.remove("show");
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) {
          toggler.classList.add("collapsed");
          toggler.setAttribute("aria-expanded", "false");
        }
      }
    }

    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        hideNavbar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // helper for menu item clicks (close collapse on mobile when clicking a link)
  function handleNavLinkClick() {
    const navbar = document.getElementById("navbarNav");
    if (!navbar) return;
    if (window.bootstrap && window.bootstrap.Collapse) {
      try {
        const bsCollapse = new window.bootstrap.Collapse(navbar, {
          toggle: false,
        });
        bsCollapse.hide();
        return;
      } catch (err) {
        // fall through to manual
      }
    }
    navbar.classList.remove("show");
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler) {
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
      style={{ boxShadow: "0 4px 10px rgba(71, 235, 53, 0.15)" }}
      ref={navRef}
    >
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold fs-3 text-dark "
          to="/"
          style={{ fontSize: "3rem" }}
        >
          <span style={{ color: "#ff5733" }}>Hari & Spot</span>
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler bg-light collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav pp d-flex justify-content-evenly align-items-center text-center">
            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-secondary fw-semibold" to="/about" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/menus" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Menus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/events" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/chiefs" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Chefs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/contact" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary fw-semibold" to="/galery" onClick={handleNavLinkClick} style={{ color: "#e63946" }}>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary rounded-pill text-white px-4 py-2 shadow-sm"
                to="/book"
                onClick={handleNavLinkClick}
                style={{ color: "#e63946" }}
              >
                Book A Table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navi;
