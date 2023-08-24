import React from "react";
import { useRouter } from "next/navigation";
import TripPlan from "@/components/tripPlan"

const Plan = () => {
  // const router =. useRouter();
  // const data = router.query;

  // console.log(data);

  return (
    <section>
      <TripPlan />
    </section>
  );
};

export default Plan;
