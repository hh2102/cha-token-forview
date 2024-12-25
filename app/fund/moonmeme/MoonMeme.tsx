"use client";
// import { useState, useEffect } from 'react'

import Image from "next/image";
import styles from "./page.module.css";
import { sendGAEvent } from "@/components/GoogleAnalytics";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

type CoinPriceMarqueeCurrency = {
  currency: string;
};
type ActiveValue = "100" | "1000" | "500" | "custom" | null;
// function scrollToNextSection(nextSectionId: string) {
//   const nextSection = document.getElementById(nextSectionId);
//   if (nextSection) {
//     nextSection.scrollIntoView({ behavior: 'smooth' });
//   }
// }

export default function Page(currency: CoinPriceMarqueeCurrency) {
  // const [currentSection, setCurrentSection] = useState(1);
  let valueHandler: string = ""
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [activeValue, setActiveValue] = useState<ActiveValue>(null);

  // 处理选项激活的函数
  const handleSetActive = (value: ActiveValue) => {
    setActiveValue((prevActiveValue) => {
      // 如果点击的是当前已激活的选项，则取消激活
      if (prevActiveValue === value) {
        return null;
      } else {
        // 否则，激活新的选项
        return value;
      }
    });
  };
  const notify = () => {
    toast.error("服务器链接失败");
  };
  function showDialogHandler() {
    setIsShowDialog(true);
  }
  function closeDialogHandler() {
    sendGAEvent("dialog_close", {
      "test": "test"
    })
    setIsShowDialog(false);
  }
  function stopPropagationHandler(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }
  // function setActiveHandler(target:string,state:boolean){
  // switch (target){
  //   case "100"{

  //   }
  // }
  // }
  function CustomInput() {
    const [value, setValue] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const reg = /[^0-9]/g;
      const newValue = value.replace(reg, '');
      valueHandler = newValue
      console.log(valueHandler)
      setValue(newValue);
    };
    return (<input
      type="text"
      value={value}
      onChange={handleInputChange}
      className={styles.dialogInput}
      maxLength={6}
    />)
  }
  /**
   *
   * @returns dialog
   */
  function Dialog() {
    if (isShowDialog) {
      return (
        <div className={styles.dialogMask} onClick={closeDialogHandler}>
          <div className={styles.dialogContent} onClick={stopPropagationHandler}>
            <div className={styles.dialogTop}>
              <div className={styles.dialogTopLeft}>Select recharge limit</div>
              <div className={styles.dialogTopRight} onClick={closeDialogHandler}>
                <Image src="/fund/close.png" width={24} height={24} alt="close" className="" />
              </div>
            </div>
            <div className={styles.dialogMiddle}>
              <div className={styles.dialogMiddleTop}>
                <div className={[styles.dialogMiddleItem, (activeValue == "100") && styles.dialogItemActive].filter(Boolean).join(' ')} onClick={() => {
                  sendGAEvent("dialog_item_click", {
                    value: "100"
                  });
                  if (activeValue !== "100") handleSetActive("100")
                }}>
                  <div className={[styles.dialogItemTop, (activeValue == "100") && styles.activeTextColor].filter(Boolean).join(' ')}>100 $CHA</div>
                  <div className={[styles.dialogItemBottom, (activeValue == "100") && styles.activeTextColor].filter(Boolean).join(' ')}>$9.9</div>
                </div>
                <div className={[styles.dialogMiddleItem, (activeValue == "500") && styles.dialogItemActive].filter(Boolean).join(' ')} onClick={() => {
                  sendGAEvent("dialog_item_click", {
                    value: "500"
                  });
                  if (activeValue !== "500") handleSetActive("500")
                }}>
                  <div className={[styles.dialogItemTop, (activeValue == "500") && styles.activeTextColor].filter(Boolean).join(' ')}>500 $CHA</div>
                  <div className={[styles.dialogItemBottom, (activeValue == "500") && styles.activeTextColor].filter(Boolean).join(' ')}>$4.9</div>
                </div>
              </div>
              <div className={styles.dialogMiddleBottom}>
                <div className={[styles.dialogMiddleItem, (activeValue == "1000") && styles.dialogItemActive].filter(Boolean).join(' ')} onClick={() => {
                  sendGAEvent("dialog_item_click", {
                    value: "1000"
                  });
                  if (activeValue !== "1000") handleSetActive("1000")
                }}>
                  <div className={[styles.dialogItemTop, (activeValue == "1000") && styles.activeTextColor].filter(Boolean).join(' ')}>1000 $CHA</div>
                  <div className={[styles.dialogItemBottom, (activeValue == "1000") && styles.activeTextColor].filter(Boolean).join(' ')}>$99.9</div>
                </div>
                <div className={[styles.dialogMiddleItem, (activeValue == "custom") && styles.dialogItemActive].filter(Boolean).join(' ')} onClick={() => {
                  sendGAEvent("dialog_item_click", {
                    value: valueHandler
                  });
                  if (activeValue !== "custom") handleSetActive("custom")
                }}>

                  <div className={[styles.dialogInputItemTop, (activeValue == "custom") && styles.activeTextColor].filter(Boolean).join(' ')} ><CustomInput /> $CHA</div>
                  <div className={[styles.dialogItemBottom, (activeValue == "custom") && styles.activeTextColor].filter(Boolean).join(' ')}>$~</div>
                </div>
              </div>
            </div>
            <div className={styles.dialogBottom}>
              <div className={styles.dialogBottomTopButton} onClick={() => {
                notify()
                sendGAEvent("dialog_top_button_click", {
                  position: "Dialog TopButton",
                  value: activeValue == "custom" ? valueHandler : activeValue
                });
              }}>Pay in $USD or other fiat</div>
              <div className={styles.dialogBottomBottomButton} onClick={() => {
                notify()
                sendGAEvent("dialog_bottom_button_click", {
                  position: "Dialog BottomButton",
                  value: activeValue == "custom" ? valueHandler : activeValue
                });
              }}>Pay in USDT</div>
            </div>
          </div>
        </div>
      );
    }
  }

  function TopBar() {
    return (
      <div className={styles.topBar}>
        <div className={styles.topLogoContent}>
          <Image src="/fund/logo.png" width={100} height={80} alt="ChaToken" className={styles.topLogo} />
          <div className={styles.topLogoText}>ChaToken</div>
        </div>
        <TopButtonGroup />
      </div>
    );
  }

  /**
   *
   * @returns 顶部右侧按钮组
   */
  function TopButtonGroup() {
    return (
      <div className={styles.topButtonGroup}>
        <div
          className={styles.topButtonLeft}
          onClick={() => {
            sendGAEvent("open_dialog", {
              position: "Top Button Group Left",
            });
            notify();
          }}>
          All funds
        </div>
        <div
          className={styles.topButtonRight}
          onClick={() => {
            // notify()
            showDialogHandler();
            sendGAEvent("open_dialog", {
              position: "Top Button Group Right",
            });
          }}>
          Buy now
        </div>
      </div>
    );
  }
  /**
   *
   * @returns 第一页面容器
   */
  function FirstContent() {
    return (
      <div className={styles.firstContent}>
        <TopBar />
        <MiddleContent />
      </div>
    );
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
              <div className={styles.middleTextTopLeft}>MoonMeen</div>
              <div className={styles.middleTextTopRight}>Fund</div>
            </div>
            <div className={styles.middleTextBottomContent}>
              <div className={styles.middleTextBottom}>The World’s First Meme Fund for Everyone.</div>
            </div>
            <div
              id="middleButton"
              onClick={() => {
                sendGAEvent("open_dialog", {
                  position: "Middle Button",
                });
                showDialogHandler();
              }}
              className={`${styles.middleButton}`}>
              Secure Your Spot
            </div>
          </div>
        </div>
        <FirstContentButtom />
      </div>
    );
  }
  /**
   *
   * @returns 第一页面底部跑马灯
   */
  function FirstContentButtom() {
    return (
      <div className={styles.marquee}>
        <gecko-coin-price-marquee-widget
          locale="en"
          dark-mode="true"
          coin-ids="limitus,pudgy-penguins,hyperliquid,odos"
          initial-currency={currency.currency}></gecko-coin-price-marquee-widget>
      </div>
    );
  }
  /**
   *
   * @returns 第二页面容器
   */
  function SecondContent() {
    return (
      <div className={styles.secondContent}>
        <div className={styles.secondContentTop}>
          <div id="secondContent" className={styles.secondTextLeftTopContent}>
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
          <Image src="/fund/secondLeftMiddle.png" width={568} height={568} alt="Meme Coin" className={styles.secondLeftMiddle}></Image>
          <div className={styles.secondTextRightMiddle}>
            MoonMeme Fund is the world’s first publicly accessible meme-focused investment fund. Now, everyone can join the meme token revolution and share in the profits of this thriving
            market.
          </div>
        </div>
        <div className={styles.secondContentBottom}>
          <div className={styles.secondTextLeftBottom}>
            With no minimum investment required, you can secure your spot today using either card or crypto. The fund launches as soon as we hit our $10M target—don’t miss your chance to be
            part of this groundbreaking opportunity!
          </div>
          <Image src="/fund/secondRightBottom.png" width={450} height={450} alt="Meme Coin" className={styles.secondRightBottom}></Image>
        </div>
      </div>
    );
  }
  /**
   *
   * @returns 底部分割线
   */
  function BottomDivider() {
    return <div className={styles.bottomDivider}></div>;
  }
  /**
   *
   * @returns 第三页面容器
   */
  function ThirdContent() {
    return (
      <div className={styles.thirdContent}>
        <div className={styles.thirdTextContent}>
          <div className={styles.thirdTextTopContent}>
            <div className={styles.thirdTextTopLeft}>MoonMeen</div>
            <div className={styles.thirdTextTopRight}>Fund</div>
          </div>
          <div className={styles.thirdTextBottomContent}>
            <div className={styles.thirdTextBottom}>The World’s First Meme Fund for Everyone.</div>
          </div>
        </div>
        <div
          className={styles.thirdContentButton}
          onClick={() => {
            sendGAEvent("open_dialog", {
              position: "Bottom Button",
            });
            showDialogHandler();
          }}>
          Secure Your Spot
        </div>
      </div>
    );
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
    <div className={styles.page}>
      <ToastContainer className={styles.toast} />
      <Dialog />
      <FirstContent />
      <SecondContent />
      <BottomDivider />
      <ThirdContent />
    </div>
  );
}
