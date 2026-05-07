import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';

const Dashboard = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hiredWorkers, setHiredWorkers] = useState([]);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const design = localStorage.getItem('selectedDesign');
    const pkg = localStorage.getItem('selectedPackage');
    const workers = localStorage.getItem('hiredWorkers');

    if (design) setSelectedDesign(JSON.parse(design));
    if (pkg) setSelectedPackage(JSON.parse(pkg));
    if (workers) setHiredWorkers(JSON.parse(workers));
  }, []);

  const projectStages = [
    { name: "Site Preparation", status: "completed", progress: 100 },
    { name: "Foundation", status: "completed", progress: 100 },
    { name: "Plinth Level", status: "in-progress", progress: 60 },
    { name: "Super Structure", status: "pending", progress: 0 },
    { name: "Roofing", status: "pending", progress: 0 },
    { name: "Finishing", status: "pending", progress: 0 }
  ];

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <section className="dashboard-header">
        <div className="section-container">
          <div className="welcome-banner">
            <div>
              <h1>Construction Dashboard</h1>
              <p>Project ID: #SKY-2026-001 | Status: Active</p>
            </div>
            <div className="overall-progress">
              <div className="progress-circle">
                <span>{progress}%</span>
              </div>
              <p>Total Progress</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="dashboard-grid">
          {/* Main Column: Project Timeline */}
          <div className="dashboard-main">
            <ScrollReveal direction="up">
              <div className="dashboard-card timeline-card">
                <h2>Construction Timeline</h2>
                <div className="timeline">
                  {projectStages.map((stage, index) => (
                    <div key={index} className={`timeline-item ${stage.status}`}>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <div className="stage-info">
                          <h3>{stage.name}</h3>
                          <span>{stage.status === 'completed' ? '100%' : `${stage.progress}%`}</span>
                        </div>
                        <div className="stage-progress-bar">
                          <div 
                            className="bar-fill" 
                            style={{ width: stage.status === 'completed' ? '100%' : `${stage.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="dashboard-card">
                <h2>Project Live Updates</h2>
                <div className="live-updates">
                  <div className="update-item">
                    <div className="update-img" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=300)'}}></div>
                    <div className="update-text">
                      <span className="update-time">2 hours ago</span>
                      <p>Foundation curing process initiated. Inspection scheduled for tomorrow.</p>
                    </div>
                  </div>
                  <div className="update-item">
                    <div className="update-img" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=300)'}}></div>
                    <div className="update-text">
                      <span className="update-time">Yesterday</span>
                      <p>Material delivery: 500 bags of Grade 53 cement received at site.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Column: Summary & Team */}
          <div className="dashboard-sidebar">
            <ScrollReveal direction="left">
              <div className="dashboard-card summary-card">
                <h2>Project Summary</h2>
                {selectedDesign && (
                  <div className="summary-item">
                    <span className="label">Selected Design</span>
                    <span className="value">{selectedDesign.title}</span>
                  </div>
                )}
                {selectedPackage && (
                  <div className="summary-item">
                    <span className="label">Construction Package</span>
                    <span className="value">{selectedPackage.name}</span>
                  </div>
                )}
                <div className="summary-item">
                  <span className="label">Est. Completion</span>
                  <span className="value">October 2026</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="dashboard-card team-card">
                <h2>Assigned Team</h2>
                <div className="team-list">
                  {hiredWorkers.map(worker => (
                    <div key={worker.id} className="team-member">
                      <img src={worker.image} alt={worker.name} />
                      <div>
                        <h4>{worker.name}</h4>
                        <span>{worker.role}</span>
                      </div>
                    </div>
                  ))}
                  {hiredWorkers.length === 0 && (
                    <p className="no-team">No professionals assigned yet.</p>
                  )}
                </div>
                <button className="btn-secondary full-width" style={{marginTop: '15px'}}>Message Team</button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
