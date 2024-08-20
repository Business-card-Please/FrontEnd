import {
  OnboardContainer,
  OnboardBox,
  OnboardContentBox,
  HeaderText
} from "styles/OnboardtStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { CommonButton, CommonText, PublicImageBox } from "styles/CommonStyle";
import c from "@pic/calcEx.svg";
import s from "@pic/studyEx.svg";
import a from "@pic/chatEx.svg";
import t from "@pic/tradeEx.svg";
import { useRouter } from "next/router";

export default function OnBoardPage() {
  const route = useRouter();
  return (
    <OnboardContainer>
      <OnboardBox>
        <HeaderText>여기에 뭘 넣으면 좋을까?</HeaderText>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          id="mySwiper"
        >
          <SwiperSlide>
            <OnboardContentBox
              $height="calc(100% - 40px)"
              $flexDirection="column"
            >
              <PublicImageBox $width="100%" $height="100%">
                <Image src={s} fill={true} alt="" />
              </PublicImageBox>
            </OnboardContentBox>
          </SwiperSlide>
          <SwiperSlide>
            <OnboardContentBox
              $height="calc(100% - 40px)"
              $flexDirection="column"
            >
              <PublicImageBox $width="100%" $height="100%">
                <Image src={c} fill={true} alt="" />
              </PublicImageBox>
            </OnboardContentBox>
          </SwiperSlide>
          <SwiperSlide>
            <OnboardContentBox
              $height="calc(100% - 40px)"
              $flexDirection="column"
            >
              <PublicImageBox $width="100%" $height="100%">
                <Image src={a} fill={true} alt="" />
              </PublicImageBox>
            </OnboardContentBox>
          </SwiperSlide>
          <SwiperSlide>
            <OnboardContentBox
              $height="calc(100% - 40px)"
              $flexDirection="column"
            >
              <PublicImageBox $width="100%" $height="100%">
                <Image src={t} fill={true} alt="" />
              </PublicImageBox>
            </OnboardContentBox>
          </SwiperSlide>
        </Swiper>
        <OnboardContentBox
          $height="60px"
          $flexDirection="row"
          $padding="0 20px"
        >
          <CommonButton
            $width="45%"
            $height="60px"
            $borderRadius="12px"
            $backGround="#56ab91"
            onClick={() => route.push("login")}
          >
            <CommonText
              $fontSize="22px"
              $fontWeight="700"
              $color="#fff"
              $lineHeight="22px"
            >
              로그인 하러 가기
            </CommonText>
          </CommonButton>
          <CommonButton
            $width="45%"
            $height="60px"
            $borderRadius="12px"
            $backGround="#343a40"
            onClick={() => route.push("signup")}
          >
            <CommonText
              $fontSize="22px"
              $fontWeight="700"
              $color="#fff"
              $lineHeight="22px"
            >
              회원 가입하러 가기
            </CommonText>
          </CommonButton>
        </OnboardContentBox>
      </OnboardBox>
    </OnboardContainer>
  );
}
