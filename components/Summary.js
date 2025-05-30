function Summary() {
  try {
    return (
      <section data-name="summary" data-file="components/Summary.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Summary</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A Senior Full-Stack Developer with over 14 years of experience in software development, 
              specializing in Agile/Scrum methodologies, API design and development, and web and mobile 
              application development. I possess a robust technical foundation with expertise in frontend 
              and backend technologies, RDBMS, and cloud platforms, enabling the delivery of scalable 
              and high-performing solutions across diverse industries such as banking, healthcare, 
              telecommunications, and blockchain.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Summary component error:', error);
    reportError(error);
  }
}
