///////////////////////////////////////////////////////
async function a() {
    const a = await fetch('https://test.api.weniv.co.kr/mall');
    const json = await a.json();
    const $root = document.querySelector('#root');
    const $ul = document.createElement('ul');

    const $liItems = json.map((product)=>{
        const $li = document.createElement('li');
        const $price = document.createElement('span');
        $price.innerText = product.price;

        const $name = document.createElement('strong');
        $name.innerText = product.productName

        const $img = document.createElement("img");
        $img.setAttribute('src','https://test.api.weniv.co.kr/'+product.thumbnailImg);

        $li.append($name,$price,$img)
        return $li
    })
    $ul.append(...$liItems); // 펼쳐서 출력
    // $ul.append($liItems); // 묶여서 출력
    $root.append($ul);
}

a()

//promise는 then, catch, finally

// import Component from "./core.js";

// class ProductImage extends Component {
//     render(){
//         const $productImage = document.createElement("img");
//         $productImage.setAttribute("src",this.props.src);
//         $productImage.addEventListener("click",(e)=>{
//         })

//         return $productImage
//     }
// }

// class ProductPage extends Component{
//     constructor(props){
//         super(props);
//         this.getData();
//         this.state = {
//             products:[]
//         }
//     }

//     async getData(){
//         const res = await fetch("https://test.api.weniv.co.kr/mall");
//         const json = await res.json();
//         this.setState({products:json});
//     }
    
//     render(){
//         const $page = document.createElement("div");
//         const $productLis = this.state.products.map((product)=>{
//             const productImage = new ProductImage({src:"https://test.api.weniv.co.kr/"+product.thumbnailImg})
//             const $productImage = productImage.initialize();

//             $productImage.addEventListener("click",()=>{
//                 alert(`가격:${product.price}`);
//             })
//             return $productImage
//         })
//         $page.append(...$productLis);
//         return $page;
//     }
// }

// const productPageProps = {buttontext:"안녕하세요!",name:"이름!"}
// const productPage = new ProductPage(productPageProps);

// init(productPage.initialize());

// function init($page) {
//     const $root = document.querySelector("#root");
//     $root.append($page)
// }

// async function onClickButton(){
//     //버튼을 눌렀을때 동작하는거 작성하기
//     const 서버응답 = await fetch('https://test.api.weniv.co.kr/mall')
//     const json = await 서버응답.json()
//     render($root,json.map((product)=>{
//         const liProps = {
//             product:product
//         }
//         return createLi(liProps)
//     }
//     ))

    
// }

// // 화면에 그려주는애..
// // 그려줄거를 받아서 그려주는애
// function render($target,$el) {
//     $target.append($el);
// }

// const buttonProps = {
//     text:"안녕sadasd",
//     onClickButton:onClickButton
// }

// function createUl(props) {
//     const $ul = document.createElement("ul");
//     return $ul
// }

// function createLi(props) {
//     const $li = document.createElement("li");
//     const productName = props.product.productName;
//     $li.innerText = productName
//     return $li
// }

// function createButton(props) {
//     console.log(props);
//     const $button = document.createElement("button");
//     $button.addEventListener('click',props.onClickButton);
//     $button.innerText = props.text;
//     return $button
// }

// const $button = createButton(buttonProps);
// const $ul = createUl();

// const $root = document.querySelector("#root");
// render($root,$button);
// render($root,$ul);



// class 고등학교{
//     constructor(props){
//         this.props = props
//     }
//     //메서드
//     교장선생님이름가져오기(){
//         console.log(this.props.교장선생님)
//     }

// }


// const 오현고등학교porps = {
//     최대학년:3,
//     교장선생님:"백광익"
// }

// const 중앙여자고등학교porps = {
//     최대학년:3,
//     교장선생님:"노태희"
// }

// // 고등학교 객체만들기 ㅋ object라고도함
// const 오현고등학교 = new 고등학교(오현고등학교porps);
// 오현고등학교.교장선생님이름가져오기()

// const 중앙여자고등학교 = new 고등학교(중앙여자고등학교porps);
// 중앙여자고등학교.교장선생님이름가져오기()

// 고등학교 << 클래스
// 3학년 << 클래스
// 5반 << 클래스

// function render(params) {
//     const $root = document.querySelector("#root");
//     const $button = document.createElement("button");
//     $button.innerText = "안녕";

//     async function onClickButton(){
//         //버튼을 눌렀을때 동작하는거 작성하기
//         console.log("주문하기");

//         const 서버응답 = await fetch('https://test.api.weniv.co.kr/mall');
//         // .then((response) => response.json())
//         // .then((data) => console.log(data)); // .then((서버응답)=> console.log(서버응답))

//         // 10번째 줄이 끝날 때까지 실행안됨
//         console.log(서버응답) //서버에서 데이터를 가져올 때까지 시간 걸림
//         const json = await 서버응답.json()
//         console.log(json)
//     }
    
//     $button.addEventListener('click',onClickButton)

//     $root.append($button);
// }

// render();