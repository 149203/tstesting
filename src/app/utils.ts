import { UrlWithParsedQuery, parse } from "url";

export class utils {
   public static parseUrl(url: string): UrlWithParsedQuery {
      if (!url) throw new Error("Empty url");
      return parse(url, true);
   }

   public static toUpperCase(str: string): string {
      return str.toUpperCase();
   }
}
