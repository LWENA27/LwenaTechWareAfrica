import React from "react";
import Link from "next/link";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Check Your Email - Lwena TechWareAfrica",
  description: "Please verify your email address to complete registration",
};

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Check Your Email
          </h1>

          {/* Message */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-amber-600 mb-4">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Verification Email Sent</span>
            </div>
            
            <p className="text-gray-600 mb-4">
              We've sent a verification link to your email address. 
              Please click the link to activate your account.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-left">
              <p className="font-semibold text-blue-800 mb-2">Next steps:</p>
              <ol className="list-decimal list-inside space-y-1 text-blue-700">
                <li>Check your inbox (and spam folder)</li>
                <li>Click the verification link</li>
                <li>Login to your account</li>
                <li>Start your 3-month free trial!</li>
              </ol>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/login"
              className="block w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
            >
              Go to Login
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Back to Home
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-sm text-gray-500">
            <p>Didn't receive the email?</p>
            <p className="mt-1">
              Check your spam folder or{" "}
              <Link href="/contact" className="text-amber-600 hover:text-amber-700 underline">
                contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
