import { ButtonHTMLAttributes } from 'react';

export enum BtnType {
  'search-list' = 'search-list',
  'check-green' = 'check-green',
  'arrow-up-orange' = 'arrow-up-orange',
  'arrow-tail-right-green' = 'arrow-tail-right-green',
  'arrow-right-orange' = 'arrow-right-orange',
  'arrow-left-orange' = 'arrow-left-orange',
  'arrow-down-orange' = 'arrow-down-orange',
  'slider-handle' = 'slider-handle',
  'phone-trade' = 'phone-trade',
  'phone-requests-sent-default' = 'phone-requests-sent-default',
  'phone-requests-received-default' = 'phone-requests-received-default',
  'phone-report' = 'phone-report',
  'phone-message-send' = 'phone-message-send',
  'phone-group-pending' = 'phone-group-pending',
  'phone-group-leave' = 'phone-group-leave',
  'phone-group-add' = 'phone-group-add',
  'phone-friend-remove' = 'phone-friend-remove',
  'phone-friend-pending' = 'phone-friend-pending',
  'phone-myschool-default' = 'phone-myschool-default',
  'phone-chat-new' = 'phone-chat-new',
  'phone-chats-direct-default' = 'phone-chats-direct-default',
  'phone-chat-group-default' = 'phone-chat-group-default',
  'phone-blocked-default' = 'phone-blocked-default',
  'phone-block' = 'phone-block',
  'checkbox-xd' = 'checkbox-xd',
  'checkbox-checked' = 'checkbox-checked',
  'checkbox-empty' = 'checkbox-empty',
  'farming-dig' = 'farming-dig',
  'phone-friend-add' = 'phone-friend-add',
  'history' = 'history',
  'phone-myfriends-default' = 'phone-myfriends-default',
  'feedback' = 'feedback',
  'home' = 'home',
  'leave' = 'leave',
  'list' = 'list',
  'magnifying-glass' = 'magnifying-glass',
  'menu-closed' = 'menu-closed',
  'menu-open' = 'menu-open',
  'minimap-global' = 'minimap-global',
  'minimap-local' = 'minimap-local',
  'minimap' = 'minimap',
  'minus-orange' = 'minus-orange',
  'minus-red' = 'minus-red',
  'personal-room-edit-default' = 'personal-room-edit-default',
  'personal-room-edit' = 'personal-room-edit',
  'personal-room-play-default' = 'personal-room-play-default',
  'personal-room-play' = 'personal-room-play',
  'personal-room-invite' = 'personal-room-invite',
  'plus-green' = 'plus-green',
  'plus-orange' = 'plus-orange',
  'question' = 'question',
  'random' = 'random',
  'redo' = 'redo',
  'screen-full' = 'screen-full',
  'screen-small' = 'screen-small',
  'teleport' = 'teleport',
  'tts' = 'tts',
  'undo' = 'undo',
  'video-pause' = 'video-pause',
  'video-play' = 'video-play',
  'video-stop' = 'video-stop',
  'zoom-in' = 'zoom-in',
  'zoom-out' = 'zoom-out',
  'close' = 'close',
}

export interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Which size of button should be?
   */
  size: 'small' | 'medium' | 'large';

  /**
   * Which type of button should be?
   */
  btnType: BtnType;

  /**
   *Optinal active/selected button
   */
  selected?: boolean;

  /**
   *Optinal disable button
   */
  disabled?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}
