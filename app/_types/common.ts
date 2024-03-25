export interface TabButtonProps {
  buttonName: string;
  className?: string;
  isActive: boolean;
  onClick?: () => void;
}

export interface ReviewRatingProps {
  clicked: boolean[];
  onStarClick?: ((index: number) => void) | null;
  isShow: boolean;
}

export interface ButtonProps {
  type?: 'submit' | undefined; // type이 undefined인 경우에는 'button'으로 지정
  onClick?: () => void;
  buttonName: string;
  className: string;
  disabled?: boolean;
  active?: boolean;
}

export interface ModalProps {
  onClose?: () => void;
}

export interface PortalProps {
  portalName: string;
  className: string;
}
