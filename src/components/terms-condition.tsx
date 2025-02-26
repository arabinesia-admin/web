import { Separator } from "@/components/ui/separator";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using the services provided by ARABINESIA you agree
            to be bound by these Terms &amp; Conditions (&quot;Terms&quot;). If
            you do not agree to these Terms, you must not access or use the
            Service.
          </p>
        </div>
        <Separator />
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. User Accounts and Password Management
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account Creation:</strong> By creating an account, you
              agree to provide accurate and complete information.
            </li>
            <li>
              <strong>Password Security:</strong> You are responsible for
              maintaining the confidentiality of your password. You must not
              share your password with anyone. If you suspect that your password
              has been compromised, you must change it immediately.
            </li>
            <li>
              <strong>Account Suspension:</strong> We reserve the right to
              suspend or terminate your account if we suspect any unauthorized
              use or violation of these Terms.
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">3. User Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Data Collection:</strong> We collect personal information
              from you when you register for an account, use our Service, or
              communicate with us.
            </li>
            <li>
              <strong>Data Usage:</strong> We use your personal information to
              provide and improve our Service.
            </li>
            <li>
              <strong>Data Protection:</strong> We take reasonable steps to
              protect your personal information.
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Prohibited Activities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spreading Content:</strong> You agree not to spread,
              share, or distribute any content from the Service without explicit
              permission from ARABINESIA Company.
            </li>
            <li>
              <strong>Downloading Videos:</strong> You are prohibited from
              downloading any videos or other media content from the Service
              unless explicitly permitted by ARABINESIA. Unauthorized
              downloading may result in legal action.
            </li>
            <li>
              <strong>Unauthorized Use:</strong> You agree not to use the
              Service for any unauthorized purposes, including but not limited
              to, hacking, spamming, or any other activities that may disrupt
              the Service or violate any laws or regulations.
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Content Ownership:</strong> All content on the Service,
              including text, graphics, logos, images, and software, is the
              property of ARABINESIA or its licensors and is protected by
              copyright laws.
            </li>
            <li>
              <strong>Usage Rights:</strong> You are granted a limited,
              revocable, non-exclusive, and non-transferable license to use the
              Service for personal, non-commercial purposes only.
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Disclaimer of Warranties:</strong> The Service is provided
              &quot;as is&quot; without any warranties.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> ARABINESIA is not liable
              for any damages arising from Service use.
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions, contact us at:
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: arabinesiainternational@gmail.com</li>
              <li>Phone: +62 851 8312 8320</li>
            </ul>
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p className="text-gray-700">
            These Terms &amp; Conditions are governed by and construed in
            accordance with the laws of Indonesia.
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms &amp; Conditions at any
            time. Continued use constitutes acceptance of the new Terms.
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            10. Compliance with Class Rules
          </h2>
          <p className="text-gray-700">
            Registrants agree to comply with all rules and regulations
            established by the organizer during the online class.
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            11. Assessment and Certification
          </h2>
          <p className="text-gray-700">
            Registrants agree that the results of assessments and certifications
            are determined by the organizer and are final.
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            12. Payment and Refund Policy
          </h2>
          <p className="text-gray-700">
            Registrants agree to pay the registration fee in accordance with the
            applicable terms and understand that the refund policy is determined
            by the organizer.
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-2">
            13. Cancellation Policy
          </h2>
          <p className="text-gray-700">
            Registrants agree to follow the cancellation procedures established
            by the organizer if they wish to cancel their registration.
          </p>
        </div>
      </div>
    </div>
  );
}
