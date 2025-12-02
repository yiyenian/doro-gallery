/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  title?: string;   // 新增：标题 (例如 "案例 670")
  prompt?: string;  // 提示词
  url?: string;
}
