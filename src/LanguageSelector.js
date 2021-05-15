import LocalizedStrings from 'react-native-localization';
 

let strings = new LocalizedStrings({
 en:{
    qrCheckinPageName:"QR Check-in",
    confirm:"Confirm",
    approved:"Approved",
    retry:"Retry",
    retryHeading:"Authentication has expired.",
    retrySubHeading:"Please try again",
    notAttemptHeading:"QR Code Entry",
    notAttemptSubHeading:"Check in with QR Code at the facility you want to use",
    noticePageName:"Notice",
    

 },

 ko: {
    qrCheckinPageName:"QR 체크인",
    confirm:"확인",
    approved:"QR체크인 되었습니다.",
    retry:"재시도",
    retryHeading:"인증 시간이 만료되었습니다.",
    retrySubHeading:"QR코드 스캔을 다시 시도하시려면[재시도]를 눌러주세요.",
    notAttemptHeading:"입장을 위한 QR 코드",
    notAttemptSubHeading:"이용하려는 시설에 QR코드로 체크인 하세요.",
    noticePageName:"알림",
    
 }
});
export default strings;