import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:8081/babb", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        nick_name: "박건태",
        inserted_at: "2024-05-20T12:34:55Z",
        content: "안녕하세요. 저는 박건태입니다.",
        img: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/500",
          "https://picsum.photos/600/600",
        ],
        comment: [
          {
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d312d",
            nick_name: "박건태",
            inserted_at: "2024-05-20T12:34:55Z",
            content: "안녕하세요. 저는 박건태입니다.1",
            n_comment: [
              {
                id: "c7b3d8e0-5e0b-4b0f-8b3a-3q9f4b3d312d",
                nick_name: "박건태",
                inserted_at: "2024-05-20T12:34:55Z",
                content: "대댓글1",
              },
              {
                id: "c7b3d8e0-5e0b-4b0f-1b3a-3b9f4b3d312d",
                nick_name: "박건태",
                inserted_at: "2024-05-20T12:34:55Z",
                content: "대댓글2",
              },
              {
                id: "c7b3d8ea-5e0b-4b0f-1b3a-3b9f4b3d312d",
                nick_name: "박건태",
                inserted_at: "2024-05-20T12:34:55Z",
                content: "대댓글3",
              },
            ],
          },
          {
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3web3d",
            nick_name: "박건태",
            inserted_at: "2024-05-20T12:34:55Z",
            content: "안녕하세요. 저는 박건태입니다.2",
          },
          {
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9aab3d3b3d",
            nick_name: "박건태",
            inserted_at: "2024-05-20T12:34:55Z",
            content: "안녕하세요. 저는 박건태입니다.3",
          },
          {
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3bfg4b3d3b3d",
            nick_name: "박건태",
            inserted_at: "2024-05-20T12:34:55Z",
            content: "안녕하세요. 저는 박건태입니다.4",
          },
        ],
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3e",
        nick_name: "이재혁",
        inserted_at: "2024-05-20T12:34:55Z",
        content: "안녕하세요. 저는 이재혁입니다.",
        img: ["https://picsum.photos/400/300", "https://picsum.photos/500/300"],
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3c",
        nick_name: "이재혁",
        inserted_at: "2024-05-20T12:34:55Z",
        content: "안녕하세요. 저는 이재혁입니다.",
        img: ["https://picsum.photos/1024/1024"],
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3a",
        nick_name: "이재혁",
        inserted_at: "2024-05-20T12:34:55Z",
        content: "안녕하세요. 저는 이재혁입니다.",
        img: [],
      },
    ]);
  }),
];
