import Head from "next/head";
//import { Inter } from "next/font/google";
import { Layout } from "@/layout";

//const inter = Inter({ subsets: ["latin"] });
import { Banner, ContactUsHeader, EnquiryForm } from "@/components/pages";
export default function Home() {
  return (
    <>
      <Head>
        <title>Acquiring | Contact Us</title>
        <meta name="title" content="Acquiring | Contact Us" />
        <meta name="description" content="Is there anything I can help you with? Fill out this form and we'll get in touch with you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/contactUs/" />
        <meta name="robots" content="index, follow" />
      </Head>
      {/*<main> */}
     <main>
        
        <Layout>
        <div className="row">
          <div className="col-12">
            <ContactUsHeader />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <EnquiryForm />
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
