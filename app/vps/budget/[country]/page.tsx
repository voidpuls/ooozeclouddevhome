'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BudgetVPS from '../page';

// Country code to full name mapping
const countryNames = {
  us: "United States",
  uk: "United Kingdom",
  tr: "Turkey",
  pl: "Poland"
};

export default function CountryBudgetVPS() {
  const params = useParams();
  const router = useRouter();
  const country = params.country as string;

  useEffect(() => {
    // Redirect to main budget VPS page if country code is invalid
    if (!countryNames[country as keyof typeof countryNames]) {
      router.push('/vps/budget');
    }
  }, [country, router]);

  // If country code is valid, render the BudgetVPS component
  // The country selector will automatically select the current country
  return <BudgetVPS defaultCountry={country} />;
} 