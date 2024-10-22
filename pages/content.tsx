import { useEffect, useState } from "react";
import MainBottomScreen from "components/main/mainBottom";
import { useRecoilValue } from "recoil";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import { CommunityContentArea, ContentContainer } from "styles/PostStyle";
import CommunityFullContentPostBox from "components/community/commuContent";
import MainTopScreen from "components/main/mainTop";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import CommunityTopBarScreen from "components/community/commuTopBar";

export default function ContentPage() {
  const getData = useRecoilValue(CommunityContentSelector);
  const [hydrated, setHydrated] = useState(false);
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);

  // 클라이언트에서 렌더링 후에만 데이터 사용
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // 클라이언트에서만 렌더링을 할 때 일치시키기 위함
  }

  return (
    <ContentContainer>
      <CommunityTopBarScreen />
      <CommunityContentArea>
        <CommunityFullContentPostBox data={getData} userInfo={getUserInfo} />
      </CommunityContentArea>
      <MainBottomScreen />
    </ContentContainer>
  );
}
