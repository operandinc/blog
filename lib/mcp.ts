import {FileService} from "@buf/operand_mcp.bufbuild_connect-web/file/v1/file_connectweb";
import {createPromiseClient, createConnectTransport, Interceptor} from "@bufbuild/connect-web";

export function fileClient() {
    return createPromiseClient(FileService, createConnectTransport({
        baseUrl: "https://mcp.operand.ai",
        interceptors: [
            createHeaderInterceptor({
                "Authorization": `Key ${process.env.OPERAND_API_KEY}`
            })
        ],
        jsonOptions: {
            ignoreUnknownFields: true
        }
    }))
}

function createHeaderInterceptor(headers: {
    [key: string]: string | null;
  }): Interceptor {
    return (next) => async (req) => {
      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          if (!req.header.has(key) && value) {
            req.header.set(key, value);
          }
        }
      }
      return await next(req);
    };
  }