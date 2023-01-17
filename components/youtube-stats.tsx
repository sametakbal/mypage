"use client";

import MetricCard from "@/components/metric-card";
import { useEffect, useState } from "react";

export default function YoutubeStats() {
  const [data, setData] = useState(null);

  const fetchData = async () => { };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      <MetricCard href={"youtube"} data={700}>
        Youtube Subscribers
      </MetricCard>
      <MetricCard href={"youtube"} data={150000}>
        Youtube Views
      </MetricCard>
    </div>
  );
}
