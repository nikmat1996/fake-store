"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Slider } from "./Silder";

const PriceRange: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize the state with the values from the URL, or default values if not present
  const initialMin = Number(searchParams.get('min')) || 5;
  const initialMax = Number(searchParams.get('max')) || 1000;

  const [range, setRange] = useState<[number, number]>([initialMin, initialMax]);

  const handleRangeChange = (value: [number, number]) => {
    setRange(value);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('min', value[0].toString());
    params.set('max', value[1].toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const min = Number(searchParams.get('min')) || 5;
    const max = Number(searchParams.get('max')) || 1000;
    setRange([min, max]);
  }, [searchParams]);

  return (
    <div className="w-full max-w-48 ml-auto mb-2">
        <p className="text-xs text-gray-600 mb-2">Select a price range:</p>
        <Slider
            defaultValue={[5, 1000]}
            max={1000}
            min={5}
            step={1}
            value={range}
            onValueChange={handleRangeChange}
            formatLabel={(value) => `$${value}`}
        />
    </div>
  );
}

export default PriceRange;

