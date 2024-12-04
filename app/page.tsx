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
    "title": "MEME 1.0: From Pump.fun To Base",
    "author": "Jane Doe",
    "date": "Nov 30th, 2024",
    "authorAvatar": {
      "src": "/avatar.jpg",
      "alt": "Author avatar",
      "width": 40,
      "height": 40
    },
    "pargraphs": [
      {
        "subtitle": "Introduction",
        "contents": [
          // {
          //   "type": "image",
          //   "src": "/article/1.PNG",
          //   "alt": "Introduction image 1",
          //   "width": 300,
          //   "height": 200
          // },
          {
            "type": "image",
            "src": "/article/2.PNG",
            "alt": "Introduction image 2",
            "width": 300,
            "height": 200
          },
          {
            "type": "text",
            "content": "Solana has undeniably been the powerhouse behind the latest meme token bull market. With the explosive success of the meme launchpad Pump.fun, the chain has catalyzed a wave of \"golden dog\" tokens that have captivated the market. Meanwhile, Base has emerged as a formidable contender in this bull run."
          },
          {
            "type": "text",
            "content": "According to Artemis data, over the past three months, Base has recorded the second-highest net capital inflow, trailing only Solana and significantly outpacing third-place Sui. However, recent metrics (as of November 28, 2024) have flipped expectations on their head. The Base chain now boasts a net inflow of $1.3 billion, surpassing Solana and taking the lead."
          },
          {
            "type": "text",
            "content": "This dramatic shift could stem from several factors: waning enthusiasm for PVP (player-versus-player) dynamics on Solana, the cooling momentum of Pump.fun's live broadcast event, and the surging popularity of AI meme tokens on Base. Whether this trend signals a temporary fluctuation or marks a lasting shift in market dominance remains an open question. Can Base sustain this momentum and dethrone Solana, or will the original meme juggernaut reclaim its position? To answer these questions, we need a deeper dive into the distinct drivers and characteristics of each ecosystem."
          },
          {
            "type": "text",
            "content": "Solana's focus lies in PVP gameplay and high-octane token dynamics, whereas Base is blending AI-driven memes with social elements, creating a more interactive and innovative experience. By analyzing the leading meme token platforms within these ecosystems, we aim to uncover the unique mechanics driving their success."
          }
        ]
      },
      {
        "subtitle": "Pump.fun",
        "contents": [
          {
            "type": "image",
            "src": "/article/3.PNG",
            "alt": "Pump.fun platform",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            "content": "For anyone who's dipped their toes into this meme bull market, Pump.fun needs no introduction. Since its launch on Solana in January 2024, Pump.fun has skyrocketed from a niche project to a mainstream sensation, playing a pivotal role in driving this wave of meme token mania."
          },
          {
            "type": "text",
            "content": "At its core, Pump.fun is a platform dedicated to meme token issuance, offering a streamlined process that drastically lowers entry barriers. With its user-friendly interface, even crypto newcomers can mint their own meme tokens effortlessly. But the real game-changer? The cost—issuing a token on Pump.fun is almost negligible, requiring just 0.02 $SOL."
          },
          {
            "type": "text",
            "content": "This low-cost, accessible model has democratized meme token creation, enabling a flood of new entrants and ideas into the ecosystem. By empowering everyday users to participate, Pump.fun has solidified its status as the engine of Solana's meme economy."
          }
        ]
      },
      {
        "subtitle": "Issuance Process: How Pump.fun Powers Meme Tokens",
        "contents": [
          {
            "type": "image",
            "src": "/article/4.PNG",
            "alt": "Issuance Process diagram 1",
            "width": 350,
            "height": 200
          },
          {
            "type": "image",
            "src": "/article/5.PNG",
            "alt": "Issuance Process diagram 2",
            "width": 350,
            "height": 200
          },
          {
            "type": "text",
            "content": "On the Pump.fun platform, creating a meme token is as simple as it gets. Users click the \"Start a New Coin\" button, enter details like the token's name, ticker, description, and image, and pay a small amount of $SOL to kickstart the token's fundraising and issuance process."
          },
          {
            "type": "text",
            "content": "All tokens issued via Pump.fun adhere to a standardized pricing algorithm and economic model. The token launch begins on an internal market governed by a bonding curve. As tokens are purchased, their price and market cap increase dynamically. Once a token's market cap hits a specific threshold—say, $69,000—it graduates to the external market. At this point, the token is listed on Raydium, where its trading pair becomes publicly available, marking the token's official debut."
          }
        ]
      },
      {
        "subtitle": "The Bonding Curve: Fueling the Internal Market",
        "contents": [
          {
            "type": "image",
            "src": "/article/6.PNG",
            "alt": "Bonding Curve diagram",
            "width": 400,
            "height": 250
          },
          {
            "type": "text",
            "content": "The bonding curve is a mathematical pricing mechanism widely used in crypto economics. It defines the relationship between a token's price and its supply, dynamically adjusting both based on demand. Different types of bonding curves—linear, exponential, and logarithmic—serve various project needs. Pump.fun adopts an exponential bonding curve, which offers specific benefits:"
          },
          {
            "type": "text",
            "content": "1. Reduced Reliance on Liquidity Providers: By lowering the need for external liquidity in early stages, costs remain manageable.\n2. Early Investor Incentives: The exponential curve rewards early participation. At the beginning of a token's life cycle, the same amount of $SOL significantly impacts price less than it would in later stages, giving early adopters a greater potential return and driving initial engagement."
          },
          {
            "type": "text",
            "content": "In the curve (refer to Image7), the x-axis represents the amount of $SOL spent on purchasing tokens, while the y-axis reflects the token's price. As purchase volume rises, so does the price. This mechanism automatically adjusts issuance speed and token supply, ensuring a sustainable economic model."
          }
        ]
      },
      {
        "subtitle": "Formula and Mechanics: Digging Deeper",
        "contents": [
          {
            "type": "image",
            "src": "/article/7.PNG",
            "alt": "Formula and Mechanics diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            "content": "Pump.fun's bonding curve mechanics are grounded in Gryphsis's derivation. Initially, the virtual pool holds 30 $SOL and 1,073,000,191 tokens, with a starting k-value of 32,190,005,730. Each token's initial price is set at a minuscule 0.000000028 $SOL. This configuration allows precise calculation of how the amount of $SOL invested translates into meme tokens received."
          },
          {
            "type": "text",
            "content": "Key thresholds include:\n• When the total purchased tokens approach 800 million, the token qualifies for listing on Raydium.\n• At this stage, the raised funds and the remaining 200 million tokens form an LP (Liquidity Provider) pool, with a market cap of 410 $SOL and a total supply of 1 billion tokens."
          },
          {
            "type": "text",
            "content": "Pump.fun also applies a 1% transaction fee on all internal market trades and charges a 6 $SOL listing fee for token placement on Raydium."
          },
          {
            "type": "text",
            "content": "Pump.fun's bonding curve strategy balances accessibility and sustainability. By minimizing early-stage costs and maximizing incentives for early adopters, the platform creates a thriving ecosystem for meme tokens. Its unique model not only democratizes token creation but also streamlines their path to market success."
          }
        ]
      },
      {
        "subtitle": "Base",
        "contents": [
          {
            "type": "text",
            "content": "Next, let's shift our focus to the increasingly popular Base blockchain. Unlike Pump.fun's purely PvP (player versus player) approach, the memes emerging from the Base ecosystem lean heavily on storytelling and integrate a variety of innovative elements. The Base ecosystem stands out due to two core characteristics: its integration with the Farcaster social ecosystem and its strong alignment with AI-driven technologies. Meme issuance platforms on Base have skillfully tapped into these advantages, rapidly gaining mainstream attention and driving consistent upward momentum in token prices."
          },
          {
            "type": "text",
            "content": "Currently, the leading meme issuance platforms on Base can be categorized into two main groups:\n1. Virtuals Protocol, which centers around AI Agents,\n2. Clanker, which synergizes Farcaster's social traffic matrix with cutting-edge AI."
          }
        ]
      },
      {
        "subtitle": "Virtuals Protocol",
        "contents": [
          {
            "type": "text",
            "content": "First up is Virtuals Protocol, a name that may not yet be familiar to those outside the Base meme ecosystem. However, the recent virality of $AIXBT and the impressive rally of the $VIRTUAL token have likely drawn attention to this innovative platform."
          },
          {
            "type": "text",
            "content": "Launched in March 2024, Virtuals Protocol originally focused on AI gaming and the metaverse, leveraging its core technical strength: AI Agents. These agents are autonomous, capable of performing tasks in real-time, facilitating text and voice communication, and interacting dynamically with their environment."
          },
          {
            "type": "image",
            "src": "/article/8.png",
            "alt": "Virtuals Protocol AI Agents",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            "content": "As illustrated above, AI Agents in Virtuals Protocol can accomplish tasks ranging from in-game scene interactions and managing social media posts (e.g., on Twitter) to executing on-chain transactions as proxies. Below are their key capabilities:\n• Language Communication and 3D Movement: AI Agents can engage in natural conversation and navigate 3D spaces, enabling limitless content creation for games and applications.\n• Learning, Planning, and Decision-Making: Agents adapt dynamically by learning, planning, and making decisions as game or application scenarios evolve.\n• Environmental Interaction: Player actions trigger unique responses from the agents, creating immersive, personalized storylines.\n• On-Chain Transaction Capability: Agents come equipped with blockchain wallets, empowering them to perform autonomous on-chain transactions."
          },
          {
            "type": "text",
            "content": "In mid-October, Virtuals Protocol leveraged its cutting-edge AI Agent technology to launch IAO, its meme issuance platform. This strategic expansion marked its foray into the AI meme domain, solidifying its position as a leading protocol on the Base chain."
          }
        ]
      },
      {
        "subtitle": "Market Performance",
        "contents": [
          {
            "type": "image",
            "src": "/article/9.png",
            "alt": "Virtuals Protocol AI Agents",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            "content": "The recent surge in the $VIRTUAL token highlights the success of this strategic shift. Its price trend mirrors the project's evolution: initial rapid growth, followed by a mid-term decline, and then a sharp rally after the strategic pivot, reaching all-time highs. Within less than a year, Virtuals Protocol has demonstrated remarkable progress. With a current market cap of $1.3 billion, its momentum shows no signs of slowing."
          }
        ]
      },
      {
        "subtitle": "Product Overview",
        "contents": [
          {
            "type": "image",
            "src": "/article/10.png",
            "alt": "Market Performance chart",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            "content": "Unlike Pump.fun, which focuses exclusively on pure meme tokens, Virtuals Protocol combines the functionality of AI Agents with meme tokens, creating a unique ecosystem where each AI Agent represents and owns its associated meme token."
          },
          {
            "type": "text",
            "content": "The platform's official website highlights three primary AI Agents: Luna, GAME, and AIXBT:\n• Luna: The earliest and most influential AI Agent, Luna functions as a digital influencer. Equipped with its own Telegram account and live-streaming capabilities, Luna allows users to interact with it or chat by spending $LUNA tokens. These tokens can also be purchased as an investment.\n• GAME: A functional AI Agent with its own token, $GAME, designed for application-based tasks.\n• AIXBT: A data-analysis-focused AI Agent that operates with the $AIXBT token."
          },
          {
            "type": "text",
            "content": "Through these unique AI Agents, Virtuals Protocol imbues its meme tokens with purpose and functional value, distinguishing them from traditional meme tokens."
          },
          {
            "type": "image",
            "src": "/article/13.png",
            "alt": "Product Overview diagram",
            "width": 450,
            "height": 300
          },
        ]
      },
      {
        "subtitle": "Mechanism Design",
        "contents": [
          {
            "type": "text",
            "content": "Virtuals Protocol adopts a hybrid economic model similar to Pump.fun, combining an internal market and external market structure with standardized mechanisms. This framework allows users to issue and deploy their own meme tokens with ease, following standardized protocols."
          }
        ]
      },
      {
        "subtitle": "Issuance Process",
        "contents": [
          {
            "type": "image",
            "src": "/article/12.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            content: 'Just as Pump.fun requires $SOL, users seeking to issue meme tokens on Virtuals Protocol must first purchase a specific amount of $VIRTUAL tokens on Aerodrome'
          },
          {
            "type": "image",
            "src": "/article/13.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "image",
            "src": "/article/14.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            type: 'text',
            content: `To issue a meme token, users simply click to initiate the process, fill in required token details (e.g., name and ticker), and pay a specified amount of $VIRTUAL tokens. This process also allows users to issue their own AI Agent alongside the token.
If users wish to purchase an existing meme token, they must exchange $VIRTUAL tokens, ensuring that the protocol’s popularity and revenue are directly tied to the value of $VIRTUAL.
`
          },
          {
            "type": "image",
            "src": "/article/15.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "image",
            "src": "/article/16.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            type: 'text',
            content: `Virtuals Protocol employs bonding curves for market dynamics, similar to Pump.fun. The internal market, called Red Pill, transitions into the external market, known as Sentient Agents, once the token price and market cap exceed a certain threshold (approximately 42,420 $VIRTUAL). At this point:
	•	Tokens from the internal market are burned and transferred to the external market.
	•	The external market is deployed on Uniswap, facilitating broader trading.
	•	A proprietary AI Agent is launched alongside the token, capable of interacting with existing agents or meme tokens, thereby forming its own traffic matrix.
Compared to Pump.fun, Virtuals Protocol sets a higher market cap requirement for entry into the external market, signaling a focus on scalability and exclusivity.`
          }
        ]
      },
      {
        "subtitle": "Strategic Shift",
        "contents": [
          {
            "type": "text",
            content: `Initially, Virtuals Protocol’s focus on AI Agents made the issuance costs prohibitively high for average users. At launch, two methods were available for issuing a complete AI Agent:
	1.	Normal LP: Standard AI Agent + token, requiring 2,400 $VIRTUAL.
	2.	Steep LP: Influencer-tier AI Agent + token, requiring 125,000 $VIRTUAL.`
          },
          {
            "type": "image",
            "src": "/article/17.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            type: 'text',
            content: `The recent strategic shift towards combining AI Agents with memes, along with reduced issuance costs, has proven to be a timely and effective move. This approach broadens access for users, increases engagement, and underscores Virtuals Protocol’s adaptability in a competitive market.
`
          }
        ]
      },
      {
        "subtitle": "Clanker",
        "contents": [
          {
            "type": "image",
            "src": "/article/18.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "image",
            "src": "/article/19.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "text",
            content: `Compared to Virtuals Protocol, Clanker may not generate as much initial hype, but its narrative leans heavily on AI-centric innovation, making it more appealing to the preferences of meme enthusiasts.
Clanker is an AI Agent developed by Dish and Proxystudio.eth. Originally conceived as an AI chatbot built on the Farcaster protocol, Clanker has undergone a strategic pivot to become a meme issuance platform. This transition has been catalyzed by strong support from the Farcaster community and the protocol’s traffic, significantly driving its growth.
`
          },
          {
            "type": "text",
            content: `Clanker’s evolution exemplifies a groundbreaking asset issuance model—harnessing community traffic and positioning AI as a productive force. As a result, Clanker’s popularity continues to surge.
`
          }
        ]
      },
      {
        'subtitle': 'Issuance Process',
        'contents': [
          {
            type: 'text',
            content: `Unlike the approaches of Pump.fun and Virtuals Protocol, Clanker’s meme token issuance process is notably streamlined and tech-focused. Users only need to:
	1.	Mention @Clanker on the Farcaster platform.
	2.	Provide the desired token name, ticker, and image.
Clanker then automatically generates the token and supplies a corresponding Clanker.world link for trading and dashboard access.
`
          },
          // {
          //   "type": "image",
          //   "src": "/article/20.png",
          //   "alt": "Issuance Process diagram",
          //   "width": 450,
          //   "height": 300
          // }, // Failed to load the image, maybe it's too large
          {
            type: 'text',
            content: `A significant differentiator is that Clanker does not distinguish between internal and external markets. Upon creation, tokens are directly deployed on Uniswap. If the issuer wishes to acquire their tokens, they must manually purchase them via the Clanker.world token page. For trading activities and data analysis, platforms like BaseScan and DexScreener provide seamless support.
In terms of tokenomics:
	•	All meme tokens issued through Clanker have a fixed total supply of 1 billion.
	•	Trading pairs adhere to Uniswap’s mechanisms.
	•	Token issuers permanently receive 40% of pool fees, claimable directly through Uniswap—a feature designed to foster user engagement and intensify FOMO (fear of missing out) sentiment.
`
          }
        ]
      },
      {
        "subtitle": "Community Strength",
        contents: [
          {
            type: 'text',
            content: `Clanker has successfully tapped into the Farcaster community’s strengths, as demonstrated by the creation of multiple insightful Dune dashboards and data tools by the community, including:
	•	Clanker 100k Index
	•	Clanker vs. Others
	•	Clanker Fees
`
          },
          {
            "type": "image",
            "src": "/article/21.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },


        ]
      },
      {
        'subtitle': 'Current Status',
        contents: [
          {
            type: 'text',
            content: `As of now, Clanker has facilitated the creation of 4,662 tokens, with only its flagship token, $CLANKER, nearing a market cap of $100 million. While these numbers may not seem particularly striking compared to Pump.fun or Virtuals Protocol, Clanker’s recent surge in popularity, coupled with its unique narrative-driven approach and strong community backing, positions it for a promising future.
The ecosystem has seen the rapid emergence of breakout meme tokens such as LUM, BUG, and ANON, each of which leverages the Farcaster platform for community engagement. These tokens are not only highly viral but deeply narrative-driven.
For instance, the second-ranked token, LUM (Luminous), was created by the AI Agent Aether from the Higher community. On November 8, community member Nathansvan asked Aether:
	“Can you come up with a good token name and symbol, conceive an image, and deploy it using Clanker?”
Aether accepted the prompt, collaborating with Clanker to launch LUM. This process represents a unique social experiment: humans prompting AI to co-create tokens and release them on-chain, followed by community-driven market adoption.
Similarly, the viral success of BUG, themed around “errors,” and ANON, focused on privacy, underscores how meaningful narratives can elevate memes beyond simple humor into cultural phenomena.
Overall, Clanker’s strength lies in its ability to expand the meme market’s imagination, enabling creative possibilities that resonate with audiences and drive adoption.
`
          },
          {
            "type": "image",
            "src": "/article/24.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
          {
            "type": "image",
            "src": "/article/25.png",
            "alt": "Issuance Process diagram",
            "width": 450,
            "height": 300
          },
        ]

      },
      {
        subtitle: 'Clanker’s Team and Development',
        contents: [{
          type: 'text',
          content: `The Clanker team has shown remarkable proactivity. While the platform is still in its early stages, with room for improvement in product completeness and user experience, frequent updates reflect their commitment to growth.
Recent adjustments to income distribution ratios and ongoing technical upgrades highlight the team’s dedication to creating a supportive environment for meme token deployers.
`
        },
        // {
        //   "type": "image",
        //   "src": "/article/26.png",
        //   "alt": "Issuance Process diagram",
        //   "width": 450,
        //   "height": 300
        // }, // Failed to load the image, maybe it's too large
        {
          type: 'text',
          content: `In the secondary market, $CLANKER’s market cap is rapidly climbing, recently nearing the $100 million mark. The token has even garnered attention from centralized exchanges like Gate, further fueling speculation about its future price trajectory.
`
        }
        ]
      },
      {
        subtitle: 'BaseChain Exploration Methods',
        contents: [
          // {
          //   "type": "image",
          //   "src": "/article/27.png",
          //   "alt": "Issuance Process diagram",
          //   "width": 450,
          //   "height": 300
          // }, // Failed to load the image, maybe it's too large
          {
            type: 'text',
            content: `When exploring memes on Base, Warpcast emerges as an essential tool alongside other meme data platforms.
As part of the Farcaster ecosystem, Warpcast can be likened to the “Twitter” of Base, playing a pivotal role in connecting users with meme trends. For tokens launched via Clanker, Warpcast enables users to trace token issuers, offering insights into a meme’s value based on its creator.
Warpcast’s origins are noteworthy. Like many early Web3 social projects, it began as an invite-only platform, with founder Dan Romero manually reviewing applications via Twitter DMs. This initial user base consisted of builders, Ethereum/Base enthusiasts, and a16z-backed VCs—a small but high-quality community.
As the meme frenzy grew, Warpcast welcomed a surge of new users, yet its core community ensured a steady flow of valuable insights. Some tokens, such as $CONSENT, gained early traction on Warpcast before spreading to platforms like Twitter, making Warpcast a key destination for discovering emerging opportunities on Base.
`
          }
        ]
      },
      {
        subtitle: 'Outlook',
        contents: [
          {
            type: 'text',
            content: `From Pump.fun memes to Base memes, the market has evolved to incorporate stronger storytelling and value-oriented narratives. Whether through AI-driven creativity or social engagement, these trends align with the industry’s broader shift toward mass adoption.
While the initial fervor for on-chain meme PvP has cooled, the meme economy is poised for further transformation. The innovations on Base, driven by platforms like Clanker and communities like Farcaster, hold significant potential to push memes into mainstream adoption. This evolution is a trend worth watching.
`
          }
        ]
      }]
  }

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