"use client";
import { AssessmentCard } from "@/components/assessment-card";
import { getAssessments, getCompletedAssessment } from "@/actions/action";
import { useEffect, useState } from "react";
import CustomLoading from "@/components/ui/custom-loading";
import { useProfileStore } from "@/lib/store";

export default function Assessment() {
  const [nextAssessment, setNextAssessment] = useState<any | null>(null);
  const [completedAssessment, setCompletedAssessment] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { profile } = useProfileStore();
  useEffect(() => {
    const fetchAssessment = async () => {
      if (profile) {
        try {
          const { nextAssessment, error: message } = await getAssessments(
            profile.id
          );
          const { completedAssessment, error } = await getCompletedAssessment(
            profile.id
          );

          if (error) {
            setError(`Error fetching assessments. Please try again later.`);
            return;
          }

          setNextAssessment(nextAssessment);
          setCompletedAssessment(completedAssessment || []);
        } catch (fetchError) {
          setError(`Error fetching assessments. Please try again later.`);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAssessment();
  }, [profile]);

  if (loading) {
    return <CustomLoading />;
  }

  if (error) {
    return (
      <p className="flex justify-center items-center text-red-500">{error}</p>
    );
  }

  return (
    <div className="px-4" dir="rtl">
      <h1 className="text-xl font-semibold mb-4 mt-3 text-right">
        الامتحانات المتاحة:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {nextAssessment && (
          <AssessmentCard
            id={nextAssessment.id}
            title={nextAssessment.title}
            description={nextAssessment.description}
            isCompleted={false}
          />
        )}
      </div>
      <h1 className="text-xl font-semibold mb-4 mt-3 text-right">
        الامتحانات المكتمل:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {completedAssessment.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            id={assessment.assessment_id}
            title={assessment.assessment_title}
            description={assessment.description}
            isCompleted={true}
          />
        ))}
      </div>
    </div>
  );
}
