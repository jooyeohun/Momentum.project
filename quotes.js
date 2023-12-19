const quotes = [
    {
        quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다뤈지는 것이다",
        arthor: "",
    },
    {
        quote: "게으르지 않음은 영원한 삶의 집이요, 게으름은 죽음의 집이다",
        arthor: "",
    },
    {
        quote: "나는 날마다, 모든 면에서, 점점 더 좋아지고 있다",
        arthor: "",
    },
    {
        quote: "인생에 뜻을 세우는데 적당한 떄는 없다",
        arthor: "볼드윈",
    },
    {
        quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안된다",
        arthor: "하버트 개셔",
    },
    {
        quote: "우리는 행복하기 위해 웃는 것이 아니라, 웃기 떄문에 행복하다",
        arthor: "윌리엄 제임스",
    },
    {
        quote: "너 자신이 되어라. 다른 사람은 이미 있으니까",
        arthor: "오스카 와일드",
    },
    {
        quote: "세상에 공짜는 없다",
        arthor: "",
    },
    {
        quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려산다",
        arthor: "J.하비스",
    },
    {
        quote: "안생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라",
        arthor: "나딘 스테어",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라",
        arthor: "P.시루스",
    },
    {
        quote: "배움은 의무도 생존도 아니다",
        arthor: "에드워드 데밍",
    },
];

const quote = document.querySelector("#quote span:first-child");
const arthor = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
arthor.innerText = todaysQuote.arthor;