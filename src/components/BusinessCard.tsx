import React from 'react';
import { Mail, Globe } from 'lucide-react';
import './BusinessCard.css';

interface BusinessCardProps {
    name?: string;
    title?: string;
    email?: string;
    businessEmail?: string;
    phone?: string;
    website?: string;
    theme?: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
    name = "Sushanth Kasturi",
    title = "Founder and CEO",
    email = "pranav@example.com",
    businessEmail,
    phone = "+91 93466 72015",
    website = "pranav.avlok.ai",
    theme = ""
}) => {
    return (
        <div className={`business-card-container ${theme}`}>
            {/* FRONT FACE */}
            <div className="card card-front">
                <div className="card-content front-content">
                    <div className="logo-section front-center-stack">
                        <img src="/avlokai_logo_transparent.png" alt="AvlokAI Logo" className="logo-image" />
                        <h1 className="front-company-name">AvlokAI</h1>
                    </div>
                </div>
            </div>

            {/* BACK FACE */}
            <div className="card card-back">
                <div className="card-content back-content">

                    {/* LEFT COLUMN: Name and Contact */}
                    <div className="contact-section">
                        <div>
                            <h1 className="back-name">{name}</h1>
                            {title && <h2 className="back-title">{title}</h2>}
                        </div>

                        <div className="contact-details">
                            <div className="contact-row">
                                <Mail className="contact-icon" size={16} />
                                <span>{email}</span>
                            </div>
                            {businessEmail && (
                                <div className="contact-row">
                                    <Mail className="contact-icon" size={16} />
                                    <span>{businessEmail}</span>
                                </div>
                            )}
                            {phone && (
                                <div className="contact-row">
                                    <span className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </span>
                                    <span>{phone}</span>
                                </div>
                            )}
                            <div className="contact-row">
                                <Globe className="contact-icon" size={16} />
                                <span>{website}</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: QR Code */}
                    <div className="qr-section">
                        <div className="qr-wrapper">
                            <img
                                src="/qr-code.png"
                                alt="Portfolio QR Code"
                                className="qr-image"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
