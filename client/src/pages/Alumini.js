import React from 'react';
import Layout from '../components/Layout/layout';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'; // Icons for better UI
// Assuming CSS is already styled

const alumniData = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    image: 'download.png',
    position: 'Software Engineer at ABC Corp',
    graduationYear: 2020,
    achievements: 'Developed an award-winning app.',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    image: 'download.png',
    position: 'Data Scientist at XYZ Inc',
    graduationYear: 2019,
    achievements: 'Published research in top journals.',
  },
  // Add more alumni objects if needed
];

const Alumini = () => {
  return (
    <Layout title="Alumni - PROLEARN CONNECT">
      {/* Navigation Bar */}
      

      {/* Alumni Profiles Section */}
      <section id="alumni" className="alumni-container">
        {alumniData.map((alumnus, index) => (
          <div key={index} className="alumni-profile">
            <div className="profile-image">
              <img src={alumnus.image} alt={alumnus.name} />
            </div>
            <h3>{alumnus.name}</h3>
            <p>{alumnus.position}</p>
            <p>Graduated: {alumnus.graduationYear}</p>
            <p>Achievements: {alumnus.achievements}</p>

            {/* Contact Information with Icons */}
            <div className="contact-info">
              <p><BiMailSend /> {alumnus.email}</p>
              <p><BiPhoneCall /> {alumnus.phone}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Alumini;
