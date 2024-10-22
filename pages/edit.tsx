import EditBodyScreen from "components/edit/EditBody";
import MainBottomScreen from "components/main/mainBottom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import { CommunityContainer } from "styles/PostStyle";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [lecture, setLecture] = useState("");
  const [department, setDepartment] = useState("");
  const [content, setContent] = useState("");
  const getContentData = useRecoilValue(CommunityContentSelector);
  const [isEditMode, setIsEditMode] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (getContentData.idx !== undefined) {
      setIsEditMode(true);
      console.log("수정모드 on");
    }
    return () => {};
  }, []);

  return (
    <CommunityContainer>
      <EditBodyScreen
        title={title}
        setTitle={setTitle}
        lecture={lecture}
        setLecture={setLecture}
        department={department}
        setDepartment={setDepartment}
        content={content}
        setContent={setContent}
        isEditMode={isEditMode}
        route={route}
      />
      <MainBottomScreen />
    </CommunityContainer>
  );
}
