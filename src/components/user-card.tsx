"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Tickets,
  UserRound,
  Presentation,
} from "lucide-react";

type UserData = {
  full_name: string;
  age: string;
  job: string;
  country: string;
  motivation: string;
  phone_number: string;
  meeting: string;
  package_level: string;
  email: string;
};

export function UserCard({ user }: { user: UserData }) {
  const packageType =
    {
      1: "شهرية",
      2: "المستوى",
      3: "باقات كاملة",
    }[user.package_level] || "";

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .catch((err) => console.error("Gagal menyalin:", err));
  };

  return (
    <Card className="w-full max-w-full mx-4">
      <CardHeader className="pb-2 pt-3 border-b-2 border-b-gray-400 rounded-t-lg">
        <div className="flex  justify-between items-center">
          <div>
            {/* <Button
              className="text-black bg-emerald-300 hover:bg-brand-dark"
              variant="outline"
              size="sm"
            >
              <Edit className="w-4 h-4 mr-2 " />
              Edit Profile
            </Button> */}
          </div>
          <div>
            <CardTitle className="text-2xl">{user.full_name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-0">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-1 mb-4" dir="rtl">
          <div className="flex items-center gap-2">
            <UserRound className="w-4 h-4 text-muted-foreground" />
            <span> العمر : {user.age} </span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <span> الوظيفة : {user.job}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span> المدينة والدولة : {user.country}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>رقم واتساب : {user.phone_number}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tickets className="w-4 h-4 text-muted-foreground" />
            <span className="p-1 bg-gray-200 text-black font-medium rounded-md">
              باقات : {packageType}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Presentation className="w-4 h-4 text-muted-foreground" />
            <span>مقابلة : {user.meeting}</span>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={() => copyText(user.email)}
            title="Klik untuk menyalin"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="truncate">{user.email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
