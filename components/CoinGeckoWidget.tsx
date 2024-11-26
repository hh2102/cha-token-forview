import { Button } from "./ui/button";
import { sendGAEvent } from "./GoogleAnalytics";
const CoinGeckoWidget = () => {
  sendGAEvent("CoinGeckoWidget", {});

  const onButtonBuyUSD = () => {
    console.log('on button buy usd :>> ');
    sendGAEvent("buy_in_usd", {});
  };

  const onButtonBuyCrypto = () => {
    console.log('on button buy crypto :>> ');
    sendGAEvent("buy_in_crypto", {});
  };

  return (
    <div className="w-[320px]">
      <gecko-coin-list-widget
        locale="en"
        outlined="true"
        coin-ids=""
        initial-currency="usd"
      >
      </gecko-coin-list-widget>
      <div className="flex flex-col gap-2 mt-4">
        <Button className="w-full flex items-center justify-center gap-2"
          onClick={onButtonBuyUSD}>
          Buy in USD <span className="text-lg">$</span>
        </Button>
        <Button className="w-full flex items-center justify-center gap-2"
          onClick={onButtonBuyCrypto}>
          Buy in crypto <span className="text-lg">₿</span>
        </Button>
      </div>
    </div>
  );
};

export default CoinGeckoWidget;
