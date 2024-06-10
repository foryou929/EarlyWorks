import Image from "next/image";
import classNames from "classnames";

import { barlow500, notoSansJP500, notoSansJP700 } from "@/constants/fonts";

import Header from "@/components/Header";

import top_bg from '@/assets/images/top_bg.png';
import top_bg_overlay from '@/assets/images/top_bg_overlay.jpg';
import logo_dark_nt from '@/assets/images/logo_dark_nt.svg';
import CategoryFilterButton from "@/components/CategoryFilterButton";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <div className="relative p-[40px] lg:p-[143px_170px] overflow-hidden">
        <Image
          className="absolute left-0 top-0 -z-10 w-[1440px] h-full object-cover"
          src={top_bg} alt="top_bg" />
        <Image
          className="absolute left-0 top-0 -z-10 w-[1440px] h-full object-cover opacity-85 mix-blend-multiply"
          src={top_bg_overlay} alt="top_bg_overlay" priority={true} />
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[32px] lg:gap-[60px]">
            <h1 className={classNames(
              "max-w-[584px]",
              barlow500.className,
              "text-[48px] lg:text-[100px] text-white"
            )}>
              BLOCKCHAIN AS A STRATEGY
            </h1>
            <div className="w-[160px] h-[1px] bg-gradient-to-r from-[#EEEEEE] to-[#08121A]" />
            <div className="flex flex-col gap-[19px]">
              <h6 className={classNames(
                notoSansJP500.className,
                "text-[21px] lg:text-[28px] text-white"
              )}
              >
                これからの当たり前を開発る
              </h6>
              <p className={classNames(
                "max-w-[400px]",
                barlow500.className,
                "text-[16px] text-light-gray tracking-[0.05em]"
              )}>
                A creative group that maximizes the potential of the blockchain with an eye on the future under the main themes of DX, NFT, Metaverse, and other areas in which society will be transformed.
              </p>
            </div>
          </div>
          <Button className="lg:hidden">
            CONTACT
          </Button>
        </div>
        <Image className="hidden lg:block absolute left-[931.57px] top-0"
          src={logo_dark_nt} alt="logo_dark_nt" height={820} />
      </div>
      <div className="p-[24px_40px] lg:p-[100px_170px] bg-light flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col-reverse lg:flex-row gap-[12px] lg:items-end">
            <h2 className={classNames(
              barlow500.className,
              "text-[39px] lg:text-[56px] text-black leading-[34px]"
            )}>
              Members
            </h2>
            <h3 className={
              classNames(
                notoSansJP700.className,
                "text-[12px] lg:text-[20px] text-black leading-[10px]"
              )
            }>
              人を知る
            </h3>
          </div>
          <p className={classNames(
            notoSansJP500.className,
            "text-[12px] lg:text-[18px] text-dark-gray"
          )}>
            平均年齢30歳。元気で意欲的なアーリーワークスの成長を支える社員のインタビューを多数掲載しています。
          </p>
        </div>
        <div className="flex flex-wrap gap-[6px] lg:gap-[12px]">
          <CategoryFilterButton count={6} active>
            全て
          </CategoryFilterButton>
          <CategoryFilterButton count={2}>
            創業メンバー
          </CategoryFilterButton>
          <CategoryFilterButton count={2}>
            キャリア入社
          </CategoryFilterButton>
          <CategoryFilterButton count={2}>
            新卒入社
          </CategoryFilterButton>
        </div>
        <div className="flex justify-between">
          <div className="w-full max-w-[420px] h-[560px] rounded-[14px]">

          </div>
          <div className="hidden lg:flex flex-col justify-between">
            <div className="flex flex-col gap-[32px]">
              <p className={classNames(
                "h-[12px]",
                notoSansJP500.className,
                "text-[16px] text-black"
              )}>
                代表取締役 兼 社長 / 小林 聖
              </p>
              <p className={classNames(
                "h-[34px]",
                barlow500.className,
                "text-[48px]"
              )}>
                Satoshi Kobayashi
              </p>
              <p className={classNames(
                "w-[624px]",
                notoSansJP500.className,
                "text-[16px] text-black"
              )}>
                2018年5月に当社を共同創業。<br />
                2016年8月から2018年12月まで株式会社FEELOの代表取締役として同社のマーチャンダイジング事業全体を統括。2013年1月～2015年12月まで株式会社パソナにてマネージャーとして派遣スタッフ管理・コンサルティングを担当。
              </p>
            </div>
            <div className="w-[624px] flex gap-[8px]">
              <div className="w-[135px] h-[180px] rounded-[8px] border-[1.5px] border-dark-gray">

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
