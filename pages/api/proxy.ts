// // pages/api/proxy.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import httpProxy from "http-proxy";
// import { IncomingMessage, ServerResponse } from "http";

// const proxy = httpProxy.createProxyServer();

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("Handler is called");
//   console.log("Original URL:", req.url);

//   // "/api/proxy"를 제거하여 외부 서버에 올바른 경로를 전달
//   req.url = req.url?.replace("/api/proxy", "");
//   console.log("Proxied URL:", req.url);

//   proxy.web(req, res, {
//     target: "http://180.189.65.21:8080", // 외부 서버 주소
//     changeOrigin: true // 필요한 경우 호스트 헤더를 변경합니다.
//   });

//   proxy.on("error", (err, req, res) => {
//     if (res instanceof ServerResponse) {
//       res.writeHead(500, {
//         "Content-Type": "text/plain"
//       });
//       res.end("Something went wrong.");
//     }
//   });
// }

// export const config = {
//   api: {
//     bodyParser: false
//   }
// };
