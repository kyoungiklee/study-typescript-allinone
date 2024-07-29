// Data 객체와 날짜
// 날짜를 지정할 수 있고 날짜와 관련된 메서드도 제공하는 내장객체 Date에 대해 알아 봅니다.
// Date 객체를 활용하면 일시를 생성하거나 수정할 수 있고 시간 측정 및 날자를 출력할 수 있읍니다.

// 객체 생성하기
const item01 = () => {
  const tag = "item01";
  let now = new Date();
  console.log(tag, now);

  // new Date(timestamp)
  let Jan01_1970 = new Date(0);
  console.log(tag, Jan01_1970);

  let Jan02_1970 = new Date(24 * 3600 * 1000);
  console.log(tag, Jan02_1970);

  //1970년 1월 1일 이전 날짜에 해당하는 타임스탬프 값은 음수입니다.
  let Dec31_1969 = new Date(-24 * 3600 * 1000);
  console.log(tag, Dec31_1969);

  // new Date(datestring)
  let date = new Date("2017-01-26");
  console.log(tag, date);

  // new Date(year, month, date, hours, minutes, seconds, ms)
  // 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체가 반환됩니다.(지역 시간대 기준)
  // 첫번째와 두번째 인수만 필수입니다.
  const Jan01_2011 = new Date(2011, 0, 1, 0, 0, 0, 0);
  console.log(tag, Jan01_2011.toString());
  const Jan02_2011 = new Date(2011, 1, 1);
  console.log(tag, Jan02_2011.toString());
}
item01();

// 날짜 구성요소 얻기
const item02 = () => {
  const tag = "item02";
  // 현재일시
  let date = new Date();
  console.log(tag, date.getFullYear());
  console.log(tag, date.getMonth());
  console.log(tag, date.getDate());
  console.log(tag, date.getHours());
  console.log(tag, date.getMinutes());
  console.log(tag, date.getSeconds());
  console.log(tag, date.getMilliseconds());

  console.log(tag, date.getUTCHours());

  console.log(tag, new Date().getTimezoneOffset());
}
item02();

// 날짜 구성요소 설정하기
const item03 = () => {
  const tag = "item03";

  let today = new Date();

  today.setHours(0);
  console.log(tag, today.toString());

  today.setHours(0, 0, 0, 0);
  console.log(tag, today.toString());

  //date fomatting
  const moment = require('moment');
  const momentToday = moment();
  console.log(momentToday.format("YYYY-MM-DD HH:MM:SS"));
}
item03();

// 자동고침

const item04 = () => {
  const tag = "item04";

  let date = new Date(2024, 1, 28);
  date.setDate(date.getDate() + 2);
  console.log(tag, date.toLocaleDateString());

  date = new Date();
  date.setHours(date.getHours() + 4);
  console.log(tag, date.toLocaleDateString());

};
item04();

// Date 객체를 숫자로 변경해 시간차 측정하기
const item05 = () => {
  const tag = "item05";

  let date = Date.now();
  console.log(tag, +date);

  let start = new Date();
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  let end = Date.now();
  console.log(` 반복문을 모두 수행하는데 ${end - start} 밀리초가 걸렸습니다.`);
}
item05()

// 벤치마크
const item06 = () => {
  const tag = "item06";

  function diffSubtract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  let time1 = 0;
  let time2 = 0;

// 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }

  console.log( 'diffSubtract에 소모된 시간: ' + time1 );
  console.log( 'diffGetTime에 소모된 시간: ' + time2 );
}
item06();

// Date.parser()와 문자열
const item07 = () => {
  const tag = "item07";

  let ms = Date.parse('2024-07-26T20:29:50.417-07:00');
  console.log(tag, ms);

  let date = new Date(Date.parse('2024-07-26T20:29:50.417'));
  console.log(tag, date);

}
item07();

// 과제
// 2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
const item08 = () => {
  const tag = "item08";
  let date = new Date(2012, 1, 20, 3, 12);
  console.log(tag, date.toString());
}
item08();

// 과제
// 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.
const item09 = () => {
  const tag = "item09";

  let inputDate = 28; //사용자가 입력한 날자

  function getWeekDay(inputDate) {
    const dayOfWeekArray = ['일', '월', '화', '수', '목', '금', '토'];
    let date = new Date();
    let datetime = new Date(date.setDate(inputDate));
    return dayOfWeekArray[datetime.getDay()]
  }
  const weekDay = getWeekDay(inputDate);
  console.log(tag, weekDay);
};
item09();

// 과제
// 유럽달력 기준
// 유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7).
// ‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요.

const item10 = () => {
  const tag = "item10";


  function getLocalDay(date) {

    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      return 7;
    }
    return dayOfWeek
  }

  const localDay = getLocalDay(new Date());
  console.log(tag, localDay);
}
item10();

// 과제
// n일 전 '일' 출력하기
const item11 = () => {
  const tag = "item11";

  function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(date.getDate() - days);
    return copyDate.getDate();
  }

  let date = new Date(2015, 0, 2)
  console.log(tag,getDateAgo(date, 1));
  console.log(tag, getDateAgo(date, 2));
  console.log(tag,getDateAgo(date, 365));

}
item11();

// 과제
// 달의 마지막 일 출력하기
const item12 = () => {
  const tag = "item12";

  function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  console.log(tag, getLastDayOfMonth(2012, 0));
  console.log(tag, getLastDayOfMonth(2012, 1));
  console.log(tag, getLastDayOfMonth(2013, 1));
}
item12();

// 과제
// 오늘 하루가 시작된 이후 몇 초가 지났는지 반환하는 함수
const item13 = () => {
  const tag = " item13";

  function getSecondsToday() {
    let current = new Date();
    let today =new Date(current.getFullYear(), current.getMonth(), current.getDate());
    let diff = current.getTime() - today.getTime();
    return Math.round(diff / 1000);

  }
  const secondsToTomorrow = getSecondsToday();
  console.log(tag, secondsToTomorrow);
}
item13();

// 과제
// 오늘 하루가 끝날때까지 남은 초를 반환해 주는 함수 getSecondsToTomorrow() 함수

const item14 = () => {
  const tag = "item14";

  function getSecondsToTomorrow() {

    let current = new Date();
    let tomorrow = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
    let diff = tomorrow.getTime() - current.getTime();
    return Math.round(diff  / 1000);
  }

  const secondsToTomorrow = getSecondsToTomorrow();
  console.log(tag, secondsToTomorrow);

}
item14();

// 과제
// date를 아래와 같은 형식으로 변경해주는 함수 formatDate(date)를 만들어보세요.
//
// date가 지금으로부터 1초 미만 전의 날짜를 나타내면 "현재"를 반환해야 합니다.
// 그렇지 않고, date가 지금으로부터 1분 이하 전의 날짜를 나타내면 "n초 전"을 반환해야 합니다.
// 그렇지 않고, date가 지금으로부터 1시간 미만 전의 날짜를 나타내면 "n분 전"을 반환해야 합니다.
// 이 외의 경우는 전체 날짜를 "DD.MM.YY HH:mm"형식("일.월.연 시:분")으로 반환해야 합니다(예시: 31.12.16 10:00).
const item15 = () => {
  const tag = "item15";

  function formatDate(date) {

    let diff = (new Date() - date)
    if(diff < 1000) return "현재";

    let sec = Math.floor(diff/1000);
    if(sec < 60) return sec + "초 전";

    let min = Math.floor(diff/(60 * 1000))
    if(min < 60) return min + "분 전";

    let d = date;
    d = [
      '' + d.getFullYear(),
      '0' + (d.getMonth() + 1),
      '0' + d.getDate(),
      '0' + d.getHours(),
      '0' + d.getSeconds(),
    ].map(component => component.slice(-2));
    console.log(tag, d);
    console.log(tag, d.slice(0, 3));
    return d.slice(0,3).join('-') + " " + d.slice(3).join(":");

  }

  console.log(tag, (formatDate(new Date(new Date() - 1))));
  console.log(tag, (formatDate(new Date(new Date() - 30 * 1000))));
  console.log(tag, (formatDate(new Date(new Date() - 5 * 16 * 1000))));
  console.log(tag, (formatDate(new Date(new Date() - 86400 * 1000))));
}
item15();




