"use client";
import React, { useState } from "react";
import { CircleCheck, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAssessmentTitle, updateProgress } from "@/actions/action";
import Swal from "sweetalert2";
import { useProfileStore } from "@/lib/store";
interface ExamResultProps {
  examId: string;
  score: number;
  totalQuestions: number;
  resetTest: () => void;
}

export const ExamResult: React.FC<ExamResultProps> = ({
  examId,
  score,
  totalQuestions,
  resetTest,
}) => {
  const percentage = (score / totalQuestions) * 100;
  const isPassing = percentage >= 90;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { profile } = useProfileStore();

  async function handleUpdateScore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { assessment, error } = await getAssessmentTitle(examId);
      if (error) {
        Swal.fire({
          text: "Failed to update the result",
          icon: "error",
          customClass: {
            confirmButton: "alert-button",
          },
        });
        return;
      }
      const assessmentTitle = assessment.title;
      if (profile) {
        const { success, message } = await updateProgress(
          profile.id,
          examId,
          assessmentTitle
        );
        if (success === false) {
          Swal.fire({
            text: `${message}`,
            icon: "error",
            customClass: {
              confirmButton: "alert-button",
            },
          });
          return;
        }
        Swal.fire({
          text: `${message}`,
          icon: "success",
          confirmButtonText: "نعم",
          customClass: {
            confirmButton: "alert-button",
          },
        }).then(() => {
          router.push("/dashboard/assessment");
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Failed to update the result",
        icon: "error",
        customClass: {
          confirmButton: "alert-button",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="font-tajawal text-right rtl: bg-gradient-to-br bg-white flex mt-8 items-center justify-center">
      <div className="text-center">
        {isPassing ? (
          <CircleCheck className="w-24 h-24 mx-auto text-green-500 mb-7" />
        ) : (
          <XCircle className="w-24 h-24 mx-auto text-red-500 mb-7" />
        )}
        <h2 className="text-3xl font-bold mb-2">
          {isPassing ? "لقد نجحت في الامتحان" : "لقد فشلت في الامتحان"}
        </h2>
        <p className="text-gray-600 mb-6">
          score: {score} / {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className={`h-2.5 rounded-full ${
              isPassing ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-4xl font-bold mb-8">{percentage.toFixed(0)}%</p>
        {isPassing ? (
          <div className="flex gap-2">
            <form onSubmit={handleUpdateScore}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark"
              >
                {isSubmitting ? "Submitting..." : "حفظ النتيجة"}
              </button>
            </form>
            <button
              onClick={resetTest}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
            >
              أعد الاختبار
            </button>
          </div>
        ) : (
          <button
            onClick={resetTest}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
          >
            أعد الاختبار
          </button>
        )}
      </div>
    </div>
  );
};
