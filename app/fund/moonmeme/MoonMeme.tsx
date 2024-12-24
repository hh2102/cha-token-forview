
'use client'
// import { useState, useEffect } from 'react'

import Image from "next/image";
import styles from "./page.module.css";
import { sendGAEvent } from '@/components/GoogleAnalytics';
import { toast, ToastContainer } from 'react-toastify';


type CoinPriceMarqueeCurrency = {
  currency: string
}


// function scrollToNextSection(nextSectionId: string) {
//   const nextSection = document.getElementById(nextSectionId);
//   if (nextSection) {
//     nextSection.scrollIntoView({ behavior: 'smooth' });
//   }
// }


export default function Page(currency: CoinPriceMarqueeCurrency) {
  // const [currentSection, setCurrentSection] = useState(1);
  const notify = () => { toast.error("服务器链接失败") }





  /**
   * 
   * @returns 顶部右侧按钮组
   */
  function TopButtonGroup() {
    return (
      <div className={styles.topButtonGroup}>
        <div className={styles.topButtonLeft} onClick={() => {
          sendGAEvent("cha token test", {
            "position": "Top Button Group Left"
          })
          notify()
        }} >
          All funds
        </div>
        <div className={styles.topButtonRight} onClick={() => {
          notify()
          sendGAEvent("cha token test", {
            "position": "Top Button Group Right"
          })
        }} >
          Buy now
        </div>
      </div>
    )
  }
  /**
   * 
   * @returns 第一页面容器
   */
  function FirstContent() {
    return (
      <div className={styles.firstContent}>
        <div className={styles.topLogoContent}>
          <Image src="/fund/logo.png" width={100} height={80} alt="ChaToken" className={styles.topLogo} />
          <div className={styles.topLogoText}>
            ChaToken
          </div>
        </div>
        <TopButtonGroup />
        <MiddleContent />
      </div>
    )
  }
  /**
   * 
   * @returns 第一页面中部容器
   */
  function MiddleContent() {
    return (
      <div className={styles.middlePosition}>

        <div className={styles.backgroundLineContent}>
          <div className={styles.middleContent}>
            <div className={styles.middleTextTopContent}>
              <div className={styles.middleTextTopLeft}>
                MoonMeen
              </div>
              <div className={styles.middleTextTopRight}>
                Fund
              </div>
            </div>
            <div className={styles.middleTextBottomContent}>
              <div className={styles.middleTextBottom}>
                The World’s First Meme Fund for Everyone.
              </div>
            </div>
            <div id='middleButton' onClick={() => {
              sendGAEvent("cha token test", {
                "position": "Middle Button"
              })
              notify()
            }} className={`${styles.middleButton}`}>
              Secure Your Spot
            </div>
          </div>

        </div>
        <FirstContentButtom />

      </div>
    )
  }
  /**
   * 
   * @returns 第一页面底部跑马灯
   */
  function FirstContentButtom() {
    return (
      <div className={styles.marquee}>
        <gecko-coin-price-marquee-widget locale="en" dark-mode="true" coin-ids="limitus,pudgy-penguins,hyperliquid,odos"
          initial-currency={currency.currency} ></gecko-coin-price-marquee-widget>
      </div>)
  }
  /**
   * 
   * @returns 第二页面容器
   */
  function SecondContent() {
    return (<div className={styles.secondContent}>
      <div className={styles.secondContentTop}>

        <div id='secondContent' className={styles.secondTextLeftTopContent}>
          <div className={styles.secondTextLeftTopTop}>Meme Coin Marketcap</div>
          <div className={styles.secondTextLeftTopMiddle}>110%+</div>
          <div className={styles.secondTextLeftTopBottom}>growth in the last 30d</div>
        </div>
        <div className={styles.secondTextRightTopContent}>
          <div className={styles.secondTextRightTopTop}>Fundraising Progress</div>
          <div className={styles.secondTextRightTopMiddle}>64%</div>
          <div className={styles.secondTextRightTopBottom}>spot has been claimed</div>
        </div>
      </div>
      <div className={styles.secondContentMiddle}>
        <Image src="/fund/secondLeftMiddle.png" width={568} height={568} alt='Meme Coin' className={styles.secondLeftMiddle}></Image>
        <div className={styles.secondTextRightMiddle}>
          MoonMeme Fund is the world’s first publicly accessible meme-focused investment fund. Now, everyone can join the meme token revolution and share in the profits of this thriving market.
        </div>
      </div>
      <div className={styles.secondContentBottom}>
        <div className={styles.secondTextLeftBottom}>
          With no minimum investment required, you can secure your spot today using either card or crypto. The fund launches as soon as we hit our $10M target—don’t miss your chance to be part of this groundbreaking opportunity!
        </div>
        <Image src="/fund/secondRightBottom.png" width={450} height={450} alt='Meme Coin' className={styles.secondRightBottom}></Image>
      </div>
    </div>)
  }
  /**
   * 
   * @returns 底部分割线 
   */
  function BottomDivider() {
    return (<div className={styles.bottomDivider}></div>)
  }
  /**
   * 
   * @returns 第三页面容器
   */
  function ThirdContent() {
    return (<div className={styles.thirdContent}>
      <div className={styles.thirdTextContent}>
        <div className={styles.thirdTextTopContent}>
          <div className={styles.thirdTextTopLeft}>
            MoonMeen
          </div>
          <div className={styles.thirdTextTopRight}>
            Fund
          </div>
        </div>
        <div className={styles.thirdTextBottomContent}>
          <div className={styles.thirdTextBottom}>
            The World’s First Meme Fund for Everyone.
          </div>
        </div>
      </div>
      <div className={styles.thirdContentButton} onClick={() => {
        sendGAEvent("cha token test", {
          "position": "Bottom Button"
        })
        notify()
      }}>Secure Your Spot</div>
    </div>)
  }

  //控制一下自动滚动 
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section1 = document.getElementById('middleButton');
  //     if (section1 && window.scrollY >= section1.offsetTop - window.innerHeight / 8 && currentSection === 1) {
  //       scrollToNextSection("secondContent");
  //       setCurrentSection(2);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [currentSection]);

  return (
    <div className={styles.page} >
      <ToastContainer />
      <FirstContent />
      <SecondContent />
      <BottomDivider />
      <ThirdContent />
    </div>
  );
}
