import { InputHTMLAttributes, ReactNode } from 'react';

export interface OrderItemProps {
  orderDetailId: number;
  title: string;
  price: number;
  quantity: number;
  score?: number;
  image?: string;
  isReview?: Boolean;
  onClick?: () => void;
  isReviewComplete?: Boolean;
  reviewText?: string;
}

export interface TabButtonProps {
  buttonName: string;
  className?: string;
  isActive?: boolean;
  selectedTab?: string;
  isProductDetail: boolean;
  onClick?: () => void;
}

export interface ReviewRatingProps {
  clicked: boolean[];
  onStarClick?: ((index: number) => void) | null;
  isShow: boolean;
}

export interface ButtonProps {
  type?: 'submit' | undefined; // type이 undefined인 경우에는 'button'으로 지정
  onClick?: (() => void) | ((e: React.MouseEvent) => void);
  buttonName: string;
  className: string;
  disabled?: boolean;
  active?: boolean;
}

export interface ModalProps {
  orderDetailId: number;
  image?: string;
  title: string;
  price: number;
  quantity: number;
  onClose?: () => void;
}

export interface PortalProps {
  orderDetailId: number;
  image?: string;
  title: string;
  price: number;
  quantity: number;
  portalName: string;
  className: string;
}

export interface CheckboxProps {
  label?: string;
  children?: ReactNode;
  dataName: string;
  isChecked?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
