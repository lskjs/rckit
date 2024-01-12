import { mapValues } from '@lsk4/algos';

const defaults = (obj, p) => mapValues(obj, (v) => ({ ...p, ...v }));

// https://react-icons.github.io/react-icons/icons/go/
const interfaceOptions = {
  index: 'interface',
  from: 'react-icons/go',
};

const logosOptions = {
  index: 'logos',
  from: 'react-icons/pi',
};

export const config = {
  ...defaults(
    {
      alert: { export: 'Alert', import: 'GoAlert' },
      alertFill: { export: 'AlertFill', import: 'GoAlertFill' },
      arrowDown: { export: 'ArrowDown', import: 'GoArrowDown' },
      arrowLeft: { export: 'ArrowLeft', import: 'GoArrowLeft' },
      arrowRight: { export: 'ArrowRight', import: 'GoArrowRight' },
      arrowUp: { export: 'ArrowUp', import: 'GoArrowUp' },
      bell: { export: 'Bell', import: 'GoBell' },
      bellFill: { export: 'BellFill', import: 'GoBellFill' },
      bellSlash: { export: 'BellSlash', import: 'GoBellSlash' },
      blocked: { export: 'Blocked', import: 'GoBlocked' },
      bot: { export: 'Bot', import: 'GoDependabot' },
      calendar: { export: 'Calendar', import: 'GoCalendar' },
      check: { export: 'Check', import: 'GoCheck' },
      clock: { export: 'Clock', import: 'GoClock' },
      clockFill: { export: 'ClockFill', import: 'GoClockFill' },
      code: { export: 'Code', import: 'GoCode' },
      comments: { export: 'Comments', import: 'GoCommentDiscussion' },
      copy: { export: 'Copy', import: 'GoCopy' },
      cross: { export: 'Cross', import: 'GoX' },
      crossCircle: { export: 'CrossCircle', import: 'GoXCircle' },
      dot: { export: 'Dot', import: 'GoDotFill' },
      dots: { export: 'Dots', import: 'GoKebabHorizontal' },
      duplicate: { export: 'Duplicate', import: 'GoDuplicate' },
      eye: { export: 'Eye', import: 'GoEye' },
      eyeClosed: { export: 'EyeClosed', import: 'GoEyeClosed' },
      fileMedia: { export: 'FileMedia', import: 'GoFileMedia' },
      filter: { export: 'Filter', import: 'GoFilter' },
      flame: { export: 'Flame', import: 'GoFlame' },
      gear: { export: 'Gear', import: 'GoGear' },
      grabber: { export: 'Grabber', import: 'GoGrabber' },
      graph: { export: 'Graph', import: 'GoGraph' },
      hourglass: { export: 'Hourglass', import: 'GoHourglass' },
      image: { export: 'Image', import: 'GoImage' },
      info: { export: 'Info', import: 'GoInfo' },
      iterations: { export: 'Iterations', import: 'GoIterations' },
      key: { export: 'Key', import: 'GoKey' },
      lab: { export: 'Lab', import: 'GoBeaker' },
      moon: { export: 'Moon', import: 'GoMoon' },
      note: { export: 'Note', import: 'GoNote' },
      paperclip: { export: 'Paperclip', import: 'GoPaperclip' },
      paste: { export: 'Paste', import: 'GoPaste' },
      pencil: { export: 'Pencil', import: 'GoPencil' },
      people: { export: 'People', import: 'GoPeople' },
      person: { export: 'Person', import: 'GoPerson' },
      plug: { export: 'Plug', import: 'GoPlug' },
      plus: { export: 'Plus', import: 'GoPlus' },
      refresh: { export: 'Refresh', import: 'GoSync' },
      ruby: { export: 'Ruby', import: 'GoRuby' },
      search: { export: 'Search', import: 'GoSearch' },
      send: { export: 'Send', import: 'GoPaperAirplane' },
      share: { export: 'Share', import: 'GoShare' },
      sidebarCollapse: { export: 'SidebarCollapse', import: 'GoSidebarCollapse' },
      sidebarExpand: { export: 'SidebarExpand', import: 'GoSidebarExpand' },
      skip: { export: 'Skip', import: 'GoSkip' },
      sortAsc: { export: 'SortAsc', import: 'GoSortAsc' },
      sortDesc: { export: 'SortDesc', import: 'GoSortDesc' },
      stopwatch: { export: 'Stopwatch', import: 'GoStopwatch' },
      sun: { export: 'Sun', import: 'GoSun' },
      tag: { export: 'Tag', import: 'GoTag' },
      terminal: { export: 'Terminal', import: 'GoTerminal' },
      tools: { export: 'Tools', import: 'GoTools' },
      trash: { export: 'Trash', import: 'GoTrash' },
    },
    interfaceOptions,
  ),
  ...defaults(
    {
      twitch: { export: 'Twitch', import: 'PiTwitchLogo' },
      twitchFill: { export: 'TwitchFill', import: 'PiTwitchLogoFill' },
      telegram: { export: 'Telegram', import: 'PiTelegramLogo' },
      telegramFill: { export: 'TelegramFill', import: 'PiTelegramLogoFill' },
      youtube: { export: 'Youtube', import: 'PiYoutubeLogo' },
      youtubeFill: { export: 'YoutubeFill', import: 'PiYoutubeLogoFill' },
      instagram: { export: 'Instagram', import: 'PiInstagramLogo' },
      instagramFill: { export: 'InstagramFill', import: 'PiInstagramLogoFill' },
      apple: { export: 'Apple', import: 'PiAppleLogo' },
      appleFill: { export: 'AppleFill', import: 'PiAppleLogoFill' },
      appstore: { export: 'Appstore', import: 'PiAppStoreLogo' },
      appstoreFill: { export: 'AppstoreFill', import: 'PiAppStoreLogoFill' },
      discord: { export: 'Discord', import: 'PiDiscordLogo' },
      discordFill: { export: 'DiscordFill', import: 'PiDiscordLogoFill' },
      googlePlay: { export: 'GooglePlay', import: 'PiGooglePlayLogo' },
      googlePlayFill: { export: 'GooglePlayFill', import: 'PiGooglePlayLogoFill' },
      whatsapp: { export: 'Whatsapp', import: 'PiWhatsappLogo' },
      whatsappFill: { export: 'WhatsappFill', import: 'PiWhatsappLogoFill' },
      twitter: { export: 'Twitter', import: 'PiTwitterLogo' },
      twitterFill: { export: 'TwitterFill', import: 'PiTwitterLogoFill' },
      tiktok: { export: 'Tiktok', import: 'PiTiktokLogo' },
      tiktokFill: { export: 'TiktokFill', import: 'PiTiktokLogoFill' },
      slack: { export: 'Slack', import: 'PiSlackLogo' },
      slackFill: { export: 'SlackFill', import: 'PiSlackLogoFill' },
    },
    logosOptions,
  ),
};
