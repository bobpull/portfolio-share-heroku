import 'dotenv/config'
import { app } from "./src/app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`밥보다 코딩 여러분 오늘도 화이팅!! (ง •̀_•́)ง by 밥풀이 \n정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);

});
