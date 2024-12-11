// import {  useEffect, useRef, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

import CoinGeckoWidget from "@/components/CoinGeckoWidget";
import ContinueReading from "@/components/ContinueReading";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeLogo from "@/components/ThemeLogo";

import { headers } from "next/headers";
import FixedAside from "@/components/FixedAside";
import Footer from "@/components/Footer";

export default async function Page() {
  // const isExpanded = false;
  // const contentRef = useRef<HTMLDivElement>(null);
  // const contentTop = 0

  // const [vistorInfo, setVistorInfo] = useState({
  //   country: '',
  //   currency :'',
  //   fiatName: ''
  // })

  const headersList = await headers();
  const country = headersList.get("x-visitor-country") || "";
  const currency = headersList.get("x-visitor-currency") || "";
  const fiatName = headersList.get("x-visitor-fiat-name") || "";
  const vistorInfo = { country, currency, fiatName };

  const articleContent = {
    title: "MEME 1.0: From Pump.fun To Base",
    author: "Jane Doe",
    date: "Nov 23rd, 2024",
    authorAvatar: {
      src: "/avatar.jpg",
      alt: "Author avatar",
      width: 40,
      height: 40
    },
    pargraphs: [
        {
        subtitle: "Introduction",
        contents: [
                {
            type: "text",
            content: "The relaxed, carefree image of the ChillGuy dog is going viral, with returns exceeding a thousandfold. The TikTok-driven traffic model seems to have been revalidated within the cryptocurrency space."
                },
                {
            type: "image",
            src: "/article-chill-guy/image6.png",
            alt: "ChillGuy meme",
            width: 150,
            height: 100
                }
            ]
        },
        {
        subtitle: "Origin",
        contents: [
                {
            type: "text",
            content: "The character of \"Just a Chill Guy\" (CHILLGUY) originated from the cartoon created by artist Phillip Banks in 2023. The character, embodying a relaxed and nonchalant personality, perfectly aligns with the current trend of \"lying flat\" (a term in Chinese culture representing a passive resistance to societal pressures). Its expression seems to continuously convey the message: \"Why worry? Take it easy.\" Leveraging TikTok, the character quickly gained popularity, particularly among Gen Z, resonating emotionally with young users."
                },
                {
            type: "text",
            content: "Even more surprisingly, ChillGuy has entered the market, both mentally and financially, teaching us all to \"take it easy.\" In just a few days, CHILLGUY brought returns of over 100 to 1000 times for enthusiasts and holders."
                }
            ]
        },
        {
        subtitle: "Timeline",
        contents: [
                {
            type: "text",
            content: "The concept was first introduced on Pump.fun (https://pump.fun/coin/Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump), a well-known PVP platform. It was deployed two months ago by user @mrowl. As shown by the list of holders, the initial distribution of tokens was very fragmented and PVP-oriented."
                },
                {
            type: "image",
            src: "/article-chill-guy/image5.png",
            alt: "ChillGuy meme",
            width: 350,
            height: 200
                },
                {
            type: "text",
            content: "After two months of inactivity, CHILLGUY went live on Raydium at 4 AM on November 16, 2023, Beijing time, with a deployment price of $0.0000781. In the first hour, the trading volume was approximately 689.8K."
                },
                {
            type: "text",
            content: "The first wave of price increase occurred at 9 AM on November 20, with a 108.15% rise in just one hour, and trading volume surged to 42.25 million. Subsequently, CHILLGUY maintained strong performance throughout November 20 and reached a short-term peak of $0.5139 at 1 AM on November 21, with trading volume dropping to 18.3 million."
                },
                {
            type: "text",
            content: "At its peak price and external market deployment price, the yield reached an astonishing 658,000%, or 6580 times the initial investment. The internal exchange return might have been even higher. Social media engagement also peaked during this period."
                }
            ]
        },
        {
        subtitle: "Current Status",
        contents: [
                {
            type: "text",
            content: "As of today, CHILLGUY remains active on social media, with relatively good engagement."
                },
                {
            type: "image",
            src: "/article-chill-guy/image2.png",
            alt: "ChillGuy meme",
            width: 300,
            height: 200
                },
                {
            type: "image",
            src: "/article-chill-guy/image1.png",
            alt: "ChillGuy meme",
            width: 300,
            height: 200
                },
                {
            type: "text",
            content: "Although the price has somewhat corrected, the number of wallet addresses holding the token still exceeds 9,900, and the token distribution remains relatively decentralized, maintaining consistency after the fair launch."
                },
                {
            type: "image",
            src: "/article-chill-guy/image4.png",
            alt: "ChillGuy meme",
            width: 450,
            height: 300
                }
            ]
        },
        {
        subtitle: "Controversies/Issues/Risks",
        contents: [
                {
            type: "text",
            content: "According to data from GMGN, there are no explicitly flagged \"pump-and-dump\" addresses in the token holder list. However, several phishing wallet addresses have been identified. Early buyers have mostly completed their profit-taking and portfolio rebalancing. Additionally, the token's 2.6% blue-chip ratio suggests that most token holders are meme players who enter and exit quickly. A critical point is that, despite the meme's popularity, the creator of the \"Just a Chill Guy\" character has shown little interest in associating it with the token. They have publicly stated that they do not wish to be linked to the project, which introduces some level of controversy and risk."
                },
                {
            type: "image",
            src: "/article-chill-guy/image3.png",
            alt: "ChillGuy meme",
            width: 600,
            height: 200
                }
            ]
        },
        {
        subtitle: "Conclusion & Vision",
        contents: [
                {
            type: "text",
            content: "This meme token is driven by trends and is likely to have limited sustainability. Its continued success will depend on the community's ongoing enthusiasm. The token distribution remains decentralized, with a market cap of $320 million at its peak. To continue growing, significant external support from secondary markets will be necessary."
                }
            ]
        }
    ]
    };

  return (
    <div className="min-h-screen bg-background flex flex-col font-['IBM_Plex_Mono',_monospace]">
      <header className="border-b w-full">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ThemeLogo />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link> */}
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-8 md:py-12 lg:py-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:divide-x">
            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <h1 className="mb-4 text-2xl font-bold tracking-tight text-[rgb(40,39,40)] dark:text-[rgb(210,209,210)] lg:text-3xl">
                  {articleContent.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <Image
                    src={articleContent.authorAvatar.src}
                    alt={articleContent.authorAvatar.alt}
                    className="rounded-full"
                    width={articleContent.authorAvatar.width}
                    height={articleContent.authorAvatar.height}
                  />
                  <div>
                    <div className="font-medium text-foreground">{articleContent.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {articleContent.date}
                    </div>
                  </div>
                </div>
              </div>
              <Separator.Root className="h-px bg-border" />
              <div className="prose prose-gray max-w-none">
                <ContinueReading threshold={0.3}>
                  {articleContent.pargraphs.map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.subtitle && <h2>{paragraph.subtitle}</h2>}
                      {paragraph.contents.map((content, contentIndex) => (
                        <div key={contentIndex}>
                          {content.type === 'text' && <p>{content.content}</p>}
                          {content.type === 'image' && (
                            <p>
                              <Image
                                className="mx-auto mb-4"
                                src={content.src || ''}
                                alt={content.alt || '-'}
                                width={content.width}
                                height={content.height}
                              />
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </ContinueReading>
              </div>
            </div>

            <FixedAside>
              <CoinGeckoWidget
                currency={vistorInfo.currency}
                fiatName={vistorInfo.fiatName}
                coinIds="chill-guy,ethereum,bitcoin"
              />
              {
                /* <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[320px]  mt-6">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Related Articles
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <Link className="underline" href="#">
                        The Future of Decentralized Finance
                      </Link>
                    </li>
                    <li>
                      <Link className="underline" href="#">
                        Understanding Blockchain Scalability
                      </Link>
                    </li>
                    <li>
                      <Link className="underline" href="#">
                        Crypto Regulations: A Global Perspective
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */
              }
            </FixedAside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}