/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  title?: string;
  prompt?: string;    // 🔴 保持一致：加上问号
  promptCn?: string;
  promptEn?: string;
  url?: string;
  tags?: string[];
}
