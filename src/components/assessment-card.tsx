import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle, CircleDashed } from "lucide-react";
import Link from "next/link";

interface AssessmentCardProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const AssessmentCard = ({
  id,
  title,
  description,
  isCompleted,
}: AssessmentCardProps) => {
  return (
    <>
      <Card className="w-full max-w-sm overflow-hidden hover:border-black shadow-lg">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 bg-gray-200">
          <Link href={`/dashboard/assessment/${id}`}>
            <Button
              className="hover:bg-brand-primary hover:text-white border-gray-600"
              variant="outline"
            >
              Start Test
            </Button>
          </Link>
          {isCompleted ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <CircleDashed className="text-gray-500" />
          )}
        </CardFooter>
      </Card>
    </>
  );
};
