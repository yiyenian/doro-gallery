export interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  blurDataUrl?: string;
  title?: string;
  prompt?: string;     // 默认/兜底提示词
  promptCn?: string;   // 中文提示词
  promptEn?: string;   // 英文提示词
  url?: string;
  tags?: string[];
}
