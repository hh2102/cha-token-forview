import Page from "@/app/fund/moonmeme/MoonMeme";
// import CoinPriceMarquee from "@/components/CoinPriceMarquee";
import styles from "./page.module.css";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const currency = headersList.get("x-visitor-currency") || "";
	return (
		<div className={styles.base}>
			<Page currency={currency}/>
		</div>
	);
}
