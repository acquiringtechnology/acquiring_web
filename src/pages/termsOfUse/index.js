/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Layout } from "@/layout";

function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Acquiring | Terms & Policies</title>
        <meta name="title" content="Acquiring | Terms & Policies" />
        <meta
          name="description"
          content="Review Acquiring Technology's Privacy Policy, Terms & Conditions, and Refund Policy. Clear, transparent, and customer-friendly guidelines."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/terms/" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <Layout>
         <div className="row">
            <div className="col-12">
              <div className="app-theme-bg">
           <div className="container mx-auto px-4 py-12 pt-5">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Page Title */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">
                  Terms & Policies
                </h1>
                <p className="mt-3 text-gray-600 text-lg">
                  Please review our policies carefully before using our platform.
                </p>
              </div>

              {/* Privacy Policy */}
              <section className=" p-6 md:p-10 rounded-2xl  ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Privacy Policy describes how <strong>Acquiring Technology</strong> 
                  and its affiliates ("we", "our", "us") collect, use, and protect 
                  your personal information while you interact with our website{" "}
                  <a href="https://www.acquiring.in" className="text-blue-600 underline">
                    https://www.acquiring.in
                  </a>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We collect personal details such as name, contact information, 
                  and payment details only to provide and improve our services. 
                  Your data is stored securely and will not be shared without your consent, 
                  except as required by law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our platform, you agree to our Privacy Policy and consent 
                  to the collection and processing of your information in accordance 
                  with applicable Indian laws.
                </p>
              </section>

              {/* Terms & Conditions */}
              <section className=" p-6 md:p-10 rounded-2xl  ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Terms & Conditions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Use govern your use of our website, services, 
                  and tools. By accessing or using the platform, you agree to be 
                  bound by these terms.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You must provide accurate and complete information during registration.</li>
                  <li>You may not use our services for unlawful or prohibited activities.</li>
                  <li>We reserve the right to modify these Terms at any time.</li>
                  <li>All disputes will be subject to the jurisdiction of courts in Chennai, Tamil Nadu.</li>
                </ul>
              </section>

              {/* Refund Policy */}
              <section className=" p-6 md:p-10 rounded-2xl  ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Refund Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your refund request is approved, the amount will be credited 
                  back to your original payment method within 10 business days. 
                  Please note that banks and credit card providers may take additional 
                  time to process refunds.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If more than 7 business days have passed since your refund approval, 
                  please contact us at{" "}
                  <a
                    href="mailto:acquiringtechnology@gmail.com"
                    className="text-blue-600 underline"
                  >
                    acquiringtechnology@gmail.com
                  </a>.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-r from-red-600 to-black text-white p-6 md:p-10 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-2">For any queries, please reach out:</p>
                <p className="mb-0 pb-3">
                  <strong>V Jayashree</strong> <br />
                  Founder, Acquiring Technology <br />
                  📧{" "}
                  <a
                    href="mailto:jayashree.acquiring@gmail.com"
                    className="underline"
                  >
                    jayashree.acquiring@gmail.com
                  </a>{" "}
                  <br />
                  📞 9042771660
                </p>
              </section>
            </div>
          </div>
         </div>
         </div>
         </div>
        </Layout>
      </main>
    </>
  );
}

export default TermsOfUse;
