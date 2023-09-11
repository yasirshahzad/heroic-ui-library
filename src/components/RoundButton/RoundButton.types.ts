import { HTMLAttributes } from 'react';

type BtnType =
  | 'search-list'
  | 'close'
  | 'check-green'
  | 'arrow-up-orange'
  | 'arrow-tail-right-green'
  | 'arrow-right-orange'
  | 'arrow-left-orange'
  | 'arrow-down-orange'
  | 'slider-handle'
  | 'phone-trade'
  | 'phone-requests-sent-selected'
  | 'phone-requests-sent-default'
  | 'phone-requests-received-selected'
  | 'phone-requests-received-default'
  | 'phone-report'
  | 'phone-message-send'
  | 'phone-group-pending'
  | 'phone-group-leave'
  | 'phone-group-add'
  | 'phone-friend-remove'
  | 'phone-friend-pending'
  | 'phone-myschool-default'
  | 'phone-chat-new'
  | 'phone-chats-direct-selected'
  | 'phone-chats-direct-default'
  | 'phone-chat-group-selected'
  | 'phone-chat-group-default'
  | 'phone-blocked-selected'
  | 'phone-blocked-default'
  | 'phone-block'
  | 'phone-myschool-selected'
  | 'checkbox-xd'
  | 'checkbox-checked'
  | 'checkbox-empty'
  | 'farming-dig'
  | 'phone-friend-add'
  | 'history'
  | 'phone-myfriends-default'
  | 'phone-myfriends-selected'
  | 'feedback'
  | 'home'
  | 'leave'
  | 'list'
  | 'magnifying-glass'
  | 'menu-closed'
  | 'menu-open'
  | 'minimap-global'
  | 'minimap-local'
  | 'minimap'
  | 'minus-orange'
  | 'minus-red'
  | 'personal-room-edit-default'
  | 'personal-room-edit-selected'
  | 'personal-room-edit'
  | 'personal-room-play-default'
  | 'personal-room-play-selected'
  | 'personal-room-play'
  | 'personal-room-invite'
  | 'plus-green'
  | 'plus-orange'
  | 'question'
  | 'random'
  | 'redo'
  | 'screen-full'
  | 'screen-small'
  | 'teleport-disabled'
  | 'teleport'
  | 'tts'
  | 'undo'
  | 'video-pause'
  | 'video-play'
  | 'video-stop'
  | 'zoom-in'
  | 'zoom-out';

export interface RoundButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Which Size of button should be?
   */
  size: 'small' | 'medium' | 'large';

  /**
   * Which type of button should be?
   */
  btnType: BtnType;

  /**
   *Optinal disable button
   */
  disable?: boolean;

  /**
   *Optinal Active/selected button
   */
  selected?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}
