"use client"
import React from 'react';

import Link from 'next/link';
// visa card 4000003560000008

export default function PreviewPage() {
  

  return (
    <div>
    <Link href="https://buy.stripe.com/test_fZebKm7b43Qj77yaEG">
    <button
    className='p-2 bg-black text-white'>Proceed to PAy</button></Link>
    
    </div>
  );
}