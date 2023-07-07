'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect (() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])


  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag("consent", 'update', {
      'analytics_storage': newValue
    });

    setLocalStorage("cookie_consent", cookieConsent)

    //For Testing
    console.log("Cookie Consent: ", cookieConsent)

  }, [cookieConsent]);
  return (
    <div className={`${cookieConsent != null ? "hidden" : "flex"} bg-white border border-dashed border-gray-400 bottom-0 fixed flex flex-col gap-4 items-center justify-between left-0 max-w-max md:max-w-screen-sm md:px-4 mx-auto my-10 px-3 py-3 right-0 rounded-lg shadow-lg sm:flex-row`}>

      <div className='text-center'>
        <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
      </div>


      <div className='flex gap-2'>
        <button onClick={() => setCookieConsent(false)} className='px-5 py-2 text-gray-800 rounded-md border border-gray-200'>Decline</button>
        <button onClick={() => setCookieConsent(true)} className='bg-gray-800 px-5 py-2 text-white rounded-lg'>Allow Cookies</button>
      </div>
    </div>
  )}