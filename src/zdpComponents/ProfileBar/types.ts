export type User = {
  authenticationType: string;
  email: string;
  externalUserId: string;
  firstName: string;
  lastName: string;
  id: number;
  isActive: boolean;
  userName: string;
  profilePic: string;
};

export type UserData = {
  auth_token: string;
  id: number;
  roles: Array<any>;
  user: User;
};
type Fn = () => void;

export type ProfileBarProps = {
  handleActionable: (id: number, type: NotificationActionType) => void;
  user: UserData | null;
  data?: any;
  handleOpenAppMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseAppMenu?: () => void;
  anchorElApp?: null | HTMLElement;
  handleOpenUserMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu?: (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => void;
  anchorElUser?: null | HTMLElement;
  handleOpenNotification?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNotification?: () => void;
  anchorElNotification?: null | HTMLElement;
  unReadNotificationsCount?: number;
  appsMainURL?: string;
  fetchMoreData: () => void;
  hasMore: boolean;
  pageNumber: number;
};

export type UserInformationProps = {
  handleOpenUserMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => void;
  anchorElUser?: null | HTMLElement;
  user: UserData | null;
};

export type ProfileBarProps1 = {
  handleCloseNotification: (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => void;
  handleOpenNotification: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenAppMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseAppMenu?: () => void;
  handleOpenUserMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => void;
  handleActionable: (id: number, type: NotificationActionType) => void;
  anchorElNotification: null | HTMLElement;
  anchorElApp?: null | HTMLElement;
  anchorElUser?: null | HTMLElement;
  fetchMoreData: () => void;
  hasMore: boolean;
  pageNumber: number;
};

export enum NotificationActionType {
  DENIED = "DENIED",
  APPROVED = "APPROVED",
}
