import { modifyContent, postContent } from "service/PostServies";
import { CommonButton, CommonText } from "styles/CommonStyle";
import {
  PostEditButtonHorizonSet,
  PostEditContainer,
  PostEditContentInput,
  PostEditHorizonSet,
  PostEditInput
} from "styles/PostStyle";

export default function EditBodyScreen(props: any) {
  const {
    title,
    setTitle,
    lecture,
    setLecture,
    department,
    setDepartment,
    content,
    setContent,
    idx,
    isEditMode,
    route
  } = props;

  function setValue(setFunction: Function, value: string) {
    setFunction(value);
  }

  function modifySelectedContent() {
    modifyContent(idx, title, lecture, department, content)
      .then((res) => {
        if (res.data.status === 200) alert("이야 료이키텐카이");
        route.push("/community");
        return;
      })
      .catch((e) => {
        console.log("e :>> ", e);
        return;
      });
  }

  function postNewContent() {
    postContent(title, lecture, department, content)
      .then((res) => {
        if (res.data.status === 200)
          alert("게시글이 성공적으로 등록되었습니다.");
        route.push("/community");
        return;
      })
      .catch((e) => {
        console.log("e :>> ", e);
        return;
      });
  }

  return (
    <PostEditContainer>
      <PostEditHorizonSet $height="48px" $width="100%">
        <CommonText
          $fontSize="18px"
          $fontWeight="500"
          $color="#010101"
          $lineHeight="18px"
          $margin="0 5px 0 0"
        >
          제목 :
        </CommonText>
        <PostEditInput
          $width="calc(100% - 55px)"
          $height="40px"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => {
            setValue(setTitle, e.target.value);
          }}
        />
      </PostEditHorizonSet>
      <PostEditHorizonSet $width="100%" $height="48px">
        <PostEditHorizonSet $height="48px" $width="50%">
          <CommonText
            $fontSize="16px"
            $fontWeight="500"
            $color="#010101"
            $lineHeight="16px"
            // $margin="0 5px 0 0"
          >
            강의명 :
          </CommonText>
          <PostEditInput
            $width="calc(100% - 60px)"
            $height="40px"
            placeholder="강의명을 입력해주세요."
            value={lecture}
            onChange={(e) => {
              setValue(setLecture, e.target.value);
            }}
          />
        </PostEditHorizonSet>
        <PostEditHorizonSet $height="48px" $width="50%">
          <CommonText
            $fontSize="18px"
            $fontWeight="500"
            $color="#010101"
            $lineHeight="18px"
            // $margin="0 5px 0 0"
          >
            전공 :
          </CommonText>
          <PostEditInput
            $width="calc(100% - 50px)"
            $height="40px"
            placeholder="전공명을 선택해주세요"
            value={department}
            onChange={(e) => {
              setValue(setDepartment, e.target.value);
            }}
          />
        </PostEditHorizonSet>
      </PostEditHorizonSet>
      <PostEditContentInput
        $width="100%"
        $height="80%"
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => {
          setValue(setContent, e.target.value);
        }}
      />
      <PostEditButtonHorizonSet $width="100%" $height="48px">
        <CommonButton
          $width="160px"
          $height="46px"
          $border="1px solid #000"
          $backGround="#fff"
          onClick={() => {
            route.back();
          }}
        >
          <CommonText
            $fontSize="1rem"
            $fontWeight="700"
            $color="#000"
            $lineHeight="1rem"
          >
            ❌ 취소
          </CommonText>
        </CommonButton>
        <CommonButton
          $width="160px"
          $height="46px"
          $border="1px solid #000"
          $backGround="#fff"
          $margin="0 0 0 5px"
          onClick={() => {
            if (isEditMode) modifySelectedContent();
            else postNewContent();
          }}
        >
          <CommonText
            $fontSize="1rem"
            $fontWeight="700"
            $color="#000"
            $lineHeight="1rem"
          >
            ✔️ 작성
          </CommonText>
        </CommonButton>
      </PostEditButtonHorizonSet>
    </PostEditContainer>
  );
}
