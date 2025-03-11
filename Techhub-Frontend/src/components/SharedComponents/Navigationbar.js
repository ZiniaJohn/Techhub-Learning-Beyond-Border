import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiSololearn } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate, createSearchParams } from "react-router-dom";
import UserProfileDropdown from "../AuthComponents/UserProfileDropdown";
import SmallLoader from "./SmallLoader";
import searchicon from "../../Images/searchicon.png";
import logo from "../../Images/logo.png";

// import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const [keyword, setKeyword] = useState("");

  const { user, logoutMessage, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (logoutMessage) {
      console.log(true);
      toast.success(logoutMessage);
      dispatch(reset());
    }
  }, [logoutMessage, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!keyword) {
      return toast.error("Please Enter your search keyword before searching.");
    }

    let param = {
      keyword,
      price: 10,
      averageRating: 0,
      category: "",
      page: 1,
    };

    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(param)}`,
    });
    setKeyword("");
  };

  /* return (
     <>
       <Navbar
         collapseOnSelect
         bg="dark"
         data-bs-theme="dark"
         expand="lg"
         fixed="top"
         navbar="dark"
         className="text-info"
       >
         <Container>
           <NavLink to="/">
             <Navbar.Brand>
               <SiSololearn size={25} className="text-success" /> TECHHUB
             </Navbar.Brand>
           </NavLink>
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
             <Nav
               className="me-auto my-2 my-lg-0"
               // navbarScroll
             >
               <NavLink onClick={() => navigate("/")}>
                 <Nav.Link>Home</Nav.Link>
               </NavLink>
 
               {user ? (
                 <NavLink onClick={() => navigate("/user-enrolledCourses")}>
                   <Nav.Link href="">My Learning</Nav.Link>
                 </NavLink>
               ) : (
                 ""
               )}
 
               <NavLink onClick={() => navigate("/about-us")}>
                 <Nav.Link href="">About Us</Nav.Link>
               </NavLink>
 
               <NavLink onClick={() => navigate("/contact-us")}>
                 <Nav.Link href="">Contact Us</Nav.Link>
               </NavLink>
             </Nav>
             <Form onSubmit={(e) => e.preventDefault()} className="d-flex mb-2">
               <Form.Control
                 className="text-dark search-input"
                 type="search"
                 size="sm"
                 value={keyword}
                 onChange={(e) => setKeyword(e.target.value)}
                 placeholder="Search"
               />
               <Button
                 onClick={submitHandler}
                 variant="outline-success"
                 size="sm"
                 type="submit"
               >
                 Search
               </Button>
             </Form>
             {isLoading ? (
               <>
                 <SmallLoader />
               </>
             ) : user ? (
               <UserProfileDropdown />
             ) : (
               <>
                 <NavLink to="/Login">
                   <Button variant="outline-success ms-2 me-2 mb-2" size="sm">
                     Login
                   </Button>
                 </NavLink>
                 <NavLink to="/Register">
                   <Button variant="outline-success mb-2" size="sm">
                     Register
                   </Button>{" "}
                 </NavLink>
               </>
             )}
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </> 
   ); */

  /*return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        background: "rgba(113, 44, 249, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      className="text-white px-3 py-2"
    >
      <Container>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center text-white fw-bold">
            <SiSololearn size={28} className="text-warning me-2" /> TECHHUB
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 text-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              Home
            </NavLink>
            {user && (
              <NavLink to="/user-enrolledCourses" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
                My Learning
              </NavLink>
            )}
            <NavLink to="/about-us" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              Contact Us
            </NavLink>
          </Nav>

          <Form onSubmit={submitHandler} className="d-flex align-items-center position-relative">
  <Form.Control
    className="text-black border-0 px-4 py-2 rounded-pill bg-light search-input pe-5"
    type="search"
    size="sm"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    placeholder="Search..."
    style={{ paddingRight: "50px" }} // Ensure space for the button
  />
  <Button
  onClick={submitHandler}
  variant="warning"
  size="sm"
  className="position-absolute top-50 translate-middle-y rounded-circle p-0 d-flex align-items-center justify-content-center"
  style={{ width: "30px", height: "30px", right: "7px" }} // Increased right value
>
  🔍
</Button>
</Form>

          {isLoading ? (
            <SmallLoader />
          ) : user ? (
            <UserProfileDropdown />
          ) : (
            <>
              <NavLink to="/Login">
                <Button variant="outline-light ms-3 px-4 py-1 rounded-5 fw-bold">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/Register">
                <Button variant="warning outline-light ms-3 px-4 py-1 rounded-5 fw-bold">
                  Sign-Up
                </Button>
              </NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); */

  /*return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        background: "rgba(113, 44, 249, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      className="text-white px-3 py-2"
    >
      <Container fluid>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center text-white fw-bold">
            <SiSololearn size={28} className="text-warning me-2" /> TECHHUB
          </Navbar.Brand>
        </NavLink>
        
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 text-white" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-start">
  <Nav className="me-auto text-center ms-4">
            <NavLink to="/" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              Home
            </NavLink>
            {user && (
              <NavLink to="/user-enrolledCourses" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
                My Learning
              </NavLink>
            )}
            <NavLink to="/about-us" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="nav-link text-white px-3 py-2 rounded-3 hover-link">
              Contact Us
            </NavLink>
          </Nav>
          
          <Form onSubmit={submitHandler} className="d-flex align-items-center position-relative my-2 my-lg-0">
            <Form.Control
              className="text-black border-0 px-4 py-2 rounded-pill bg-light search-input pe-5"
              type="search"
              size="sm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search..."
              style={{ paddingRight: "50px", minWidth: "200px" }}
            />
            <Button
              onClick={submitHandler}
              variant="warning"
              size="sm"
              className="position-absolute top-50 translate-middle-y rounded-circle p-0 d-flex align-items-center justify-content-center"
              style={{ width: "30px", height: "30px", right: "7px" }}
            >
              🔍
            </Button>
          </Form>
          
          <div className="d-flex align-items-center mt-2 mt-lg-0">
            {isLoading ? (
              <SmallLoader />
            ) : user ? (
              <UserProfileDropdown />
            ) : (
              <>
                <NavLink to="/Login">
                  <Button variant="outline-light" className="ms-2 px-3 py-1 rounded-5 fw-bold">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/Register">
                  <Button variant="warning" className="ms-2 px-3 py-1 rounded-5 fw-bold">
                    Sign-Up
                  </Button>
                </NavLink>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); */


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        background: "rgba(145, 95, 247, 0.64)", // Very light shade of #712cf9 with transparency
        backdropFilter: "blur(20px)", // Smooth frosted effect
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
      className="px-3 py-2"
    >
      <Container fluid>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center fw-bold text-dark-gray">
            <div
              style={{
                width: "50px",   /* Adjust the size */
                height: "50px",
                borderRadius: "50%",  /* Makes it round */
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#f8f9fa" /* Optional background */
              }}
            >
              <img
                src={logo}
                alt="TechHub Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <span className="ms-2 techhub-text">TechHub</span>
          </Navbar.Brand>

        </NavLink>

        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 text-dark-gray" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-start">
          <Nav className="me-auto text-center ms-4">
            <NavLink to="/" className="me-2 ms-4 nav-link glass-link text-white">
              Home
            </NavLink>
            {user && (
              <NavLink to="/user-enrolledCourses" className="me-3 ms-3 nav-link glass-link text-white">
                My Learning
              </NavLink>
            )}
            <NavLink to="/about-us" className="me-3 ms-3 nav-link glass-link text-white">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="me-3 ms-3 nav-link glass-link text-white">
              Contact Us
            </NavLink>
          </Nav>

          <Form onSubmit={submitHandler} className="d-flex align-items-center position-relative my-2 my-lg-0">
            <Form.Control
              className="border-0 px-4 py-2 rounded-pill bg-light search-input pe-5 text-dark-gray"
              type="search"
              size="sm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search..."
              style={{ paddingRight: "50px", minWidth: "200px" }}
            />

            <Button
              onClick={submitHandler}
              //variant="warning"
              size="sm"
              className="position-absolute top-50 translate-middle-y rounded-circle p-0 d-flex align-items-center justify-content-center"
              style={{ width: "30px", height: "30px", right: "7px", backgroundColor: "#e4be18" }}
            >
              <img src={searchicon} style={{ width: "16px", height: "16px" }} />
            </Button>
          </Form>

          <div className="d-flex align-items-center mt-2 mt-lg-0">
            {isLoading ? (
              <SmallLoader />
            ) : user ? (
              <UserProfileDropdown />
            ) : (
              <>
                <NavLink to="/Login">
                  <Button variant="outline-light" className="ms-2 px-3 py-1 rounded-5 fw-bold glass-button text-white">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/Register">
                  <Button variant="light" className="ms-2 px-3 py-1 rounded-5 fw-bold glass-button text-dark"
                    style={{ backgroundColor: "white", border: "1px solid white" }}>

                    Sign-Up
                  </Button>
                </NavLink>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
