"use client"

import { Button } from "./ui/button"
import { useTheme } from "@/hooks/useTheme"
import { sendGAEvent } from "@/components/GoogleAnalytics"

const CoinGeckoWidget = ({ currency, fiatName}: {
  currency: string,
  fiatName: string
}) => {
  const isDark = useTheme()
  console.log('currency, fiatName :>> ', currency, fiatName);

  // const onButtonBuyUSD = () => {
  //   console.log('on button buy usd :>> ');
  //   sendGAEvent("buy_in_usd", {});
  // };

  // const onButtonBuyCrypto = () => {
  //   console.log('on button buy crypto :>> ');
  //   sendGAEvent("buy_in_crypto", {});
  // };

  const onButtonSubscirbe = () => {
    console.log('on button onButtonSubscirbe :>> ');
    sendGAEvent('subscirbe', {})
  };

  return (
    <div className="w-[320px]">
      <gecko-coin-list-widget
        locale="en"
        outlined="true"
        coin-ids=""
        initial-currency={currency}
        {...(isDark ? { "dark-mode": "true" } : {})}
      >
      </gecko-coin-list-widget>
      <div className="flex flex-col gap-2 mt-4">
      <Button 
          className="w-full flex items-center justify-center gap-2 bg-background hover:bg-accent text-foreground border border-foreground/20 hover:border-foreground/40"
          onClick={onButtonSubscirbe}
        >
        Subscrible Now!
        </Button>
        {/* <Button 
          className="w-full flex items-center justify-center gap-2 bg-background hover:bg-accent text-foreground border border-foreground/20 hover:border-foreground/40"
          onClick={onButtonBuyUSD}
        >
          Buy in USD <span className="text-lg">$</span>
        </Button>
        <Button 
          className="w-full flex items-center justify-center gap-2 bg-background hover:bg-accent text-foreground border border-foreground/20 hover:border-foreground/40"
          onClick={onButtonBuyCrypto}
        >
          Buy in crypto <span className="text-lg">₿</span>
        </Button> */}
      </div>
    </div>
  );
};

export default CoinGeckoWidget;

