const Interests: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">Interests</h2>
    <div className="flex flex-wrap gap-4">
      {['Data Visualization', 'Machine Learning', 'Natural Language Processing', 'Deep Learning', 'Reinforcement Learning', 'Time Series Forecasting'].map((interest) => (
        <span key={interest} className="bg-gray-800 px-3 py-1 rounded">{interest}</span>
      ))}
    </div>
  </section>
);

export default Interests;
