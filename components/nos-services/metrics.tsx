import React from "react";

interface MetricItem {
  value: string | number;
  label: string;
}

interface MetricsProps {
  metrics?: MetricItem[];
}

const Metrics: React.FC<MetricsProps> = ({
  metrics = [
    { value: "Insert Value", label: "Insert Label" },
    { value: "Insert Value", label: "Insert Label" },
    { value: "Insert Value", label: "Insert Label" },
  ],
}) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-16">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col justify-center">
          <div className="mx-auto pb-4 text-5xl font-bold md:pb-16 md:text-9xl">
            {metric.value}
          </div>
          <div className="mx-auto max-w-48 text-center text-xl md:max-w-72 md:text-3xl">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
