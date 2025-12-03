/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  title?: string;   // 标题
  prompt?: string;  // 提示词
  url?: string;     // 完整图片链接
}
