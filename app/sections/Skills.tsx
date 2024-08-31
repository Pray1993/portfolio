import React from 'react';

const skills = [
  { name: 'Python', size: 'text-2xl' },
  { name: 'SQL', size: 'text-xl' },
  { name: 'Apache Airflow', size: 'text-lg' },
  { name: 'Google Cloud Platform', size: 'text-xl' },
  { name: 'Docker', size: 'text-lg' },
  { name: 'Kubernetes', size: 'text-base' },
  { name: 'Spark', size: 'text-xl' },
  { name: 'Hadoop', size: 'text-lg' },
  { name: 'ETL', size: 'text-2xl' },
  { name: 'Data Warehousing', size: 'text-xl' },
  { name: 'Big Data', size: 'text-2xl' },
  { name: 'AWS', size: 'text-lg' },
  { name: 'Scala', size: 'text-base' },
  { name: 'Hive', size: 'text-lg' },
  { name: 'Kafka', size: 'text-xl' },
  { name: 'Machine Learning', size: 'text-lg' },
  { name: 'Data Modeling', size: 'text-xl' },
  { name: 'NoSQL', size: 'text-lg' },
  { name: 'Tableau', size: 'text-base' },
  { name: 'Git', size: 'text-lg' },
];

const getRandomColor = () => {
  const colors = ['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-red-500', 'text-purple-500'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomAnimation = () => {
  const animations = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];
  return animations[Math.floor(Math.random() * animations.length)];
};

const Skills: React.FC = () => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center items-center gap-4">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className={`${skill.size} ${getRandomColor()} ${getRandomAnimation()} font-semibold px-3 py-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition duration-300 cursor-default`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
