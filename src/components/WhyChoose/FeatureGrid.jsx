import FeatureCard from "./FeatureCard";

const FeatureGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeatureGrid;
