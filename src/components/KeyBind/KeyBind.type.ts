export interface KeyBindProps {
  seal: string;
  type: 'Gray_Circle' | 'White_Square';
  dev?: boolean;
  onTrigger: () => void;
}
