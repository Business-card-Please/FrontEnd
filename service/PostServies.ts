import { AxiosMain } from "./AxiosConfig";

/**
 * 새 게시글 작성
 * @param title 제목
 * @param lecture  강의명
 * @param department 전공
 * @param content 내용
 * @returns
 */
export const postContent = async (
  title: string,
  lecture: string,
  department: string,
  content: string
) => {
  try {
    const result = await AxiosMain.post("/rentalboard/create", {
      title: title,
      lecture: lecture,
      department: department,
      content: content
    });
    console.log("result :>> ", result);
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    throw error;
  }
};

/**
 * 기존 게시글 수정
 * @param idx id 값
 * @param title 제목
 * @param lecture 강의명
 * @param department 전공
 * @param content 내용
 * @returns
 */
export const modifyContent = async (
  idx: number,
  title: string,
  lecture: string,
  department: string,
  content: string
) => {
  try {
    const result = await AxiosMain.post("/rentalboard/update", {
      idx: idx,
      title: title,
      lecture: lecture,
      department: department,
      content: content
    });
    console.log("result :>> ", result.data);
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    throw error;
  }
};

/**
 * 게시글 삭제
 * @param idx 게시글 특정
 * @returns 
 */
export const deleteContent = async (idx: number) => {
  try {
    const result = await AxiosMain.post("/rentalboard/delete", {
      idx: idx
    });
    console.log("delete :>> ", result.data);
    return result.data;
  } catch (error: any) {
    console.log("err :>> ", error);

    throw error;
  }
};
