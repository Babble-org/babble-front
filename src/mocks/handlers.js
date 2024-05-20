import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:8081/babb", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        nick_name: "박건태",
        inserted_at: "2017-09-12T12:34:55Z",
        content: "안녕하세요. 저는 박건태입니다.",
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3e",
        nick_name: "이재혁",
        inserted_at: "2017-09-12T12:34:55Z",
        content: "안녕하세요. 저는 이재혁입니다.",
      },
    ]);
  }),
];
