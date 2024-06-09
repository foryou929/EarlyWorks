import classNames from "classnames";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Form from "@/components/Form";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";

import { barlow500, notoSansJP500, notoSansJP700 } from "@/constants/fonts";
import Select from "@/components/Select";

export default function Contact() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <div className="bg-light p-[24px] lg:p-[100px_170px] flex flex-col gap-[24px] lg:gap-[48px]">
        <div className="flex flex-col gap-[20px] lg:gap-[32px]">
          <div className="flex flex-col lg:flex-row lg:items-end gap-[12px]">
            <h2 className={classNames(
              barlow500.className,
              "text-[39px] lg:text-[56px] text-dark lg:leading-[39px]"
            )}>
              Contact
            </h2>
            <h3 className={classNames(
              notoSansJP700.className,
              "text-[12px] lg:text-[20px] text-dark lg:leading-[15px]"
            )}>
              お問い合わせ
            </h3>
          </div>
          <p className={classNames(
            notoSansJP500.className,
            "text-[12px] lg:text-[18px] text-dark-gray lg:leading-[13px]"
          )}>
            業務に関するご相談、採用に関するご質問等、お気軽にお問い合わせください。
          </p>
        </div>
        <Form>
          <Select label="お問い合わせ項目*" placeholder="選択してください">
            <option>
              パートナーシップについて
            </option>
            <option>
              取材について
            </option>
            <option>
              採用について
            </option>
            <option>
              その他お問い合わせ
            </option>
          </Select>
          <FormInput label="会社名*" placeholder="入力してください" />
          <FormInput label="ご担当者様名*" placeholder="入力してください" />
          <FormInput label="ご担当者様名（ふりがな）" placeholder="入力してください" />
          <FormInput label="メールアドレス*" placeholder="入力してください" />
          <FormTextarea label="お問い合わせ内容詳細*" placeholder="入力してください" />
        </Form>
        <Button>
          SEND
        </Button>
      </div>
      <Footer />
    </div>
  );
}
