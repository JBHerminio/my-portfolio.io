import React from 'react';
import "./Services.css";

function Services() {
  return (
    <>
      <section class="services" id="services">
        <div class="max-width">
          <h2 class="title">Services</h2>
          <div class="serv-content">
            <div class="card">
              <div class="box">
                <i class="fas fa-paint-brush"></i>
                <div class="text">Web Design</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-chart-line"></i>
                <div class="text">Advertising</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-code"></i>
                <div class="text">Apps Design</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
