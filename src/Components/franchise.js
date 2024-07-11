import React, { useState, useEffect } from 'react';
import background from '../Assets/frenshize.png';

const Franchise = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, []);

  return (
    <div>
      <div
        style={{
          paddingTop: "30px",
          width: "100%", // Full viewport width
          height: "100vh", // Full viewport height
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Ensure proper background size
          backgroundPosition: "center",
         
        }}
      >
        <div style={{
          padding: "20px",
          margin: "0 auto",
          paddingLeft: "5%",
          paddingRight: "5%",
        }} className="contact-container sm:mt-5 lg:flex lg:justify-between lg:mt-0">
          <div style={{
            flex: 1,
            paddingRight: "20px",
            marginTop: "4%",
          }} className="contact-details">
            <strong><h1 style={{
              fontSize: "48px",
              color: "hsl(204, 93%, 55%)",
              marginBottom: "20px",
              marginTop: "2%",
            }} className='Contactheading'>Get In Touch</h1></strong>
            <p style={{
              margin: "10px 0",
              marginTop: "2%",
            }}>
              "Your questions and feedback are important to us. Reach out, and we'll get back to you as soon as we can. We're here to help!"
            </p>
            <p style={{
              margin: "10px 0",
              marginTop: "2%",
            }}>
              <i className="fas fa-map-marker-alt"></i> Plot A2B, Lucerna Tower Noida, 201301, UP India.
            </p>
            <p style={{
              margin: "10px 0",
              marginTop: "2%",
            }}>
              <i className="fas fa-phone"></i> 0120 - 6846200
            </p>
            <p style={{
              margin: "10px 0",
              marginTop: "2%",
            }}>
              <i className="fas fa-envelope"></i> info@djtcorp.in
            </p>
          </div>
          <form style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: "2%",
          }} className="contact-form bg-[#243c62] p-8" onSubmit={handleSubmit}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2%",
            }} className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{
              display: "flex",
              marginTop: "2%",
            }} className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{
              display: "flex",
              marginTop: "2%",
            }} className="form-group">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{
              display: "flex",
              marginTop: "2%",
            }} className="form-group">
              <textarea
                type="text"
                name="Your Question"
                placeholder="Your Question"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button type="submit" className='contact-button' style={{
              backgroundColor: "#6366f1",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px",
            }}>Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Franchise;
