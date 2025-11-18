import { createApp } from 'vue';
import App from './App.vue';
import SecondChild from './components/SecondChild.vue';

// 앱 인스턴스를 변수에 담고
const app = createApp(App);

// 여기에 전역 컴포넌트 등록
app.component('SecondChild', SecondChild);

app.mount('#app');
