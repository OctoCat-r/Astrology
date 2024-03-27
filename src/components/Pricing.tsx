"use client";
import { useState } from "react";
import styles from "./pricing.module.css";

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
  task: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  {
    id: "1",
    value: "1",
    label: "Question",
    priceSuffix: "",
    task: "Ask any one question and get instant solution",
  },
  {
    id: "2",
    value: "2",
    label: "Kundali",
    priceSuffix: "",
    task: "Get your Kundali analysed completely and get future advice based on your horoscopes",
  },
];

export const tiers: PricingTier[] = [
  {
    name: "Free",
    id: "0",
    href: "/subscribe",
    price: { "1": "Rs. 500", "2": "Rs. 1000" },
    discountPrice: { "1": "", "2": "" },
    description: ``,
    features: [
      `Daily Personal Horoscopes based on the sky today`,
      `Birth Chart + Analysis `,
      `Major astrological events for each day`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Sign up`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const cn = (...args: Array<string | boolean | undefined | null>) =>
  args.filter(Boolean).join(" ");

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const tier = tiers[0];
  const bannerText = "Offer Valid for a Limited Period..!";

  return (
    <div
      className={cn(
        "horoscope flex flex-col w-full items-center py-10",
        styles.fancyOverlay
      )}
    >
      <div id="pricing" className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-black dark:text-white text-6xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
              Pricing
            </h1>
            <p className="text-black dark:text-white mt-6 md:text-xl max-w-prose">
              Know Your Future (अपने भविष्य को जानें): Get personalized guidance
              with Jyotish readings (ज्योतिष पढ़ने के साथ व्यक्तिगत मार्गदर्शन
              प्राप्त करें).<br></br>
              Choose a Package According to Your Needs: We offer various options
              to fulfill your needs ( हम आपकी आवश्यकताओं को पूरा करने के लिए
              विभिन्न विकल्प प्रदान करते हैं).
            </p>
          </div>

          {bannerText ? (
            <div className="flex justify-center mt-4">
              <p className="px-4 py-3 text-xs bg-orange-100 text-black dark:bg-orange-300/60 rounded-xl">
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <div
                role="radiogroup"
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <p className="sr-only">Payment frequency</p>
                {frequencies.map((option) => (
                  <label
                    className={cn(
                      frequency.value === option.value
                        ? "bg-orange-500/90 text-white dark:bg-orange-900/70 dark:text-white/70"
                        : "bg-transparent text-gray-500 hover:bg-orange-500/10",
                      "cursor-pointer rounded-full px-2.5 py-2 transition-all"
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <button
                      value={option.value}
                      id={option.value}
                      className="hidden"
                      role="radio"
                      aria-checked={frequency.value === option.value}
                      onClick={() => {
                        setFrequency(
                          frequencies.find(
                            (f) => f.value === option.value
                          ) as PricingTierFrequency
                        );
                      }}
                    >
                      {option.label}
                    </button>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-300/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
            <div className="p-8 sm:p-10 xl:flex-auto">
              <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">
                Plans
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">
                {tier.description}
              </p>
              <div className="mt-12 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                  Included features
                </h4>
                <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-2 text-sm"
                  >
                    <CheckIcon
                      className="h-6 w-6 flex-none text-orange-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
              <div
                className={cn(
                  "rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-300/50 dark:ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16",
                  styles.fancyGlass
                )}
              >
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span
                      className={cn(
                        "text-black dark:text-white text-5xl font-bold tracking-tight",
                        tier.discountPrice &&
                          tier.discountPrice[
                            frequency.value as keyof typeof tier.discountPrice
                          ]
                          ? "line-through"
                          : ""
                      )}
                    >
                      {typeof tier.price === "string"
                        ? tier.price
                        : tier.price[frequency.value]}
                    </span>

                    <span className="text-black dark:text-white">
                      {typeof tier.discountPrice === "string"
                        ? tier.discountPrice
                        : tier.discountPrice[frequency.value]}
                    </span>

                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                      {frequency.priceSuffix}
                    </span>
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-8 flex-shrink-0"
                  >
                    {/* <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-300/70 text-orange-foreground hover:bg-orange-300/90 dark:bg-orange-700 dark:hover:bg-orange-700/90 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md">
                      {tier.cta}
                    </button> */}
                  </a>
                  <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
                    {frequency.task}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
