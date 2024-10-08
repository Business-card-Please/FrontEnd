import { CommunityContentArea } from "styles/PostStyle";
import CommunityPreviewPostBox from "./commuPost";

export default function CommunityBodyScreen() {
  return (
    <CommunityContentArea>
      <CommunityPreviewPostBox />
      <CommunityPreviewPostBox />
      <CommunityPreviewPostBox />
      <CommunityPreviewPostBox />
      <CommunityPreviewPostBox />
    </CommunityContentArea>
  );
}
