import React from "react";

const ErrorComponent = () => {
  throw new Error();
  
  return (
    
    <main className="animate__animated animate__bounceIn">
      <section className="error__section section">
        <div className="section__header">
          <h3>ErrorBoundary Page</h3>
          <div className="underline"></div>
        </div>

        <article className="error container">
          <div className="errorfall-text">
            <h2>Page for testing ErrorBoundary😎</h2>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ErrorComponent;