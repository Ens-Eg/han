import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../../styles/style.css'; // Custom CSS for sticky position

function StickyButtons() {
  return (
    <div className="sticky-buttons">
      {/* Phone Icon */}
      <a href="tel:+201005125340" className="sticky-btn phone-btn">
        <FaPhone size={40} />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/01143408121"
        className="sticky-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
}

export default StickyButtons;
