import React from 'react'
import policies from "@/assets/legal/privacy.json";
import { Footer } from '@/components/footer';
import LogoSVG from '@/assets/icons/logo';

export default function Home() {


    return (
        <main className='h-screen w-screen overflow-x-hidden min-w-[280px] '>
            <div className='w-full h-[250px] md:h-[300px] bg-primary-700 flex  flex-col gap-y-4 justify-center items-center bg-gray-200 pt-4 pb-4'>
                <div className='h-1/2'>
                    <LogoSVG width='100%' height='100%' />
                </div>
                <h1 className="text-black text-4xl md:text-5xl text-center">TCube Privacy Policy</h1>
            </div>
            <div className='w-full relative justify-center flex marginLegal pt-5 pb-20 xl:px-56 text-black bg-white'>
                <div className='w-full max-w-[1440px] min-w-[280px] relative px-4 md:px-16 xl:px-20 pt-4 md:pt-8'>
                    <p className="mb-4">Qews built the T-Cube game as an Ad-supported game. This SERVICE is provided by Qews at no cost and is intended for use as is.</p>
                    <p className="mb-4">This page is used to inform visitors regarding our policies regarding the collection, use, and disclosure of Personal Information if anyone decides to use our Service.</p>
                    <p className="mb-4">If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                    <p className="mb-4">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at T-Cube unless otherwise defined in this Privacy Policy.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Information Collection and Use</h2>
                    <p className="mb-4">For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.</p>
                    <p className="mb-4">The game does use third-party services that may collect information used to identify you.</p>
                    <p className="mb-4">Link to privacy policy of third-party service providers used by the game:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li><a href='https://www.google.com/policies/privacy/' className='cursor-pointer text-blue-950 font-bold'>Google Play Services</a></li>
                        <li><a href='https://support.google.com/admob/answer/6128543?hl=en' className='cursor-pointer text-blue-950 font-bold'>AdMob</a></li>
                        <li><a href='https://firebase.google.com/policies/analytics' className='cursor-pointer text-blue-950 font-bold'>Firebase Analytics</a></li>
                        <li><a href='https://firebase.google.com/terms/crashlytics' className='cursor-pointer text-blue-950 font-bold'> Firebase Crashlytics</a></li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Log Data</h2>
                    <p className="mb-4">We want to inform you that whenever you use our Service, in a case of an error in the game we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the game when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Cookies</h2>
                    <p className="mb-4">Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>

                    <p className="mb-4">This Service does not use these “cookies” explicitly. However, the game may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Service Providers</h2>
                    <p className="mb-4">We may employ third-party companies and individuals due to the following reasons:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p className="mb-4">We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Security</h2>
                    <p className="mb-4">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Links to Other Sites</h2>
                    <p className="mb-4">This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Children’s Privacy</h2>
                    <p className="mb-4">These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take the necessary actions.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
                    <p className="mb-4">We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
                    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:Support@etlog.co" className="text-blue-500 underline">Support@etlog.co</a>.</p>

                </div>
            </div>
            <Footer />
        </main >
    )
}

