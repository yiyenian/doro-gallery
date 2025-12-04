/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  title?: string;
  prompt?: string;
  promptCn?: string; // 预留给未来可能的双语功能
  promptEn?: string;
  url?: string;
  tags?: string[];
}
