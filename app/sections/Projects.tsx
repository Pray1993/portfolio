const Projects: React.FC = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: 'Churn Prediction Model', description: 'Predicting customer churn using logistic regression' },
        { title: 'Real-time Analytics Dashboard', description: 'Built using Apache Kafka and Grafana' },
        { title: 'E-commerce Recommendation System', description: 'Collaborative filtering algorithm to personalize product recommendations' },
        { title: 'Fraud Detection Engine', description: 'Machine learning model to identify fraudulent transactions' },
        { title: 'Supply Chain Optimization Tool', description: 'Genetic algorithm for inventory management' },
        { title: 'Customer Segmentation Engine', description: 'K-means clustering based on RFM analysis' },
      ].map((project, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded">
          <h3 className="font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
